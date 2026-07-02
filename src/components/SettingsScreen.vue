<script setup>
import { reactive } from 'vue';
import { useGameStore } from '../stores/game';

const emit = defineEmits(['back']);
const store = useGameStore();

// copia local: solo se aplica al store al confirmar
const form = reactive({ ...store.settings });

function save() {
  store.updateSettings({
    timePerQuestion: Number(form.timePerQuestion),
    order: form.order,
    autoShowAnswer: form.autoShowAnswer,
    sound: form.sound,
  });
  emit('back');
}
</script>

<template>
  <section class="screen">
    <div class="settings-card">
      <h2 class="section-title">Configuración</h2>

      <div class="settings-row">
        <label for="setting-time">Tiempo por pregunta</label>
        <select id="setting-time" v-model.number="form.timePerQuestion" class="select">
          <option :value="5">5 segundos</option>
          <option :value="10">10 segundos</option>
          <option :value="15">15 segundos</option>
          <option :value="20">20 segundos</option>
          <option :value="30">30 segundos</option>
          <option :value="9999">Infinito</option>
        </select>
      </div>

      <div class="settings-row">
        <label for="setting-order">Orden</label>
        <select id="setting-order" v-model="form.order" class="select">
          <option value="normal">Normal</option>
          <option value="random">Aleatorio</option>
        </select>
      </div>

      <div class="settings-row">
        <label for="setting-autoshow">Mostrar respuestas automáticamente</label>
        <select id="setting-autoshow" v-model="form.autoShowAnswer" class="select">
          <option :value="false">No</option>
          <option :value="true">Sí</option>
        </select>
      </div>

      <div class="settings-row">
        <label for="setting-sound">Sonidos</label>
        <select id="setting-sound" v-model="form.sound" class="select">
          <option :value="true">Activados</option>
          <option :value="false">Desactivados</option>
        </select>
      </div>

      <div class="settings-actions">
        <button class="btn btn--primary" @click="save">Guardar y volver</button>
      </div>
    </div>
  </section>
</template>
