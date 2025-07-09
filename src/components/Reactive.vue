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
  // reactive内に、refオブジェクトがあった場合は？ valueなして、アクセスができる
  email: ref('なし'),
})

// 下記のようにオブジェクトとして、追加することもでき、さらにreactiveになる
instructor.sns = 'twiiter'

// refの場合は、.valueで値を参照できる
console.log(info.value.students)
// reactiveの場合は、.valueなしで、値を参照できる
console.log(instructor.name)

function increment() {
  info.value.students += 1
  instructor.age += 1
  // 下記で、リアクティブになっていることがわかる
  instructor.sns = '@〇〇'
  // 下記、reactive内のrefもvvalueが自動付与されているので、不要
  instructor.email = 'tarou@gmail.com'
}

// ただし、reactiveに、配列を入れる場合は、注意！！！！.valueが付与されないので、
// なぜ、上記のような扱いなのか？配列には、いろんなメソッドあるため。
// 例えば、refではないデータも混じっているとき、.valueを省略できてしまうと、
// items.reverse()で、[ref(4), ref(1), ref(2), 3]というように、
// 意図しない挙動になる可能性があるため、明示的に、valueをつけるようにしている
const items = reactive([ref(1), ref(2), ref(3)], 4)
console.log(items[0])

// オブジェクトの中に、ref要素がある場合。テンプレートからアクセスをしたい場合は、注意点が必要！
const courseInfo = {
  sections: ref(10),
  language: 'Japanese',
}
// script内では、下記のようにアクセスできる
console.log(courseInfo.sections.value)
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
  <p>{{ instructor.sns }}</p>
  <p>{{ instructor.email }}</p>

  <!-- テンプレートでアクセスする場合は、.valueが必要 -->
  <p>{{ courseInfo.sections.value }}</p>
  <p>{{ courseInfo.language }}</p>
</template>
