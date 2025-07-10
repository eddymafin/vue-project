<script setup>
import { ref } from 'vue'

const user = ref([
  {
    name: '山田太郎',
    age: 30,
    role: 'CEO / Enginner',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: '山田花子',
    age: 38,
    role: 'UI/UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: '松本花子',
    age: 38,
    role: 'UI/UX Designer',
    image:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
])
</script>
<template>
  <div class="px-4 py-10 mx-auto mt-10">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">ループ</h2>
      <p class="mt-1 text-gray-600 dark:text-neutral-400">配列のループ</p>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      <template v-for="(item, key, index) in user" :key="value">
        <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <img class="rounded-lg size-20" :src="item.image" alt="Avatar" />
          <div class="grow">
            <div>
              <h3 class="font-medium text-gray-800 dark:text-neutral-200">{{ item.name }}</h3>
              <p class="mt-1 text-xs uppercase text-gray-500 dark:text-neutral-500">
                {{ item.role }}
              </p>
            </div>
          </div>
        </div>
        <!-- End Col -->
      </template>
    </div>

    <!-- End Grid -->
  </div>
</template>
