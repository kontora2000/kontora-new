<template>
  <div class="flex justify-between">
    <div
      class="grid grid-cols-2 grid-rows-2 items-end gap-x-12 gap-y-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-20 lg:gap-y-0"
    >
      <div v-for="contact in contacts" :key="contact.id" class="first:row-span-2">
        <h4 class="mb-2 text-xs text-ui-white opacity-40 xs:text-sm">{{ contact.header }}</h4>
        <ul>
          <li
            v-for="content in contact.content"
            :key="content.id"
            class="mb-2 max-w-[73px] text-xs text-ui-white last:mb-0 hover:text-ui-purple xs:text-sm lg:max-w-none"
          >
            <NuxtLink :to="content.link">{{ content.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="self-end text-xs text-ui-white opacity-40 xs:text-sm">©{{ year }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { Contacts } from 'types/Contacts';

const year = new Date().getFullYear();

defineProps<{
  contacts: Contacts;
}>();
</script>
