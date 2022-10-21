<script setup lang="ts">
import { ref } from 'vue2'

const msg = ref('Hello World')
</script>

<template>
  <div>
    <h1>I'm Vue 2!</h1>
    <p>{{ msg }}</p>
    <input type="text" v-model="msg" />
  </div>
</template>
