<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div v-observe-visibility="isInView" class="flex items-start justify-between">
    <div
      class="footer-contacts grid grid-cols-2 grid-rows-2 items-start gap-x-3 gap-y-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-20 lg:gap-y-0"
    >
      <div v-for="contact in contacts" :key="contact.id" class="first:row-span-2">
        <h4 class="mb-2 text-xs text-ui-grek xs:text-sm">{{ contact.header }}</h4>
        <ul>
          <li
            v-for="content in contact.content"
            :key="content.id"
            class="footer-link mb-2 max-w-[73px] text-xs text-ui-white last:mb-0 xs:text-sm lg:max-w-fit"
          >
            <NuxtLink :to="content.link">{{ content.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-contacts self-start text-xs text-ui-grek xs:text-sm">©&thinsp;{{ year }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { Contacts } from 'types/Contacts';

const year = new Date().getFullYear();

defineProps<{
  contacts: Contacts;
}>();
</script>

<style scoped>
.is-visible .footer-contacts {
  animation:
    reveal-up 0.44s cubic-bezier(0.25, 0.1, 0.25, 1) 0.32s both,
    fade 0.12s ease-out 0.62s both;
}
</style>
