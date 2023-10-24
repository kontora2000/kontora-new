<template>
  <AppList with-footer with-header :list="list" :classes="listClasses" class="max-w-[90%]">
    <template #header>
      <h1 class="animate__animated animate__fadeIn whitespace-nowrap text-sm text-ui-white">{{ header }}</h1>
    </template>
    <template #divider>
      <div class="animate__animated animate__fadeIn ml-1 flex-1 border-t border-t-ui-white"></div>
    </template>
    <template #footer>
      <li
        class="hero-list-footer animate__animated animate__fadeInUp text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:text-2xl xl:text-3xl"
      >
        + We can provide expert
      </li>
      <li
        class="hero-list-footer-2 animate__animated animate__fadeInUp text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:text-2xl xl:text-3xl"
      >
        review and help you
      </li>
      <li
        class="hero-list-footer-3 animate__animated animate__fadeInUp text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:text-2xl xl:text-3xl"
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
    'hero-list text-ui-white animate__animated animate__fadeInUp text-md xs:text-xl tracking-[-0.96px] lg:tracking-[-1.8px] lg:text-2xl xl:text-3xl xl:whitespace-nowrap selection:text-ui-black  selection:bg-ui-purple '
};
</script>

<style scoped></style>
