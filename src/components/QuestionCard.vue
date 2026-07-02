<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import { useGameStore } from '../stores/game';
import { useImageFallback } from '../composables/useImageFallback';

const props = defineProps({
  question: { type: Object, required: true },
  revealedText: { type: String, default: '' },
});

const emit = defineEmits(['submit']);

const store = useGameStore();
const isHardMode = computed(() => store.settings.hardMode);

const answerValue = ref('');
const inputRef = ref(null);

const idRef = computed(() => props.question.id);
const letraRef = computed(() => props.question.letra);
const { src: imageSrc, onError: onImageError } = useImageFallback(idRef, letraRef);

const letterLabel = computed(() =>
  props.question.tipo === 'contiene'
    ? `Contiene la letra ${props.question.letra}`
    : `Comienza con la letra ${props.question.letra}`
);

const statusClass = computed(() => `is-${props.question.status}`);
const isPending = computed(() => props.question.status === 'pending');

const feedback = computed(() => {
  const { status, respuesta } = props.question;
  if (status === 'correct') return { text: '✓ ¡Correcto!', variant: 'correct' };
  if (status === 'incorrect') {
    return { text: `✗ Incorrecto. Respuesta correcta: ${respuesta.texto}`, variant: 'incorrect' };
  }
  if (status === 'timeout') {
    return { text: `⏱ Tiempo agotado. Respuesta correcta: ${respuesta.texto}`, variant: 'timeout' };
  }
  if (props.revealedText) {
    return { text: `📖 Respuesta: ${props.revealedText}`, variant: 'reveal' };
  }
  return null;
});

// sincroniza el input cuando cambia la pregunta activa
watch(
  () => props.question,
  (q) => {
    answerValue.value = q.status === 'pending' ? '' : q.userAnswer || '';
    if (q.status === 'pending') {
      nextTick(() => inputRef.value?.focus());
    }
  },
  { immediate: true }
);

function handleSubmit() {
  if (!isPending.value) return;
  emit('submit', answerValue.value);
}
</script>

<template>
  <div class="question-card pop-in" :class="[statusClass, { shake: question.status === 'incorrect' || question.status === 'timeout' }]">
    <div v-if="!isHardMode" class="question-card__image-wrap">
      <img
        class="question-card__image"
        :src="imageSrc"
        :alt="`Imagen de la pregunta ${question.id}`"
        @error="onImageError"
      />
    </div>

    <div v-else class="hard-mode-badge">
      🙈 Modo difícil — sin imagen
    </div>

    <p class="question-letter">{{ letterLabel }}</p>

    <div class="question-card__body">
      <p class="question-enunciado">{{ question.informacionGeneral.enunciado }}</p>
      <p class="question-pregunta">{{ question.informacionGeneral.pregunta }}</p>

      <form class="answer-form" autocomplete="off" @submit.prevent="handleSubmit">
        <input
          ref="inputRef"
          v-model="answerValue"
          class="answer-input"
          type="text"
          placeholder="Escribí tu respuesta…"
          aria-label="Respuesta"
          :disabled="!isPending"
        />
        <button type="submit" class="btn btn--primary" :disabled="!isPending">Responder</button>
      </form>

      <p v-if="feedback" class="answer-feedback" :class="`answer-feedback--${feedback.variant}`">
        {{ feedback.text }}
      </p>
    </div>
  </div>
</template>