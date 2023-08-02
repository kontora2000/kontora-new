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
    return 'pl-1 lg:pl-8 lg:pr-8';
  } else if (props.variant === 'section') {
    return 'px-3 lg:pl-[320px] lg:pr-8';
  } else if (props.variant === 'footer') {
    return 'px-3 lg:pl-8 lg:pr-8';
  }
});
</script>

<style scoped></style>
