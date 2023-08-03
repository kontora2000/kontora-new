<template>
  <div :class="classes.variant">
    <slot v-if="withHeader" name="header"> </slot>
    <ul>
      <li v-for="item in list" :key="item.id" :class="classes.itemClass">
        <slot
          ><strong>{{ item.title }}</strong></slot
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
