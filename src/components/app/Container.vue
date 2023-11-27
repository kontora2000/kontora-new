<template>
  <div class="container mx-auto" :class="containerClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'header' | 'footer' | 'section' | 'fullscreen';
}>();

const containerClass = computed(() => {
  if (props.variant === 'header') {
    return 'pl-1 sm:px-6  lg:px-8';
  } else if (props.variant === 'section') {
    return 'px-2 sm:px-6 md:px-8 lg:pl-[135px]  xl:pl-[200px] xl:pr-10 base:pl-[320px]';
  } else if (props.variant === 'footer') {
    return 'px-3 sm:px-6 lg:px-8';
  } else if (props.variant === 'fullscreen') {
    return 'px-0';
  }
});
</script>

<style scoped></style>
