<script setup>
import Reactive from '@components/Reactive.vue'
import Event from '@components/Event.vue'
import Loop from './Loop.vue'
</script>
<template>
  <!-- Blog Article -->
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl">
      <!-- Content -->
      <div class="space-y-5 md:space-y-8">
        <div class="space-y-3">
          <h2 class="text-2xl font-bold md:text-3xl dark:text-white">Ref、Reactiveの違い</h2>

          <p class="text-lg text-gray-800 dark:text-neutral-200 mb-10">
            公式ドキュメントでは、基本的に、オブジェクトもrefを使用するように推奨しているようだ🥲
          </p>
          <Reactive msg="You did it!" />
          <Event />
        </div>
      </div>
      <!-- End Content -->
    </div>
    <Loop />
  </div>
  <!-- End Blog Article -->
</template>
