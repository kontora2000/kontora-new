<template>
  <div class="flex flex-col items-center justify-center lg:flex-1 lg:justify-stretch">
    <div
      class="w-full shrink-0 rounded-[16px] bg-ui-blue px-6 py-4 text-left font-inter text-xl font-bold tracking-tight text-ui-white lg:p-6 lg:text-2xl"
    >
      {{ step.id }}
    </div>
    <div
      class="relative flex h-2 w-full bg-ui-blue before:block before:h-full before:w-[8%] before:rounded-r-full before:bg-ui-white after:absolute after:right-0 after:block after:h-full after:w-[8%] after:rounded-l-full after:bg-ui-white lg:ml-6 lg:w-[76px] lg:self-start lg:before:max-w-[26px] xl:w-[96px]"
    ></div>
    <div class="flex-1 rounded-[16px] bg-ui-blue p-6 text-left text-ui-white">
      <div class="mb-2 font-inter text-base font-bold tracking-tight">
        {{ step.header }}
      </div>
      <div class="rounded-[16px] text-sm">
        {{ step.description }}
      </div>
    </div>
    <div
      v-if="step.divider.bottom"
      class="relative ml-5 flex h-2 w-12 self-start bg-ui-blue before:block before:h-full before:w-[8%] before:rounded-r-full before:bg-ui-white after:absolute after:right-0 after:block after:h-full after:w-[8%] after:rounded-l-full after:bg-ui-white lg:ml-5 lg:hidden"
    ></div>
  </div>
  <div
    v-if="step.divider.right"
    :class="dividerRight"
    class="relative hidden h-[96px] w-2 self-start bg-ui-blue before:absolute before:top-0 before:h-[28px] before:w-2 before:rounded-b-full before:bg-ui-white after:absolute after:bottom-0 after:h-[28px] after:w-2 after:rounded-t-full after:bg-ui-white"
  ></div>
</template>

<script setup lang="ts">
import type { Step } from '@/types/Steps';

const props = defineProps<{ step: Step }>();

const dividerRight = computed(() => (props.step.divider.tabletHidden ? 'lg:hidden xl:flex' : 'lg:flex'));
</script>
