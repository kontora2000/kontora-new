<template>
  <AppList :list="list" :classes="listClasses" class="max-w-[90%] overflow-hidden">
    <template #header>
      <h1 class="animate__animated animate__fadeIn list-header whitespace-nowrap text-sm text-ui-white">
        {{ header }}
      </h1>
    </template>
    <template #divider>
      <div class="animate__animated animate__fadeIn list-header ml-1 flex-1 border-t border-t-ui-white"></div>
    </template>
    <template #footer>
      <li
        class="list-footer-item list-item-animated font-inter text-md font-bold tracking-tightest text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:text-2xl xl:text-3xl"
      >
        + We can provide expert
      </li>
      <li
        class="list-footer-item list-item-animated font-inter text-md font-bold tracking-tightest text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:pb-1 lg:text-2xl xl:text-3xl"
      >
        review and help you
      </li>
      <li
        class="list-footer-item list-item-animated font-inter text-md font-bold tracking-tightest text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:pb-1 lg:text-2xl xl:text-3xl"
      >
        acceptance of projects
      </li>
    </template>
  </AppList>
</template>

<script setup lang="ts">
import type { List } from 'types/List';
const nbsp = String.fromCharCode(0x00a0);

const header = 'We make';

const list: List = [
  {
    id: 1,
    title: null,
    accent: 'Apps',
    isNew: false
  },
  {
    id: 2,
    accent: `Websites &${nbsp}WebApps`,
    title: null,
    isNew: false
  },
  {
    id: 3,
    accent: 'Landing Pages',
    title: null,
    isNew: false
  }
];

const listClasses = {
  wrapper: 'flex lg:mt-20 ',
  title: '',
  accent: '',
  list: '',
  item: 'hero-list font-inter [&:nth-child(3)]:pb-1 lg:[&:nth-child(3)]:pb-[6px] list-item-animated  text-ui-white overflow-hidden text-md xs:text-xl tracking-tight lg:tracking-tightest lg:text-2xl xl:text-3xl xl:whitespace-nowrap selection:text-ui-black  selection:bg-ui-purple '
};
</script>

<style scoped></style>
