<template>
  <AppSection class="pb-20">
    <div class="lg:flex lg:pb-[180px]">
      <div class="mr-10 flex lg:order-2 lg:ml-[-120px] lg:mt-0 lg:self-start xl:ml-8">
        <div
          class="baselg:order-2 lf:left-[-10px] mb-9 ml-[100px] mt-8 flex max-w-[277px] flex-1 flex-col self-end xs:relative xs:left-[50px] xs:top-0 xs:ml-0 mb:left-0 mb:ml-auto lg:left-0 lg:mt-[50px] lg:max-w-none lg:shrink-0 xl:left-[-100px]"
        >
          <AppChip
            class="flex rotate-[8deg] flex-col items-center justify-center self-end"
            :chip="chipTop"
            :icon-bottom="iconBottom"
          >
            <template #title>
              Team of&nbsp;<span class="feature-caption font-bold tracking-[-0.34px] xs:text-[15px] lg:text-md"
                >developers</span
              >&nbsp;and designers.
            </template>
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
    top: '',
    bottom: 'Based in Tbilisi, Georgia'
  },
  classes: {
    top: 'px-1  bg-ui-purple flex xs:text-sm sm:text-base  items-center justify-center rounded-[11px] lg:text-base text-xxs text-ui-white min-w-[190px] xs:min-w-[205px] min-h-[38px] xs:min-w-[255px] xl:text-lg lg:px-[18px] lg:max-h-[60px] lg:min-h-[60px] lg:min-w-[430px] lg:text-lg lg:py-3 lg:px-[18px] lg:rounded-[18px]',
    bottom:
      'px-2 pb-2 before:content-[url(/radius.svg)] before:left-[-12px] before:top-[-6px]  after:content-[url(/radius.svg)] xs:text-sm lg:text-lg  after:right-[-16px] xs:after:right-[-10px]  after:rotate-[270deg] after:top-[-6px] before:absolute after:absolute  -mt-[1px]  bg-ui-purple flex lg:min-w-[370px] items-center justify-center rounded-b-[11px] text-xxs text-ui-white min-w-[150px] xs:min-w-[173px] min-h-[30px] xs:min-w-[213px] relative lg:text-base xl:text-lg lg:pl-[14px] lg:pr-[18px] lg:before:w-[19px] lg:before:h-[19px] lg:before:top-[-13px] lg:before:left-[-12px] lg:rounded-b-[18px] lg:min-h-[48px] lg:after:top-[-11px] lg:after:right-[-11px] lg:min-w-none'
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
    top: 'lg:px-6 lg:py-4 px-3 py-4 lg:text-lg sm:text-base whitespace-nowrap bg-ui-green text-ui-black rounded-[150px] text-xxs xs:text-sm  max-w-fit lg:text-md lg:mt-[3px]'
  },
  accent: {
    top: 'WORLDWIDE'
  }
};

const iconTop = 'streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network';

const iconBottom = 'streamline:travel-map-location-pin-navigation-map-maps-pin-gps-location';
</script>

<style scoped></style>
