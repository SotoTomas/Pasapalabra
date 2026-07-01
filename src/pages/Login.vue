<script setup>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

const email = ref("");
const password = ref("");

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Login correcto");
  } catch (e) {
    alert("Error en login");
  }
};
</script>

<template>
  <input v-model="email" placeholder="email" />
  <input v-model="password" type="password" placeholder="password" />
  <button @click="login">Entrar</button>
</template>