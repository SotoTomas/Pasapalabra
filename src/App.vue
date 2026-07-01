<script setup>
import { ref, onMounted } from 'vue';
import { useGameStore } from './stores/game';
import StartScreen from './components/StartScreen.vue';
import SettingsScreen from './components/SettingsScreen.vue';
import GameScreen from './components/GameScreen.vue';
import EndScreen from './components/EndScreen.vue';
import LoginScreen from './components/LoginScreen.vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';

const store = useGameStore();
const screen = ref('start');

const currentUser = ref(null);
const isCheckingAuth = ref(true);

onAuthStateChanged(auth, (user) => {
  currentUser.value = user;
  isCheckingAuth.value = false;
});

onMounted(() => {
  store.init();
});

function goTo(name) {
  screen.value = name;
}

function handlePlay() {
  store.startGame();
  goTo('game');
}

function handleFinishGame() {
  goTo('end');
}

function handlePlayAgain() {
  goTo('start');
}
</script>

<template>
  <section v-if="isCheckingAuth" class="screen">
    <p class="start-subtitle">Verificando sesión…</p>
  </section>

  <LoginScreen v-else-if="!currentUser" />

  <template v-else>
    <StartScreen
      v-if="screen === 'start'"
      @play="handlePlay"
      @open-settings="goTo('settings')"
    />

    <SettingsScreen
      v-else-if="screen === 'settings'"
      @back="goTo('start')"
    />

    <GameScreen
      v-else-if="screen === 'game'"
      @finished="handleFinishGame"
    />

    <EndScreen
      v-else-if="screen === 'end'"
      @play-again="handlePlayAgain"
    />
  </template>
</template>