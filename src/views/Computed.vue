<script setup>
import IconCheck from '@/components/icons/IconCheck.vue'
import { ref, computed } from 'vue'

const score = ref(0)
const evaluation = computed((value) => {
  console.log('前回の値がとれる', value)
  // computed内のrefオブジェクトはすべて監視され、どれかが更新された場合に、実行がされる
  return score.value > 3 ? 'GOOD!' : 'BAD'
})

// 上記の関数を実行した結果にアクセスできる
console.log(evaluation.value)
</script>
<template>
  <!-- Blog Article -->
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl">
      <!-- Content -->
      <div class="space-y-5 md:space-y-8">
        <div class="space-y-3">
          <h2 class="text-2xl font-bold md:text-3xl dark:text-white">Computedについて</h2>

          <p class="text-lg text-gray-800 dark:text-neutral-200 mb-10">
            リアクティブ性を保ったまま、式をまとめたいとき。<br />
            使い所は、template内で使用する処理が複雑になってまとめたいときに使用してみよう！
          </p>
          <h3 class="text-1xl font-bold dark:text-white">Computedを使用するうえでの注意点</h3>

          <ul class="mt-7 space-y-2.5 text-sm">
            <li class="flex gap-x-2">
              <IconCheck />
              <span class="text-gray-800 dark:text-neutral-400 font-bold">
                データをセットすることができない。読み取り専用であることに注意
              </span>
            </li>
          </ul>

          <p>score:{{ score }}</p>
          <p class="font-bold text-lg">{{ evaluation }}</p>
          <button
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            @click="score++"
          >
            +1
          </button>
        </div>
      </div>
      <!-- End Content -->
    </div>
  </div>
  <!-- End Blog Article -->
</template>
