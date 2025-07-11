<script setup>
// definePropsはインポートなどは不要。
// defineProps(['value'])

const props = defineProps({
  value: {
    type: Number,

    default: 50,
    // デフォルトの値が、objectか配列の場合は、関数で指定する必要がある
    // default: function(){
    //   return [10, 20]
    // }
    // 下記で、詳細なvalidationを作ることができる。warnがでるようになっている
    validator(value) {
      return value === 0 || value === 1
    },
  },
})
</script>
<template>
  <h3>カウント数</h3>

  <p>{{ props.value }}</p>
</template>
