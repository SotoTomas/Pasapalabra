<script setup>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

const email = ref("");
const password = ref("");
const error = ref("");

const login = async () => {
  error.value = "";

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);

    // si entra bien:
    window.location.href = "/";
  } catch (err) {
    error.value = "Email o contraseña incorrectos";
  }
};
</script>

<template>
  <div>
    <h1>Login</h1>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Contraseña" />

    <button @click="login">Entrar</button>

    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>