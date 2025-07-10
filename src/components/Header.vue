<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- ========== HEADER ========== -->
  <header
    class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm"
  >
    <nav
      class="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700"
    >
      <div class="flex items-center">
        <RouterLink to="/" class="font-semibold focus:outline-hidden focus:opacity-80">
          Vue.Project</RouterLink
        >
        <div class="ms-1 sm:ms-2"></div>
      </div>
      <div
        id="hs-navbar-header-floating"
        class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
        aria-labelledby="hs-navbar-header-floating-collapse"
      >
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7"
        >
          <RouterLink
            to="/basic"
            class="py-0.5 md:py-3 px-4 md:px-1 font-medium text-gray-800 hover:text-gray-800 focus:outline-hidden dark:border-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-200"
          >
            Basic
          </RouterLink>
          <RouterLink
            to="/practice"
            class="py-0.5 md:py-3 px-4 md:px-1 font-medium text-gray-800 hover:text-gray-800 focus:outline-hidden dark:border-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-200"
          >
            Practice
          </RouterLink>
          <RouterLink
            to="/form"
            class="py-0.5 md:py-3 px-4 md:px-1 font-medium text-gray-800 hover:text-gray-800 focus:outline-hidden dark:border-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-200"
          >
            Form
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->
</template>
