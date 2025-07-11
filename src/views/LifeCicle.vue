<script setup>
import ShowMessage from '@/components/ShowMessage.vue'
import { ref } from 'vue'

const flag = ref(true)
function toggleButton() {
  flag.value = !flag.value
}
</script>
<template>
  <div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h2 class="text-2xl font-bold md:text-3xl dark:text-white mb-5">ライフサイクルについて</h2>

    <div class="flex gap-2">
      <button
        type="button"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-hidden focus:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none"
        @click="toggleButton"
      >
        表示切り替え
      </button>
    </div>

    <template v-if="flag">
      <ShowMessage />
    </template>

    <!-- Timeline -->
    <div class="mt-10">
      <p class="mb-5">コンポーネントの実行手順</p>
      <ul>
        <li class="group relative flex gap-x-5">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700"
          >
            <span
              class="relative z-10 size-6 flex justify-center items-center bg-emerald-500 rounded-full p-3 text-white border"
            >
              1
            </span>
          </div>
          <!-- End Icon -->
          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-gray-800 dark:text-neutral-400">onBeforeMounted</h3>
            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              mountする直前に実行される
            </p>
          </div>
          <!-- End Right Content -->
        </li>
        <li class="group relative flex gap-x-5">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700"
          >
            <span
              class="relative z-10 size-6 flex justify-center items-center bg-emerald-500 rounded-full p-3 text-white border"
            >
              2
            </span>
          </div>
          <!-- End Icon -->
          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-gray-800 dark:text-neutral-400">onMounted</h3>
            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              コンポーネントがmountされる時に実行
            </p>
          </div>
          <!-- End Right Content -->
        </li>
        <li class="group relative flex gap-x-5">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700"
          >
            <span
              class="relative z-10 size-6 flex justify-center items-center bg-emerald-500 rounded-full p-3 text-white border"
            >
              3
            </span>
          </div>
          <!-- End Icon -->
          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-gray-800 dark:text-neutral-400">onBeforeUpdate</h3>
            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              patch(変更を検知し、再レンダリング)される直前に実行。
            </p>
          </div>
          <!-- End Right Content -->
        </li>
        <li class="group relative flex gap-x-5">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700"
          >
            <span
              class="relative z-10 size-6 flex justify-center items-center bg-emerald-500 rounded-full p-3 text-white border"
            >
              4
            </span>
          </div>
          <!-- End Icon -->
          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-gray-800 dark:text-neutral-400">onUpdated</h3>
            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              コンポーネントで再レンダリングされたときに実行。なにか変更を検知したら、実行される
            </p>
          </div>
          <!-- End Right Content -->
        </li>
        <li class="group relative flex gap-x-5">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700"
          >
            <span
              class="relative z-10 size-6 flex justify-center items-center bg-emerald-500 rounded-full p-3 text-white border"
            >
              5
            </span>
          </div>
          <!-- End Icon -->
          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-gray-800 dark:text-neutral-400">onBeforeUnmount</h3>
            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              unmountされる直前に実行される
            </p>
          </div>
          <!-- End Right Content -->
        </li>
        <li class="group relative flex gap-x-5">
          <!-- Icon -->
          <div
            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700"
          >
            <span
              class="relative z-10 size-6 flex justify-center items-center bg-emerald-500 rounded-full p-3 text-white border"
            >
              6
            </span>
          </div>
          <!-- End Icon -->
          <!-- Right Content -->
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-gray-800 dark:text-neutral-400">onUnmounted</h3>
            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">unmount時に実行</p>
          </div>
          <!-- End Right Content -->
        </li>
      </ul>
    </div>
    <!-- End Timeline -->
  </div>
</template>
