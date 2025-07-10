<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <h2 class="text-lg font-bold mt-5">イベントオブジェクト</h2>

  <p>カウント数：{{ count }}</p>
  <div class="p-5 bg-red-100" @click="count++">
    <button
      type="button"
      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
      @click.stop
    >
      ボタン
    </button>

    <input type="text" class="border block" @keyup="count++" />
  </div>
</template>
