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
        link: 'https://instagram.com/kontoragram'
      },
      {
        id: '2',
        title: 'Twitter',
        link: ' https://twitter.com/kontora_dev'
      },
      {
        id: '3',
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/company/kontora-dev'
      },
      {
        id: '4',
        title: 'Telegram',
        link: 'https://t.me/kontoragram'
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
