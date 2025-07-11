<template>
  <!-- 下記のように$emit関数で、クリック時にresetという名前のイベントを発生させることができる -->
  <!-- 上記のイベントを親コンポーネントで指定すると、子から親へデータを受け渡すことができる -->
  <!-- また、第二引数には、渡したいデータを渡すことができる -->
  <button
    type="button"
    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 focus:outline-hidden focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
    @click="$emit('reset', 100)"
  >
    リセット
  </button>
</template>
