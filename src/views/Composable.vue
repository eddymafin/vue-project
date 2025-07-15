<script setup>
import Counter from '@components/Counter.vue'
import { ref } from 'vue'
import Input from '@/components/Input.vue'
import { refHistory } from '@/composable/refHistory'
const count = ref(0)

// 使い回しができるように関数化→他のコンポーネントでも使いまわしができるように、別refHistory.jsファイルに以降
// function refHistory(source) {
//   const history = ref([])

//   watchEffect(() => {
//     history.value.push(source.value)
//   })

//   function undo() {
//     if (history.value.length === 1) return
//     history.value.pop()
//     source.value = history.value.pop()
//   }
//   return {
//     history,
//     undo,
//   }
// }

const { history, undo } = refHistory(count)

const userInput = ref('')
const { history: history2, undo: undo2 } = refHistory(userInput)
</script>
<template>
  <!-- Blog Article -->
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl space-y-5 md:space-y-8">
      <!-- Content -->
      <div class="space-y-3">
        <h2 class="text-2xl font-bold md:text-3xl dark:text-white">Composableについて</h2>

        <p class="text-lg text-gray-800 dark:text-neutral-200 mb-10">
          vueの機能が盛り込まれた関数のことを、Composableという。ロジックを切り離して、コンポーネント単位で使いまわしたい場合に便利。
        </p>
        <Counter :value="count" />
        <button
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-hidden focus:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none"
          @click="count++"
        >
          カウントアップ
        </button>
        <p>{{ history }}</p>
        <button
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 focus:outline-hidden focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
          @click="undo"
        >
          へらす
        </button>

        <p>{{ userInput }}</p>
        <p>{{ history2 }}</p>
        <Input v-model="userInput" :name="'test'" :title="'テキスト'" />
        <button
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 focus:outline-hidden focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
          @click="undo2"
        >
          前の文字にもどる
        </button>
      </div>
      <!-- End Content -->
    </div>
  </div>
  <!-- End Blog Article -->
</template>
