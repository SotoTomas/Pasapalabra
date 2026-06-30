import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { loadQuestions } from '../utils/loadQuestions';
import { shuffleArray } from '../utils/shuffleArray';
import { answersMatch } from '../utils/normalizeAnswer';

const DATA_PATH = '/data/preguntas.json';

const DEFAULT_SETTINGS = {
  timePerQuestion: 10,
  order: 'normal',
  autoShowAnswer: false,
  sound: true,
};

const ADVANCE_DELAY_MS = 2000;

export const useGameStore = defineStore('game', () => {
  // ---------- estado ----------
  const rawQuestions = ref([]);       // tal cual vienen del JSON, nunca se mutan
  const questions = ref([]);          // copia de trabajo con status/userAnswer
  const currentIndex = ref(0);
  const settings = ref({ ...DEFAULT_SETTINGS });

  const score = ref(0);
  const currentStreak = ref(0);
  const maxStreak = ref(0);
  const correctCount = ref(0);
  const incorrectCount = ref(0);
  const timeoutCount = ref(0);

  const isPaused = ref(false);
  const isFinished = ref(false);
  const startedAt = ref(null);
  const finishedAt = ref(null);

  const loadError = ref(null);
  const isLoading = ref(true);
  const meta = ref({});

  const secondsLeft = ref(0);
  const totalSeconds = ref(DEFAULT_SETTINGS.timePerQuestion);

  let intervalId = null;
  let advanceTimeoutId = null;

  // ---------- getters ----------
  const currentQuestion = computed(() => questions.value[currentIndex.value] ?? null);
  const total = computed(() => questions.value.length);
  const isFirst = computed(() => currentIndex.value === 0);
  const isLast = computed(() => currentIndex.value === total.value - 1);
  const answeredCount = computed(
    () => correctCount.value + incorrectCount.value + timeoutCount.value
  );
  const unansweredCount = computed(
    () => questions.value.filter((q) => q.status === 'pending').length
  );
  const accuracy = computed(() =>
    answeredCount.value === 0 ? 0 : Math.round((correctCount.value / answeredCount.value) * 100)
  );
  const totalTimeSeconds = computed(() => {
    if (!startedAt.value) return 0;
    const end = finishedAt.value ?? Date.now();
    return Math.round((end - startedAt.value) / 1000);
  });

  // ---------- carga inicial ----------
  async function init() {
    isLoading.value = true;
    loadError.value = null;
    try {
      const { questions: data, meta: loadedMeta } = await loadQuestions(DATA_PATH);
      rawQuestions.value = data;
      questions.value = toGameQuestions(data);
      meta.value = loadedMeta;
    } catch (error) {
      loadError.value = error.message;
    } finally {
      isLoading.value = false;
    }
  }

  function toGameQuestions(list) {
    return list.map((q) => ({ ...q, status: 'pending', userAnswer: '' }));
  }

  // ---------- configuración ----------
  function updateSettings(newSettings) {
    settings.value = { ...settings.value, ...newSettings };
  }

  // ---------- ciclo de partida ----------
  function startGame() {
    const ordered = settings.value.order === 'random' ? shuffleArray(rawQuestions.value) : rawQuestions.value;
    questions.value = toGameQuestions(ordered);
    currentIndex.value = 0;
    resetStats();
    isFinished.value = false;
    isPaused.value = false;
    startedAt.value = Date.now();
    finishedAt.value = null;
    startTimerForCurrent();
  }

  function restartGame() {
    clearTimers();
    questions.value = toGameQuestions(questions.value);
    currentIndex.value = 0;
    resetStats();
    isFinished.value = false;
    isPaused.value = false;
    startedAt.value = Date.now();
    finishedAt.value = null;
    startTimerForCurrent();
  }

  function shuffleQuestions() {
    questions.value = shuffleArray(questions.value);
    currentIndex.value = 0;
    if (!isFinished.value && startedAt.value) {
      startTimerForCurrent();
    }
  }

  function resetStats() {
    score.value = 0;
    currentStreak.value = 0;
    maxStreak.value = 0;
    correctCount.value = 0;
    incorrectCount.value = 0;
    timeoutCount.value = 0;
  }

  // ---------- temporizador ----------
  function startTimerForCurrent() {
    clearTimers();
    const q = currentQuestion.value;
    if (!q || q.status !== 'pending') {
      secondsLeft.value = 0;
      return;
    }
    totalSeconds.value = settings.value.timePerQuestion;
    secondsLeft.value = settings.value.timePerQuestion;
    intervalId = setInterval(tick, 1000);
  }

  function tick() {
    secondsLeft.value -= 1;
    if (secondsLeft.value <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      handleTimeout();
    }
  }

  function pauseGame() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    isPaused.value = true;
  }

  function resumeGame() {
    isPaused.value = false;
    const q = currentQuestion.value;
    if (q && q.status === 'pending' && secondsLeft.value > 0 && !intervalId) {
      intervalId = setInterval(tick, 1000);
    }
  }

  function clearTimers() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    if (advanceTimeoutId) {
      clearTimeout(advanceTimeoutId);
      advanceTimeoutId = null;
    }
  }

  // ---------- respuestas ----------
  function submitAnswer(rawValue) {
    const q = currentQuestion.value;
    if (!q || q.status !== 'pending') return;

    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }

    const isCorrect = answersMatch(rawValue, q.respuesta.texto);
    q.userAnswer = rawValue;
    q.status = isCorrect ? 'correct' : 'incorrect';

    if (isCorrect) {
      registerCorrect();
    } else {
      registerIncorrect();
    }

    scheduleAdvance();
  }

  function handleTimeout() {
    const q = currentQuestion.value;
    if (!q || q.status !== 'pending') return;

    q.status = 'timeout';
    registerTimeout();
    scheduleAdvance();
  }

  function registerCorrect() {
    currentStreak.value += 1;
    score.value += currentStreak.value * 10;
    correctCount.value += 1;
    maxStreak.value = Math.max(maxStreak.value, currentStreak.value);
  }

  function registerIncorrect() {
    currentStreak.value = 0;
    incorrectCount.value += 1;
  }

  function registerTimeout() {
    currentStreak.value = 0;
    timeoutCount.value += 1;
  }

  function scheduleAdvance() {
    advanceTimeoutId = setTimeout(() => {
      if (isLast.value) {
        finishGame();
      } else {
        goNext();
      }
    }, ADVANCE_DELAY_MS);
  }

  function finishGame() {
    clearTimers();
    isFinished.value = true;
    finishedAt.value = Date.now();
  }

  // ---------- navegación ----------
  function goNext() {
    if (currentIndex.value < total.value - 1) {
      currentIndex.value += 1;
      startTimerForCurrent();
    }
  }

  function goPrev() {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
      startTimerForCurrent();
    }
  }

  function revealCurrentAnswer() {
    return currentQuestion.value?.respuesta?.texto ?? '';
  }

  return {
    // estado
    questions,
    currentIndex,
    settings,
    score,
    currentStreak,
    maxStreak,
    correctCount,
    incorrectCount,
    timeoutCount,
    isPaused,
    isFinished,
    loadError,
    isLoading,
    meta,
    secondsLeft,
    totalSeconds,

    // getters
    currentQuestion,
    total,
    isFirst,
    isLast,
    answeredCount,
    unansweredCount,
    accuracy,
    totalTimeSeconds,

    // acciones
    init,
    updateSettings,
    startGame,
    restartGame,
    shuffleQuestions,
    pauseGame,
    resumeGame,
    submitAnswer,
    goNext,
    goPrev,
    revealCurrentAnswer,
  };
});
