<script setup>
//sasa
import { useGameStore } from '../stores/game';
import { formatTime } from '../utils/formatTime';

const emit = defineEmits(['play-again']);
const store = useGameStore();
</script>

<template>
  <section class="screen">
    <div class="end-card">
      <span class="eyebrow">Partida finalizada</span>
      <h2 class="title-display">Resultados</h2>

      <div class="end-stats">
        <div class="end-stat">
          <span class="end-stat__value">{{ store.score }}</span>
          <span class="end-stat__label">Puntaje final</span>
        </div>
        <div class="end-stat">
          <span class="end-stat__value">{{ store.accuracy }}%</span>
          <span class="end-stat__label">Efectividad</span>
        </div>
        <div class="end-stat">
          <span class="end-stat__value">{{ store.correctCount }}</span>
          <span class="end-stat__label">Aciertos</span>
        </div>
        <div class="end-stat">
          <span class="end-stat__value">{{ store.incorrectCount + store.timeoutCount }}</span>
          <span class="end-stat__label">Errores</span>
        </div>
        <div class="end-stat">
          <span class="end-stat__value">{{ store.unansweredCount }}</span>
          <span class="end-stat__label">Sin responder</span>
        </div>
        <div class="end-stat">
          <span class="end-stat__value">{{ store.maxStreak }}</span>
          <span class="end-stat__label">Mejor racha</span>
        </div>
        <div class="end-stat">
          <span class="end-stat__value">{{ formatTime(store.totalTimeSeconds) }}</span>
          <span class="end-stat__label">Tiempo total</span>
        </div>
      </div>

      <button class="btn btn--primary btn--lg" @click="emit('play-again')">Volver a jugar</button>
    </div>
  </section>
</template>
