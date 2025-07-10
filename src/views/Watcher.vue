<script setup>
import IconCheck from '@/components/icons/IconCheck.vue'
import { ref, watchEffect, watch } from 'vue'

const count = ref(0)
const score = ref(0)
watch(
  () => {
    console.log('watch firrst argument')
  },
  (newValue, oldValue) => {
    // こちらは変更が起こっていないと更新がされないが、第3引数のimmediateをtrueにすると、
    // データに変化がなくても発火されるようになる
    console.log('watch')
    // 下記、newValueとoldValueの値が同じだったときは、関数は実行されない
    console.log('newValue', newValue)
    console.log('oldValue', oldValue)
  },
  {
    immediate: true,
  },
)
watchEffect(() => {
  console.log('watchEffect')
  // 下記で、データにアクセスしていないときは、watchEffectは実行されない
  console.log(count.value)

  // 非同期の処理も記述することができる
  setTimeout(() => {
    console.log('after 1 second')
  }, 1000)

  // リアクティブ要素の更新もできる
  // count.value = 'Count up!'
})
</script>
<template>
  <!-- Blog Article -->
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl">
      <!-- Content -->
      <div class="space-y-5 md:space-y-8">
        <div class="space-y-3">
          <h2 class="text-2xl font-bold md:text-3xl dark:text-white">Watcherについて</h2>

          <p class="text-lg text-gray-800 dark:text-neutral-200 mb-10">
            なにかの変更を検知して、処理をしたいときに、利用する<br />
            関数内でリアクティブなデータが更新されたときに、実行するので、computedと同じ動きをする。
          </p>
          <h3 class="text-1xl font-bold dark:text-white">WatchEffectを使用するうえでの注意点</h3>

          <ul class="mt-7 space-y-2.5 text-sm">
            <li class="flex gap-x-2">
              <IconCheck />
              <span class="text-gray-800 dark:text-neutral-400 font-bold">
                変更を検知したい場合は、同期的な処理の中で、データのアクセスをする必要がある
              </span>
            </li>
            <li class="flex gap-x-2">
              <IconCheck />
              <span class="text-gray-800 dark:text-neutral-400 font-bold">
                computedと異なり、非同期な処理や値の更新も記述できる
              </span>
            </li>
          </ul>

          <p>score:{{ count }}</p>
          <button
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            @click="count++"
          >
            +1
          </button>

          <h2 class="text-2xl font-bold dark:text-white mt-10">watchについて</h2>

          <h3 class="text-1xl font-bold dark:text-white">WatchEffectとの違い</h3>

          <ul class="mt-7 space-y-2.5 text-sm">
            <li class="flex gap-x-2">
              <IconCheck />
              <span class="text-gray-800 dark:text-neutral-400 font-bold">
                引数を指定して、watchEffectよりも明示的に記述する必要がある<br />
                第一引数：監視したいリアクティブなデータ<br />
                第二引数：監視したいリアクティブなデータが更新されたときに、実行したい処理を関数で記述する
              </span>
            </li>
            <li class="flex gap-x-2">
              <IconCheck />
              <span class="text-gray-800 dark:text-neutral-400 font-bold">
                第二引数の関数の引数に、監視しているデータの新しいデータと、古いデータを取得することができる。<br />
                ただし、新しいデータと古いデータが同じときは、第二引数の関数は、実行されない。<br />
                こちらをデータの変化の有無に問わず、発火させたいときは、第3引数のimmediateをtrueにする
              </span>
            </li>
          </ul>

          <p>score:{{ score }}</p>
          <button
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            @click="score++"
          >
            count +1
          </button>
        </div>
      </div>
      <!-- End Content -->
    </div>
  </div>
  <!-- End Blog Article -->
</template>
