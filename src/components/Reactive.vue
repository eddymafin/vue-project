<script setup>
import { ref, reactive } from 'vue'

// オブジェクトもリアクティブにできるが、refがすでにオブジェクトのため、入れ子になっていいる
const info = ref({
  students: 1000,
  rating: 4,
})

// そのため、オブジェクトをreactiveにしたいときは、reactiveを使用する
const instructor = reactive({
  name: '山田太郎',
  age: 34,
})

// refの場合は、.valueで値を参照できる
console.log(info.value.students)
// reactiveの場合は、.valueなしで、値を参照できる
console.log(instructor.name)

function increment() {
  info.value.students += 1
  instructor.age += 1
}
</script>

<template>
  <!-- テンプレートは、どちらも同じ -->
  <p>{{ info.students }}</p>
  <p>{{ instructor.name }}</p>
  <p>{{ instructor.age }}</p>
  <button
    type="button"
    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    @click="increment"
  >
    ボタン
  </button>
</template>
