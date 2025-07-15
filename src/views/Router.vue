<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function toBasic() {
  // pushは、ブラウザのもどるボタンを押すと、前のページの履歴が残っているので、戻ることができる
  router.push({ path: 'basic' })
}
</script>
<template>
  <!-- Blog Article -->
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl space-y-5 md:space-y-8">
      <!-- Content -->
      <div class="space-y-3">
        <h2 class="text-2xl font-bold md:text-3xl dark:text-white">UseRouterについて</h2>

        <p class="text-lg text-gray-800 dark:text-neutral-200 mb-10">
          動的にrouterを設定したい場合
        </p>
        <div class="flex gap-2">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none"
            @click="toBasic"
          >
            リンク
          </button>
          <!-- 下記は、importなど特にしなくてもテンプレート側で定義できる -->
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none"
            @click="$router.push({ path: 'basic' })"
          >
            テンプレートでrouteを定義
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Blog Article -->
</template>
