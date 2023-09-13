<template>
  <div>
    <div :class="chip.classes.top">
      {{ chip.title.top }}
      <slot v-if="iconTop" name="iconTop" class="mr-1 h-8 max-h-[32px] w-8 max-w-[32px]" />
      <slot name="title"></slot>
      <strong v-if="chip.accent.top" class="lg:text-md">{{ chip.accent?.top }} </strong>
    </div>
    <div v-if="chip.double" :class="chip.classes.bottom">
      <slot v-if="iconBottom" name="iconBottom" class="mr-1 max-h-[32px] max-w-[32px]" />
      {{ chip.title.bottom }} <strong v-if="chip.accent.bottom" class="lg:text-md">{{ chip.accent?.bottom }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Chip } from 'types/Chips';
defineProps<{
  chip: Chip;
  iconTop?: boolean;
  iconBottom?: boolean;
}>();
</script>

<style scoped>
strong {
  font-family: Inter, san-serif;
}
</style>
