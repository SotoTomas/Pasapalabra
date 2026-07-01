<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isSubmitting = ref(false);

async function login() {
  errorMessage.value = '';
  isSubmitting.value = true;
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    // no navegamos manualmente: onAuthStateChanged en App.vue detecta
    // el cambio de usuario y cambia de pantalla solo.
  } catch (e) {
    errorMessage.value = 'Email o contraseña incorrectos.';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <section class="screen">
    <div class="start-card">
      <span class="eyebrow">Acceso</span>
      <h1 class="title-display">Iniciar <span class="title-accent">Sesión</span></h1>

      <form class="answer-form" style="flex-direction: column; gap: 12px;" @submit.prevent="login">
        <input
          v-model="email"
          class="answer-input"
          type="email"
          placeholder="Email"
          autocomplete="username"
          required
        />
        <input
          v-model="password"
          class="answer-input"
          type="password"
          placeholder="Contraseña"
          autocomplete="current-password"
          required
        />
        <button type="submit" class="btn btn--primary btn--lg" :disabled="isSubmitting">
          {{ isSubmitting ? 'Entrando…' : 'Entrar' }}
        </button>
      </form>

      <p v-if="errorMessage" class="start-error">{{ errorMessage }}</p>
    </div>
  </section>
</template>