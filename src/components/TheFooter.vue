<template>
  <footer>
    <AppContainer>
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
                class="mb-2 max-w-[73px] text-xs text-ui-white last:mb-0 xs:text-sm"
              >
                <NuxtLink :to="content.link">{{ content.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="self-end text-xs text-ui-white opacity-40 xs:text-sm">©{{ year }}</div>
      </div>
    </AppContainer>
  </footer>
</template>

<script setup lang="ts">
import { ContactBlock } from 'types/Contacts';

const mail = '@kontora.dev';
const year = new Date().getFullYear();

const contacts = [
  {
    id: 1,
    header: 'Follow us',
    content: [
      {
        id: '1',
        title: 'Instagram',
        link: 'https://www.instagram.com/'
      },
      {
        id: '2',
        title: 'Twitter',
        link: 'twitter.com'
      },
      {
        id: '3',
        title: 'LinkedIn',
        link: 'LinkedIn.com'
      },
      {
        id: '4',
        title: 'Telegram',
        link: 'Telegram.com'
      }
    ]
  },
  {
    id: 2,
    header: 'Inquiries',
    content: [
      {
        id: '1',
        title: `hi${mail}`,
        link: `hi${mail}`
      }
    ]
  },
  {
    id: 3,
    header: 'Career',
    content: [
      {
        id: '1',
        title: `job${mail}`,
        link: `job${mail}`
      }
    ]
  }
] as ContactBlock;
</script>
