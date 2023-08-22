<template>
  <AppList with-footer with-header :list="list" :classes="listClasses">
    <template #header>
      <h1 class="block shrink-0 text-sm text-ui-white xs:mt-1">{{ header }}</h1>
    </template>
    <template #divider>
      <div
        class="mx-1 mt-[10px] min-w-[1em] border-t border-t-ui-white xs:mt-[15px] lg:ml-2 lg:mr-3 lg:min-w-[2.5em]"
      ></div>
    </template>
    <template #footer>
      <li
        class="text-md font-bold tracking-[-1.8px] text-ui-white opacity-[24%] selection:bg-ui-purple selection:text-ui-black selection:opacity-100 xs:text-xl lg:max-w-[686px] lg:text-3xl"
      >
        {{ footer }}
      </li>
    </template>
  </AppList>
</template>

<script setup lang="ts">
import type { List } from 'types/List';
const nbsp = String.fromCharCode(0x00a0);

const header = 'We make';
const footer = '+ We can provide expert review and help you acceptance of projects';

const list: List = [
  {
    id: 1,
    title: 'Apps',
    isNew: false
  },
  {
    id: 2,
    title: `Websites &${nbsp}WebApps`,
    isNew: false
  },
  {
    id: 3,
    title: 'Landing Pages',
    isNew: false
  }
];

const listClasses = {
  variant: 'flex lg:mt-20 ',
  itemClass:
    'text-ui-white text-md xs:text-xl tracking-[-0.96px] lg:tracking-[-1.8px] lg:text-3xl xl:whitespace-nowrap selection:text-ui-black  selection:bg-ui-purple '
};
</script>

<style scoped></style>
