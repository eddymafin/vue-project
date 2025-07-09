<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Reactive from './components/Reactive.vue'
</script>

<template>
  <div class="wrapper red-500">
    <h2 class="text-lg font-bold">ref、reactiveの違い</h2>
    <Reactive msg="You did it!" />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>
