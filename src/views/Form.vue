<script setup>
import { ref } from 'vue'
const userName = ref('')
const policy = ref('同意しない')
const multiple = ref([])
const gender = ref('')
const phone = ref('')
</script>
<template>
  <!-- Contact Us -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Contact us</h1>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">
          We'd love to talk about how we can help you.
        </p>
      </div>
    </div>

    <div class="mt-12 max-w-lg mx-auto">
      <!-- Card -->
      <div
        class="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700"
      >
        <form>
          <div class="grid gap-4 lg:gap-6">
            <!-- Grid -->
            <div class="grid grid-cols-1 gap-4 lg:gap-6">
              <div>
                <label
                  for="hs-name-contacts-1"
                  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >名前</label
                >
                <input
                  id="hs-name-contacts-1"
                  v-model="userName"
                  type="text"
                  name="hs-name-contacts-1"
                  class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>
            <!-- End Grid -->

            <!-- Grid -->
            <div>
              <label
                for="hs-email-contacts-1"
                class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >メール</label
              >
              <input
                id="hs-email-contacts-1"
                type="email"
                name="hs-email-contacts-1"
                autocomplete="email"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            <!-- End Grid -->
            <!-- セレクト -->
            <label for="phone" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >電話番号</label
            >
            <div class="flex">
              <input
                id="phone"
                type="text"
                class="py-1.5 sm:py-2 px-3 pe-11 block border w-full border-gray-200 shadow-2xs -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="+x(xxx)xxx-xx-xx"
              />
              <select
                v-model="phone"
                class="py-1.5 sm:py-2 px-3 pe-9 block border w-full sm:w-auto border-gray-200 shadow-2xs -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              >
                <option value="" disabled>Select one</option>
                <option v-for="option in ['Mobile', 'Home', 'Work', 'Fax']" :key="option">
                  {{ option }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="hs-about-contacts-1"
                class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >内容</label
              >
              <textarea
                id="hs-about-contacts-1"
                name="hs-about-contacts-1"
                rows="4"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              ></textarea>
            </div>
          </div>
          <!-- End Grid -->
          <div class="mt-3">
            <p class="text-sm">個人情報保護方針に同意しますか？</p>
            <!-- Checkbox -->
            <div class="flex items-center">
              <div class="flex">
                <input
                  id="policy"
                  v-model="policy"
                  true-value="同意する"
                  false-value="同意しない"
                  name="policy"
                  type="checkbox"
                  class="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
              </div>
              <div class="ms-3">
                <label for="policy" class="text-sm dark:text-white">{{ policy }}</label>
              </div>
            </div>
            <!-- End Checkbox -->

            <p>{{ multiple }}</p>
            <div class="checkbox-wrap flex gap-3">
              <!-- Checkbox -->
              <div class="flex items-center">
                <div class="flex">
                  <input
                    id="multiple1"
                    v-model="multiple"
                    value="question"
                    name="multiple1"
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div class="ms-3">
                  <label for="multiple1" class="text-sm dark:text-white">質問</label>
                </div>
              </div>
              <!-- End Checkbox -->
              <!-- Checkbox -->
              <div class="flex items-center">
                <div class="flex">
                  <input
                    id="multiple2"
                    v-model="multiple"
                    value="survey"
                    name="multiple2"
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div class="ms-3">
                  <label for="multiple2" class="text-sm dark:text-white">アンケート</label>
                </div>
              </div>
              <!-- End Checkbox -->
              <!-- Checkbox -->
              <div class="flex items-center">
                <div class="flex">
                  <input
                    id="multiple3"
                    v-model="multiple"
                    value="other"
                    name="multiple3"
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div class="ms-3">
                  <label for="multiple3" class="text-sm dark:text-white">その他</label>
                </div>
              </div>
              <!-- End Checkbox -->
            </div>

            <!-- ラジオボタン -->
            <p>{{ gender }}</p>
            <div class="flex gap-5">
              <div class="flex items-center">
                <div class="flex">
                  <input
                    id="male"
                    v-model="gender"
                    name="male"
                    type="radio"
                    class=""
                    value="male"
                  />
                </div>
                <div class="ms-3">
                  <label for="male" class="text-sm dark:text-white">男性</label>
                </div>
              </div>
              <!-- ラジオボタン -->
              <div class="flex items-center">
                <div class="flex">
                  <input
                    id="female"
                    v-model="gender"
                    name="female"
                    type="radio"
                    class=""
                    value="female"
                  />
                </div>
                <div class="ms-3">
                  <label for="female" class="text-sm dark:text-white">女性</label>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 grid">
            <button
              type="submit"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              送信
            </button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
  <!-- End Contact Us -->
</template>
