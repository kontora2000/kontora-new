<template>
  <header class="overflow-hidden">
    <AppContainer variant="header">
      <div
        class="header-logo animate__animated animate__fadeIn fixed z-10 ml-2 mt-[43px] h-[45px] w-[77px] cursor-pointer text-sm text-ui-white mix-blend-difference before:absolute before:left-[-8px] before:top-[-7px] before:content-[url('/ellipse.svg')] lg:fixed lg:mt-[80px] xl:mt-[84px]"
        @click="scrollToTop"
      >
        Kontora
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import { scrollToTop } from '../composables/scrollToTop';
</script>

<style scoped></style>
