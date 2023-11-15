<template>
  <div
    class="section-animated mt-[50px] flex flex-wrap opacity-0 mb:justify-normal mb:gap-8 lg:mt-0 xl:justify-between"
  >
    <AppFeature v-for="feature in features" :key="feature.caption" :feature="feature" />
    <div class="mt-10 flex max-w-[90%] flex-wrap gap-1 sm:max-w-[400px] lg:mt-0 lg:max-h-[132px] lg:max-w-[291px]">
      <AppChip
        v-for="chip in stackChips"
        :key="chip.id"
        class="flex items-center justify-center rounded-[12px] border-2 border-ui-white border-opacity-[32%] px-[10px] py-2 tracking-[-0.34px] text-ui-white lg:max-h-[40px] lg:px-[10px] lg:py-2 lg:text-sm"
        :chip="chip"
      />
      <AppFeature class="mt-3 min-w-[250px] sm:min-w-[300px] lg:mt-4" :feature="stackFeature" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nbsp } from '../../constants/common';
import type { Features, Feature } from 'types/Feature';
import type { Chips } from 'types/Chips';

const features: Features = [
  {
    header: '8+',
    caption: `Years of${nbsp}experience`,
    classes: {
      header: 'text-ui-white text-4xl italic lg:text-4xl xl:text-5xl ',
      caption:
        'feature-caption text-ui-white  text-base xs:text-md max-w-[153px] mr-[31px] lg:text-2xl  lg:max-w-[305px] font-bold tracking-[-1.44px] mt-3'
    }
  },
  {
    header: '6',
    caption: 'Players \nin  team',
    classes: {
      header: 'text-ui-white text-4xl  italic lg:text-4xl xl:text-5xl',
      caption:
        'feature-caption whitespace-pre text-ui-white text-base xs:text-md   max-w-[165px] font-bold tracking-[-1.44px] mt-3 lg:text-2xl'
    }
  }
];

const stackFeature: Feature = {
  header: null,
  caption: 'Our stack',
  classes: {
    header: '',
    caption:
      'feature-caption  text-ui-white text-base xs:text-md lg:text-2xl max-w-[305px] font-bold tracking-[-1.44px]'
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
      top: `Astro.js`
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
    id: 4,
    double: false,
    title: {
      top: `React`
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
    id: 5,
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
    id: 6,
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
  },
  {
    id: 7,
    double: false,
    title: {
      top: `TypeScript`
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
    id: 8,
    double: false,
    title: {
      top: `PHP`
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
    id: 9,
    double: false,
    title: {
      top: `WebGL`
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
    id: 10,
    double: false,
    title: {
      top: `three.js`
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
    id: 11,
    double: false,
    title: {
      top: `3D`
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
