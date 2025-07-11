<script setup>
import Counter from '@components/Counter.vue'
import ResetButton from '@/components/ResetButton.vue'
import { ref } from 'vue'
const count = ref(0)

const count2 = ref(0)

const onReset = (value) => {
  count2.value = value
}
</script>
<template>
  <!-- Blog Article -->
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl space-y-5 md:space-y-8">
      <!-- Content -->
      <div class="space-y-3">
        <h2 class="text-2xl font-bold md:text-3xl dark:text-white">Propsについて</h2>

        <p class="text-lg text-gray-800 dark:text-neutral-200 mb-10">
          親コンポーネントから子コンポーネントへのデータ受け渡し。
        </p>
        <Counter :value="count" />
        <button
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
          @click="count++"
        >
          カウントアップ
        </button>
      </div>
      <!-- End Content -->
      <!-- Content -->
      <div class="space-y-3">
        <h2 class="text-2xl font-bold md:text-3xl dark:text-white">Emitについて</h2>

        <p class="text-lg text-gray-800 dark:text-neutral-200 mb-10">
          子コンポーネントから親コンポーネントへのデータ受け渡し。<br />
          $emitという関数の引数に指定した名前でイベントを発生させることができる。
        </p>
        <Counter :value="count2" />
        <div class="flex gap-2">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
            @click="count2++"
          >
            カウントアップ
          </button>
          <!-- 親コンポーネントは、$eventで子から渡ってきたデータを受け取ることができる -->
          <!-- <ResetButton @reset="count2 = $event" /> -->
          <ResetButton @reset="onReset" />
        </div>
      </div>
      <!-- End Content -->
    </div>
  </div>
  <!-- End Blog Article -->
</template>
