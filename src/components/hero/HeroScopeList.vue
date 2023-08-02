<template>
  <AppList with-footer with-header :list="list" :classes="listClasses">
    <template #header>
      <h1 class="mr-1 mt-1 shrink-0 text-sm text-ui-white">{{ header }}</h1>
    </template>
    <template #footer>
      <li class="text-xl tracking-tighter text-ui-white opacity-40 lg:max-w-[686px] lg:text-3xl">{{ footer }}</li>
    </template>
  </AppList>
</template>

<script setup lang="ts">
import type { List } from 'types/List';

const header = 'We make ——';
const footer = '+ We can provide expert review and help you acceptance of projects';

const list: List = [
  {
    id: 1,
    title: 'Apps'
  },
  {
    id: 2,
    title: 'Websites & WebApps'
  },
  {
    id: 3,
    title: 'Landing Pages'
  }
];

const listClasses = {
  variant: 'flex lg:mt-10 ',
  itemClass: 'text-ui-white text-xl tracking-tighter lg:text-3xl lg:whitespace-nowrap '
};
</script>

<style scoped></style>
