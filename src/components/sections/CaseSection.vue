<template>
  <AppSection class="lg:pt-32">
    <AppList v-observe-visibility="isInView" :list="list" :classes="listClasses" class="max-w-[90%] overflow-hidden">
      <template #header>
        <h1 class="cases-list-header whitespace-nowrap text-sm text-ui-white">
          {{ header }}
        </h1>
      </template>
      <template #divider>
        <div class="cases-list-header ml-1 flex-1 border-t border-t-ui-white"></div>
      </template>
      <template #footer>
        <li
          class="cases-list-item list-footer-item cases-list-footer-item relative z-10 text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:max-w-[686px] lg:text-3xl"
        >
          {{ footer.firstLine }}
        </li>
        <li
          class="cases-list-item list-footer-item cases-list-footer-item relative z-10 text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:max-w-[686px] lg:text-3xl"
        >
          {{ footer.secondLine }}
        </li>
      </template>
    </AppList>
  </AppSection>
</template>

<script setup lang="ts">
import { nbhyph } from '@/constants/common';
import type { List } from 'types/List';

const header = 'Worked with';
const footer = {
  firstLine: 'and other lesser-known',
  secondLine: 'companies & startups'
};

const list: List = [
  {
    id: 1,
    title: 'Renaissance Insurance',
    isNew: false
  },
  {
    id: 2,
    title: 'RBC.ru',
    isNew: false
  },
  {
    id: 3,
    title: 'FinFort',
    isNew: true
  },
  {
    id: 4,
    title: `IP${nbhyph}Note.pro`,
    isNew: true
  },
  {
    id: 5,
    title: 'Zvonok.com',
    isNew: false
  },
  {
    id: 6,
    title: 'OTEKO',
    isNew: false
  },
  {
    id: 7,
    title: 'Delofon.ru',
    isNew: false
  },
  {
    id: 8,
    title: 'AKBshka.ru',
    isNew: false
  }
];

const listClasses = {
  variant: 'flex lg:mt-10 ',
  itemClass:
    'cases-list-item overflow-hidden relative text-ui-white text-md  xs:text-xl tracking-[-0.96px] lg:tracking-[-1.8px] selection:text-ui-black selection:bg-ui-purple lg:text-2xl xl:text-3xl  lg:last:whitespace-nowrap '
};
</script>
