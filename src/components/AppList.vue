<template>
  <div :class="classes.variant">
    <div class="flex max-h-[24px] shrink-0 items-center xs:mt-1 lg:mr-1 lg:min-w-[110px] lg:max-w-[118px]">
      <slot v-if="withHeader" name="header"></slot> <slot name="divider"> </slot>
    </div>
    <ul>
      <li v-for="item in list" :key="item.id" :class="classes.itemClass" class="flex items-center">
        <slot
          ><strong>{{ item.title }}</strong></slot
        >
        <slot v-if="item.isNew" name="new">
          <div
            class="ml-1 flex rotate-[-8deg] flex-col items-center justify-center rounded-[6px] bg-ui-green p-1 text-xs font-bold uppercase tracking-[-0.36px] text-ui-black lg:ml-3 lg:max-h-[40px] lg:min-w-[62px] lg:rounded-[12px] lg:p-2 lg:text-sm"
          >
            new
          </div></slot
        >
      </li>

      <slot v-if="withFooter" name="footer"></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { List } from 'types/List';

withDefaults(
  defineProps<{
    list: List;
    withHeader: boolean;
    withFooter: boolean;
    classes: {
      variant: string;
      itemClass: string;
    };
  }>(),
  {
    withFooter: false,
    withHeader: false
  }
);
</script>

<style scoped></style>
