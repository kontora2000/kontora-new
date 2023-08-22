<template>
  <AppSection>
    <AppList class="pt-32" with-footer with-header :list="list" :classes="listClasses">
      <template #header>
        <h1 class="mt-1 shrink-0 text-sm text-ui-white">{{ header }}</h1>
      </template>
      <template #divider>
        <div class="ml-2 mr-0 mt-[14px] min-w-[0.8em] shrink-0 border-t border-t-ui-white"></div>
      </template>
      <template #footer>
        <li class="text-xl font-bold tracking-[-1.8px] text-ui-white opacity-40 lg:max-w-[686px] lg:text-3xl">
          {{ footer }}
        </li>
      </template>
    </AppList>
  </AppSection>
</template>

<script setup lang="ts">
import type { List } from 'types/List';

const header = 'Worked with';
const footer = 'and other lesser-known companies & startups';

const list: List = [
  {
    id: 1,
    title: 'Renaissance Insurance'
  },
  {
    id: 2,
    title: 'RBC.ru'
  },
  {
    id: 3,
    title: 'FinFort'
  },
  {
    id: 4,
    title: 'IP-Note.pro'
  },
  {
    id: 5,
    title: 'Zvonok.com'
  },
  {
    id: 6,
    title: 'OTEKO (the largest investor in the port infrastructure of Southern Russia)'
  },
  {
    id: 7,
    title: 'Delofon.ru'
  },
  {
    id: 8,
    title: 'AKBshka.ru (car battery delivery)'
  }
];

const listClasses = {
  variant: 'flex lg:mt-10 lg:ml-1',
  itemClass: 'text-ui-white text-xl tracking-tighter lg:text-3xl lg: lg:last:whitespace-nowrap '
};
</script>

<style scoped></style>
