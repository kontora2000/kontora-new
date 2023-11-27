<template>
  <AppSection v-observe-visibility="isInView" fullscreen class="mt-12 sm:px-7 lg:mt-[120px] lg:px-[80px]">
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div
      class="steps-card flex flex-col items-center justify-center rounded-[32px] bg-ui-white px-3 pb-3 pt-8 text-center opacity-0 lg:px-7 lg:pb-7 lg:pt-12"
    >
      <AppList :list="stepList" :classes="listClasses" />
      <div
        class="mt-12 flex flex-col items-center text-center text-sm sm:text-base md:text-mdx lg:max-w-[90%] lg:text-sm"
      >
        <div>
          The figures above depend on&nbsp;the speed of&nbsp;decision&#8209;making, the number of&nbsp;edits
          and&nbsp;the quality of&nbsp;communication. For our part, we&nbsp;will make every effort to&nbsp;launch
          the&nbsp;project as&nbsp;efficiently and&nbsp;quickly as&nbsp;possible, but it&nbsp;is always worth keeping
          in&nbsp;mind&nbsp;the&nbsp;<strong class="text-sx inline font-inter tracking-normal"
            >forecasted budget&nbsp;of&nbsp;&plusmn;&nbsp;20%</strong
          >.
        </div>
      </div>
      <div class="mt-12 lg:grid lg:grid-cols-steps lg:gap-y-2 xl:flex">
        <AppStep v-for="step in steps" :key="step.id" :step="step" />
      </div>
    </div>
  </AppSection>
</template>

<script setup lang="ts">
import type { Steps } from '../../types/Steps';
import { List } from 'types/List';
import { nbsp } from '@/constants/common';

const stepList: List = [
  {
    id: 1,
    title: 'We work —',
    accent: 'Sprints',
    isNew: false
  },

  {
    id: 2,
    title: 'Payment —',
    accent: 'By the hour',
    isNew: false
  },
  {
    id: 3,
    title: 'T&M —',
    accent: `50${nbsp}–${nbsp}100${nbsp}€${nbsp}/${nbsp}hour`,
    isNew: false
  }
];

const listClasses = {
  wrapper: '',
  list: 'flex flex-col items-center justify-center text-center md:grid md:grid-cols-2 md:grid-rows-2 md:justify-items-end md:gap-6 xl:flex xl:flex-row xl:gap-[60px]',
  item: 'steps-list mb-[24px] flex items-center text-center text-sm md:mb-0 lg:items-start last:mb-0 last:md:col-span-3 last:md:justify-self-center',
  title: 'lg:mt-1',
  accent: 'font-inter ml-1 text-lg tracking-tight xs:text-xl lg:text-2xl xl:text-xl base:text-2xl'
};

const steps: Steps = [
  {
    id: 1,
    header: 'Receiving your request',
    desc: `We study the brief, calculate the${nbsp}planned cost and${nbsp}timing, agree with you and sign the contract. We${nbsp}get the first part of the prepayment.`,
    divider: {
      bottom: true,
      right: true,
      tabletHidden: false
    }
  },
  {
    id: 2,
    header: `Preparing the structure &${nbsp}wireframes`,
    desc: `We build the skeleton of${nbsp}the future site/application, think through the logic and${nbsp}adjust the content. Each stage is${nbsp}recorded in${nbsp}the general Telegram chat.`,
    divider: {
      bottom: true,
      right: true,
      tabletHidden: true
    }
  },
  {
    id: 3,
    header: `Designing & communicating${nbsp}meanings through visuals`,
    desc: `We select riffs, determine the style and${nbsp}draw the design, discuss everything with you and make changes, but no${nbsp}more than 3 per block. If necessary, we${nbsp}describe animations and${nbsp}draw adaptations.`,
    divider: {
      bottom: true,
      right: true,
      tabletHidden: false
    }
  },
  {
    id: 4,
    header: `Layout and${nbsp}launch`,
    desc: `After all approvals we layout the site, set up forms, animations and${nbsp}font-interactives. We test it, fix bugs, and${nbsp}test it again. We bring it to a${nbsp}victorious end. In${nbsp}the end we pass everything to${nbsp}you with all the access and${nbsp}rights.`,
    divider: {
      bottom: false,
      right: false,
      tabletHidden: false
    }
  }
];
</script>

<style scoped>
.is-visible .steps-card {
  animation:
    reveal-up 0.44s cubic-bezier(0.25, 0.1, 0.25, 1) 0.42s both,
    fade 0.34s ease-out 0.52s both;
}
</style>
