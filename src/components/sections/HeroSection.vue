<template>
  <AppSection class="pb-20">
    <div class="lg:flex lg:pb-[180px]">
      <div class="flex lg:order-2 lg:ml-8 lg:mt-0 lg:self-start">
        <div class="mb-9 ml-auto mt-3 flex max-w-[277px] shrink-0 flex-col self-end lg:order-2 lg:max-w-none">
          <AppChip
            class="flex rotate-[8deg] flex-col items-center justify-center self-end"
            :chip="chipTop"
            :icon-bottom="iconBottom"
          >
          </AppChip>
          <AppChip
            :icon-top="iconTop"
            class="relative rotate-[-2deg] self-center lg:self-end"
            :chip="chipBottom"
          ></AppChip>
        </div>
      </div>
      <HeroScopeList />
    </div>
    <HeroFeatures />
  </AppSection>
</template>

<script setup lang="ts">
import { Chip } from 'types/Chips';

const chipTop: Chip = {
  id: 1,
  double: true,
  title: {
    top: `Team of developers & designers.`,
    bottom: 'Based in Tbilisi, Georgia'
  },
  classes: {
    top: 'bg-ui-purple flex  items-center justify-center rounded-[11px] text-xs text-ui-white min-w-[205px] min-h-[38px] xs:min-w-[255px] lg:text-md lg:min-w-[404px] lg:min-h-[60px] lg:rounded-[18px]',
    bottom:
      'before:content-[url(/radius.svg)] before:left-[-12px] before:top-0  after:content-[url(/radius.svg)] after:right-[-16px]  after:rotate-[270deg] after:top-[-3px] before:absolute after:absolute  -mt-[1px]  bg-ui-purple flex  items-center justify-center rounded-b-[11px] text-xs text-ui-white min-w-[173px] min-h-[30px] xs:min-w-[213px] relative lg:text-md lg:min-w-[336px] lg:before:w-[19px] lg:before:h-[19px] lg:before:top-[-12px] lg:before:left-[-12px] lg:rounded-b-[18px] lg:min-h-[48px] lg:after:top-[-12px] lg:after:right-[-12px]'
  },
  accent: {
    top: null
  }
};

const chipBottom: Chip = {
  id: 2,
  double: false,
  title: {
    top: `Working`
  },
  classes: {
    top: 'lg:px-6 lg:py-4 px-3 py-4 whitespace-nowrap bg-ui-green text-ui-black rounded-[150px] text-xs  max-w-fit lg:text-md lg:mt-[3px]'
  },
  accent: {
    top: 'WORLDWIDE'
  }
};

const iconTop = 'streamline:travel-map-location-pin-navigation-map-maps-pin-gps-location';

const iconBottom = 'streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network';
</script>

<style scoped></style>
