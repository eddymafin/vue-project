<script setup>
import { ref } from 'vue'
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  nextTick,
} from 'vue'

onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

const count = ref(0)

function countUp() {
  count.value++
  nextTick(() => {
    console.log(nextTick)
  })
}

// 下記のように記述することもできる
// async function countUp() {
//   count.value++
//   await nextTick()
// }
</script>

<template>
  <p>カウント： {{ count }}</p>
  <p class="bg-emerald-400 text-white rounded mb-4">表示されます。</p>
  <button
    type="button"
    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-emerald-800 text-white hover:bg-emerald-700 focus:outline-hidden focus:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none"
    @click="countUp"
  >
    カウントアップ
  </button>
</template>
