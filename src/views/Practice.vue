<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <!-- Icon Blocks -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h2 class="text-2xl font-bold md:text-3xl dark:text-white">応用的な使い方</h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
      <!-- Card -->
      <RouterLink to="/computed">
        <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" />
                <circle cx="17.5" cy="10.5" r=".5" />
                <circle cx="8.5" cy="7.5" r=".5" />
                <circle cx="6.5" cy="12.5" r=".5" />
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                />
              </svg>
            </div>
            <div class="shrink-0">
              <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">
                Computedについて
              </h3>
            </div>
          </div>
          <p class="text-gray-600 dark:text-neutral-400">リアクティブな処理をまとめたいとき</p>
        </div>
      </RouterLink>
      <!-- End Card -->

      <!-- Card -->
      <RouterLink to="/watcher">
        <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
                />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <circle cx="17.5" cy="17.5" r="3.5" />
              </svg>
            </div>
            <div class="shrink-0">
              <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">
                Watcherについて
              </h3>
            </div>
          </div>
          <p class="text-gray-600 dark:text-neutral-400">
            リアクティブなデータ更新時に、処理を走らせたいとき
          </p>
        </div>
      </RouterLink>
      <!-- End Card -->

      <!-- Card -->
      <RouterLink to="/component">
        <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
                />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <circle cx="17.5" cy="17.5" r="3.5" />
              </svg>
            </div>
            <div class="shrink-0">
              <h3 class="break-all block text-lg font-semibold text-gray-800 dark:text-white">
                Component間のデータ受け渡し
              </h3>
            </div>
          </div>
          <p class="text-gray-600 dark:text-neutral-400">
            親コンポーネントから子コンポーネントへのデータ受け渡し
          </p>
        </div>
      </RouterLink>
      <!-- End Card -->

      <!-- Card -->
      <RouterLink to="/life-cicle">
        <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
                />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <circle cx="17.5" cy="17.5" r="3.5" />
              </svg>
            </div>
            <div class="shrink-0">
              <h3 class="break-all block text-lg font-semibold text-gray-800 dark:text-white">
                ライフサイクルについて
              </h3>
            </div>
          </div>
          <p class="text-gray-600 dark:text-neutral-400">コンポーネントのライフサイクルについて</p>
        </div>
      </RouterLink>
      <!-- End Card -->

      <!-- Card -->
      <RouterLink to="/composable">
        <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
                />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <circle cx="17.5" cy="17.5" r="3.5" />
              </svg>
            </div>
            <div class="shrink-0">
              <h3 class="break-all block text-lg font-semibold text-gray-800 dark:text-white">
                Composableについて
              </h3>
            </div>
          </div>
          <p class="text-gray-600 dark:text-neutral-400">Composition APIについて</p>
        </div>
      </RouterLink>
      <!-- End Card -->
    </div>
  </div>
  <!-- End Icon Blocks -->
</template>
