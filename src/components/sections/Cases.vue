<template>
  <AppSection class="lg:pt-32">
    <AppList v-observe-visibility="isInView" :list="list" :classes="listClasses" class="max-w-[90%] lg:overflow-hidden">
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
          class="cases-list-item list-footer-item cases-list-footer-item relative z-10 font-inter text-md font-bold tracking-tightest text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:max-w-[686px] lg:text-3xl"
        >
          {{ footer.firstLine }}
        </li>
        <li
          class="cases-list-item list-footer-item cases-list-footer-item relative z-10 font-inter text-md font-bold tracking-tightest text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:max-w-[686px] lg:text-3xl"
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
    accent: 'Renaissance Insurance',
    title: null,
    isNew: false
  },
  {
    id: 2,
    accent: 'RBC.ru',
    title: null,
    isNew: false
  },
  {
    id: 3,
    accent: 'FinFort',
    title: null,
    isNew: true
  },
  {
    id: 4,
    accent: `IP${nbhyph}Note.pro`,
    title: null,
    isNew: true
  },
  {
    id: 5,
    accent: 'Zvonok.com',
    title: null,
    isNew: false
  },
  {
    id: 6,
    accent: 'OTEKO',
    title: null,
    isNew: false
  },
  {
    id: 7,
    accent: 'Delofon.ru',
    title: null,
    isNew: false
  },
  {
    id: 8,
    accent: 'AKBshka.ru',
    title: null,
    isNew: false
  }
];

const listClasses = {
  wrapper: 'flex lg:mt-10 ',
  title: '',
  accent: '',
  list: '',
  item: 'cases-list-item font-inter lg:overflow-hidden relative text-ui-white text-md  xs:text-xl tracking-tight lg:tracking-tightest selection:text-ui-black selection:bg-ui-purple lg:text-2xl xl:text-3xl  lg:last:whitespace-nowrap '
};
</script>
<style>
.is-visible .chip-animated-new {
  animation: fade 0.44s cubic-bezier(0.25, 0.1, 0.25, 1) 0.4s both;
}

.is-visible .cases-list-header {
  animation: fade 0.12s ease-out 0.3s both;
}

.is-visible .cases-list-item {
  animation: reveal-up 0.32s cubic-bezier(0.25, 0.1, 0.25, 1) 0.42s both;
}

.is-visible .cases-list-item:before {
  animation: reveal-up-reverse 0.32s ease 0.42s both;
}

.is-visible .cases-list-footer-item {
  animation-delay: 0.62s !important;
}

.is-visible .cases-list-footer-item:before {
  animation-delay: 0.62s !important;
}

.is-visible .cases-list-footer-item:nth-child(10) {
  animation-delay: 0.66s !important;
}

.is-visible .cases-list-footer-item:nth-child(10):before {
  animation-delay: 0.66s !important;
}
</style>
