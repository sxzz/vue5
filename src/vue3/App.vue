<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello World')
</script>

<template>
  <h1>I'm Vue 3!</h1>
  <p>{{ msg }}</p>
  <input type="text" v-model="msg" />
</template>
