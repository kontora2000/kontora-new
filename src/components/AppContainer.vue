<template>
  <div class="container" :class="containerClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'header' | 'footer' | 'section';
}>();

const containerClass = computed(() => {
  if (props.variant === 'header') {
    return 'pl-1 sm:px-6 lg:px-8';
  } else if (props.variant === 'section') {
    return 'px-3 sm:px-6 lg:pl-[160px]  xl:pl-[200px] xl:pr-8 base:pl-[320px]';
  } else if (props.variant === 'footer') {
    return 'px-3 sm:px-6 lg:px-8';
  }
});
</script>

<style scoped></style>
