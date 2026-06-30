<script setup>
import { computed } from 'vue';
import { useGameStore } from '../stores/game';

const emit = defineEmits(['play', 'open-settings']);
const store = useGameStore();

const questionCount = computed(() => store.questions.length);

const subtitle = computed(() => {
  if (store.isLoading) return 'Cargando preguntas…';
  if (store.loadError) return null;
  return `${questionCount.value} preguntas listas para jugar`;
});

function handleShuffle() {
  store.shuffleQuestions();
}
</script>

<template>
  <section class="screen">
    <div class="start-card">
      <span class="eyebrow">Trivia de historia del arte</span>
      <h1 class="title-display">Pasapalabra <span class="title-accent">del Arte</span></h1>

      <p v-if="subtitle" class="start-subtitle">{{ subtitle }}</p>

      <div class="start-actions">
        <button
          class="btn btn--primary btn--lg"
          :disabled="store.isLoading || !!store.loadError || questionCount === 0"
          @click="emit('play')"
        >
          Jugar
        </button>
        <button class="btn btn--ghost" :disabled="questionCount === 0" @click="handleShuffle">
          🎲 Mezclar preguntas
        </button>
        <button class="btn btn--ghost" @click="emit('open-settings')">⚙ Configuración</button>
      </div>

      <p v-if="store.loadError" class="start-error">
        {{ store.loadError }}
      </p>
    </div>
  </section>
</template>
