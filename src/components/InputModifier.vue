<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
})

const [model, modifiers] = defineModel({
  type: String,
  default: '',
  // 既存のデータ
  // get(value) {},
  // 更新されたデータ
  set(value) {
    if (modifiers.uppercase) {
      return value.toUpperCase()
    }
  },
})
</script>
<template>
  {{ modifiers }}
  <label :for="props.name" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">
    {{ props.title }}
  </label>
  <input
    :id="props.name"
    v-model.lazy="model"
    :type="props.type"
    :name="props.name"
    class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
  />
</template>
