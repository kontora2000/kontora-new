<template>
  <footer class="mb-8 mt-[80px] selection:bg-ui-purple selection:text-ui-black">
    <AppContainer variant="footer">
      <FooterContacts :contacts="contacts" />
    </AppContainer>
  </footer>
</template>

<script setup lang="ts">
import { Contacts } from 'types/Contacts';

const mail = '@kontora.dev';

const contacts: Contacts = [
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
        link: 'https://www.twitter.com/'
      },
      {
        id: '3',
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/'
      },
      {
        id: '4',
        title: 'Telegram',
        link: 'https://www.telegram.com/'
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
];
</script>
