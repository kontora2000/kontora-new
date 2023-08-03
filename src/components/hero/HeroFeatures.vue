<template>
  <div class="flex flex-wrap justify-between">
    <AppFeature
      v-for="feature in features"
      :key="feature.caption"
      class="first:relative first:before:absolute first:before:content-[url('featurebordermobile.svg')] lg:first:before:left-[60px] lg:first:before:top-[48px] lg:first:before:scale-[2]"
      :feature="feature"
    />
    <div class="flex flex-wrap gap-2 lg:max-h-[132px] lg:max-w-[291px]">
      <AppChip
        v-for="chip in stackChips"
        :key="chip.id"
        class="flex items-center justify-center rounded-[18px] border-2 border-ui-white border-opacity-[32%] tracking-[-0.48px] text-ui-white lg:max-h-[60px] lg:px-6 lg:py-3 lg:text-md"
        :chip="chip"
      />
      <AppFeature class="lg:mt-3" :feature="stackFeature" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Features, Feature } from 'types/Feature';
import type { Chips } from 'types/Chips';

const nbsp = String.fromCharCode(0x00a0);

const features: Features = [
  {
    header: '8+',
    caption: `Years of${nbsp}experience`,
    classes: {
      header: 'text-ui-white text-4xl italic lg:text-5xl',
      caption:
        'feature-caption text-ui-white text-md max-w-[153px]  lg:text-2xl lg:max-w-[305px] font-bold tracking-[-1.44px] mt-3'
    }
  },
  {
    header: '6',
    caption: 'Players in team',
    classes: {
      header: 'text-ui-white text-4xl italic lg:text-5xl',
      caption: 'feature-caption text-ui-white text-md  max-w-[165px] font-bold tracking-[-1.44px] mt-3 lg:text-2xl'
    }
  }
];

const stackFeature: Feature = {
  header: null,
  caption: 'Our stack',
  classes: {
    header: '',
    caption: 'feature-caption text-ui-white text-2xl max-w-[305px] font-bold tracking-[-1.44px]'
  }
};

const stackChips: Chips = [
  {
    id: 1,
    double: false,
    title: {
      top: `Vue`
    },
    classes: {
      top: 'feature-chip'
    },
    accent: {
      top: null,
      bottom: null
    }
  },
  {
    id: 2,
    double: false,
    title: {
      top: `Nuxt`
    },
    classes: {
      top: 'feature-chip'
    },
    accent: {
      top: null,
      bottom: null
    }
  },
  {
    id: 3,
    double: false,
    title: {
      top: `Svelte`
    },
    classes: {
      top: 'feature-chip'
    },
    accent: {
      top: null,
      bottom: null
    }
  },
  {
    id: 3,
    double: false,
    title: {
      top: `nodeJS`
    },
    classes: {
      top: 'feature-chip'
    },
    accent: {
      top: null,
      bottom: null
    }
  }
];
</script>

<style scoped></style>
