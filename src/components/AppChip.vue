<template>
  <div>
    <div :class="chip.classes.top">
      {{ chip.title.top }}
      <Icon v-if="iconTop" :name="iconTop" />
      <strong v-if="chip.accent.top">{{ chip.accent?.top }} </strong>
    </div>
    <div v-if="chip.double" :class="chip.classes.bottom">
      <Icon v-if="iconBottom" :name="iconBottom" />
      {{ chip.title.bottom }} <strong v-if="chip.accent.bottom">{{ chip.accent?.bottom }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Chip } from 'types/Chips';
defineProps<{
  chip: Chip;
  iconTop?: string | number | (string & {});
  iconBottom?: string | number | (string & {});
}>();
</script>

<style scoped>
strong {
  font-family: Inter, san-serif;
}
</style>
