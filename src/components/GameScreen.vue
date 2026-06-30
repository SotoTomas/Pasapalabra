<script setup>
import { computed, ref, watch } from 'vue';
import { useGameStore } from '../stores/game.js';
import { formatTime } from '../utils/formatTime.js';
import QuestionCard from './QuestionCard.vue';

const emit = defineEmits(['finished']);
const store = useGameStore();

const revealedText = ref('');

const progressPercent = computed(() =>
  store.total === 0 ? 0 : ((store.currentIndex + 1) / store.total) * 100
);

const timerLabel = computed(() => formatTime(store.secondsLeft));
const timerIsAlert = computed(() => store.secondsLeft <= Math.min(3, store.totalSeconds));

watch(
  () => store.currentIndex,
  () => {
    revealedText.value = '';
  }
);

watch(
  () => store.isFinished,
  (finished) => {
    if (finished) emit('finished');
  }
);

function handleSubmit(value) {
  store.submitAnswer(value);
}

function handlePrev() {
  revealedText.value = '';
  store.goPrev();
}

function handleNext() {
  revealedText.value = '';
  store.goNext();
}

function handlePause() {
  store.pauseGame();
}

function handleResume() {
  store.resumeGame();
}

function handleRestart() {
  revealedText.value = '';
  store.restartGame();
}

function handleShuffle() {
  store.shuffleQuestions();
}

function handleReveal() {
  revealedText.value = store.revealCurrentAnswer();
}
</script>

<template>
  <section class="screen screen--game">
    <header class="topbar">
      <div class="stat">
        <span class="stat__label">Puntaje</span>
        <span class="stat__value">{{ store.score }}</span>
      </div>
      <div class="stat">
        <span class="stat__label">Racha</span>
        <span class="stat__value">{{ store.currentStreak }}</span>
      </div>
      <div class="stat">
        <span class="stat__label">Mejor racha</span>
        <span class="stat__value">{{ store.maxStreak }}</span>
      </div>
      <div class="stat stat--timer">
        <span class="stat__label">Tiempo</span>
        <span class="stat__value stat__value--timer" :class="{ 'stat__value--alert': timerIsAlert }">
          {{ timerLabel }}
        </span>
      </div>
      <div class="stat">
        <span class="stat__label">Pregunta</span>
        <span class="stat__value">{{ store.currentIndex + 1 }} / {{ store.total }}</span>
      </div>
    </header>

    <div class="progress-bar">
      <div class="progress-bar__fill" :style="{ width: progressPercent + '%' }"></div>
    </div>

    <main class="game-main">
      <button
        class="nav-arrow nav-arrow--left"
        aria-label="Pregunta anterior"
        :disabled="store.isFirst"
        @click="handlePrev"
      >
        ←
      </button>

      <QuestionCard
        v-if="store.currentQuestion"
        :key="store.currentQuestion.id"
        :question="store.currentQuestion"
        :revealed-text="revealedText"
        @submit="handleSubmit"
      />

      <button
        class="nav-arrow nav-arrow--right"
        aria-label="Pregunta siguiente"
        :disabled="store.isLast"
        @click="handleNext"
      >
        →
      </button>
    </main>

    <footer class="controls-bar">
      <button v-if="!store.isPaused" class="btn btn--ghost" @click="handlePause">⏸ Pausar</button>
      <button v-else class="btn btn--ghost" @click="handleResume">▶ Reanudar</button>
      <button class="btn btn--ghost" @click="handleRestart">⏮ Reiniciar</button>
      <button class="btn btn--ghost" @click="handleShuffle">🎲 Mezclar</button>
      <button class="btn btn--ghost" @click="handleReveal">📖 Mostrar respuesta</button>
    </footer>

    <div v-if="store.isPaused" class="pause-overlay">
      <div class="pause-overlay__content">
        <p>Juego en pausa</p>
        <button class="btn btn--primary" @click="handleResume">▶ Reanudar</button>
      </div>
    </div>
  </section>
</template>
