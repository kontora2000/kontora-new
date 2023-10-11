<template>
  <AppSection class="pb-20">
    <div class="lg:flex lg:pb-[180px]">
      <div class="mr-10 flex lg:order-2 lg:ml-[-120px] lg:mt-0 lg:self-start xl:ml-8">
        <div
          class="baselg:order-2 lf:left-[-10px] mb-9 ml-[100px] mt-8 flex max-w-[277px] flex-1 flex-col self-end xs:relative xs:left-[50px] xs:top-0 xs:ml-5 mb:left-0 mb:ml-auto lg:left-0 lg:mt-[50px] lg:max-w-none lg:shrink-0 xl:left-[-100px]"
        >
          <AppChip class="flex rotate-[8deg] flex-col items-center justify-center self-end" :chip="chipTop" icon-bottom>
            <template #title>
              Team of&nbsp;<span
                class="feature-caption font-bold tracking-[-0.34px] xs:text-[14px] sm:text-mdx lg:text-md"
                >developers</span
              >&nbsp;and designers.
            </template>
            <template #iconBottom>
              <AppIcon
                name="location"
                class="mb-1 inline max-h-[20px] max-w-[20px] lg:max-h-[32px] lg:max-w-[32px]"
              ></AppIcon>
            </template>
          </AppChip>
          <AppChip icon-top class="relative rotate-[-2deg] self-center lg:self-end" :chip="chipBottom">
            <template #iconTop>
              <AppIcon
                name="worldwide"
                class="mb-1 inline max-h-[20px] max-w-[20px] lg:max-h-[32px] lg:max-w-[32px]"
              ></AppIcon>
            </template>
          </AppChip>
        </div>
      </div>
      <HeroScopeList />
    </div>
    <HeroFeatures />
  </AppSection>
</template>

<script setup lang="ts">
import { nbsp } from '../../constants/common';
import { Chip } from 'types/Chips';

const chipTop: Chip = {
  id: 1,
  double: true,
  title: {
    top: '',
    bottom: `Based in${nbsp}Tbilisi, Georgia`
  },
  classes: {
    top: 'px-1  bg-ui-purple flex xs:text-smx py-3 xs:px-[18px] inline-block sm:text-base  items-center justify-center rounded-[11px] lg:text-base text-xxs text-ui-white min-w-[190px] xs:min-w-[205px] min-h-[38px] xs:min-w-[262px] sm:min-w-[344px] sm:text-base xl:text-lg lg:px-[18px] lg:max-h-[60px] lg:min-h-[60px] lg:min-w-[430px] lg:text-lg lg:py-3 lg:px-[18px] lg:rounded-[18px]',
    bottom:
      'px-2 pb-2 before:content-[url(/radius.svg)] xs:text-smx before:left-[-12px] before:top-[-3px]  after:content-[url(/radius.svg)] xs:text-sm sm:text-base sm:min-w-[269px] sm:before:top-[-5px] sm:after:top-[-6px] sm:after:right-[-12.2px]  lg:text-lg  after:right-[-15.2px] xs:after:right-[-15.2px]  after:rotate-[270deg] after:top-[-5.5px] before:absolute after:absolute  -mt-[1px]  bg-ui-purple flex lg:min-w-[370px] items-center justify-center rounded-b-[11px] text-xxs text-ui-white min-w-[150px] xs:min-w-[173px] min-h-[30px] xs:min-w-[213px] relative lg:text-base xl:text-lg lg:pl-[14px] lg:pr-[18px] lg:before:content-[url(/radius-big.svg)] lg:before:w-[19px] lg:before:h-[21px] lg:before:top-[-1.55px] lg:before:left-[-17.5px] lg:before:rotate-[-7deg] lg:after:rotate-[-7deg] lg:rounded-b-[18px] lg:min-h-[48px]  lg:after:content-[url(/radius-big-right.svg)]  lg:after:top-[-3.56px] lg:after:right-[-19.34px] lg:min-w-none'
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
    top: 'lg:px-6 lg:py-4 px-3 py-2 xs:py-3 xs:px-4 lg:text-lg sm:text-base xs:text-smx whitespace-nowrap bg-ui-green text-ui-black rounded-[150px] text-xxs xs:text-sm xs:px-4 xs:py-3  max-w-fit lg:text-lg lg:mt-[3px]'
  },
  accent: {
    top: 'WORLDWIDE'
  }
};
</script>

<style scoped></style>
