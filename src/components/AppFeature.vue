<template>
  <div :class="feature.classes.feature">
    <h1 v-if="feature.header" :class="feature.classes.header">{{ feature.header }}</h1>
    <div :class="feature.classes.caption">{{ feature.caption }}</div>
  </div>
</template>

<script setup lang="ts">
import { Feature } from 'types/Feature';

defineProps<{
  feature: Feature;
}>();
</script>

<style scoped></style>
