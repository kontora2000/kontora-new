<template>
  <div :class="classes.variant">
    <div
      class="mr-1 flex max-h-[24px] min-w-[118px] max-w-[118px] shrink-0 items-center xs:mt-1 lg:mr-1 lg:min-w-[110px] lg:max-w-[118px]"
    >
      <slot name="header"></slot> <slot name="divider"> </slot>
    </div>
    <ul>
      <li v-for="item in list" :key="item.id" :class="classes.itemClass" class="flex items-center">
        <slot
          ><strong>{{ item.title }}</strong></slot
        >
        <slot v-if="item.isNew" name="new">
          <div
            class="chip-animated-new ml-2 flex rotate-[-8deg] flex-col items-center justify-center rounded-[6px] bg-ui-green p-1 text-xs font-bold uppercase tracking-normal text-ui-black lg:ml-3 lg:max-h-[40px] lg:min-w-[62px] lg:rounded-[12px] lg:p-2 lg:text-sm"
          >
            new
          </div></slot
        >
      </li>

      <slot name="footer"></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { List } from 'types/List';

defineProps<{
  list: List;
  classes: {
    variant: string;
    itemClass: string;
  };
}>();
</script>

<style scoped></style>
