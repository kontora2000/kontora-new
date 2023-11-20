<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <AppSection class="pb-20">
    <div class="lg:flex lg:pb-[180px]">
      <div class="mr-10 flex lg:order-2 lg:ml-[-120px] lg:mr-0 lg:mt-0 lg:max-w-[50px] lg:self-start xl:ml-8">
        <div
          class="baselg:order-2 lf:left-[-10px] mb-9 ml-[100px] mt-8 flex max-w-[277px] flex-1 flex-col self-end xs:relative xs:left-[50px] xs:top-0 xs:ml-5 mb:left-0 mb:ml-auto lg:left-[-122px] lg:top-[-1px] lg:mt-[50px] lg:max-w-none lg:shrink-0 xl:left-[-207px] base:left-[-180px]"
        >
          <AppChip
            class="chip-animated-top animate__animated animate__fadeIn flex rotate-[8deg] flex-col items-center justify-center self-end"
            :chip="chipTop"
            icon-bottom
          >
            <template #title>
              Team of&nbsp;<span class="inter font-bold tracking-normal xs:text-[14px] sm:text-mdx lg:text-md"
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
          <AppChip
            icon-top
            class="chip-animated-bottom animate__animated animate__fadeIn relative rotate-[-2deg] self-center lg:self-end"
            :chip="chipBottom"
          >
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
    top: 'px-1  bg-ui-purple flex xs:text-xxs py-3 xs:px-[18px] inline-block sm:text-base  items-center justify-center rounded-[11px] lg:text-sm text-xxs text-ui-white min-w-[190px] xs:min-w-[205px] min-h-[38px] xs:min-w-[262px] sm:min-w-[344px] sm:text-sm xl:text-lg lg:px-[18px] lg:max-h-[60px] lg:min-h-[60px] lg:min-w-356px]  xl:min-w-[430px] lg:text-sm lg:py-3 lg:px-[18px] lg:rounded-[18px] xl:text-lg',
    bottom:
      'px-2 pb-2 before:content-[url(/radius.svg)] xs:text-xxs before:left-[-12px] before:top-[-3px]  after:content-[url(/radius.svg)] xs:text-xxs sm:text-sm sm:min-w-[269px] sm:before:top-[-5px] sm:after:top-[-6px] sm:after:right-[-12.2px]  lg:text-sm  after:right-[-15.2px] xs:after:right-[-15.2px]  after:rotate-[270deg] after:top-[-5.5px] before:absolute after:absolute  -mt-[1px]  bg-ui-purple flex lg:min-w-[270px] xl:min-w-[370px] items-center justify-center rounded-b-[11px] text-xxs text-ui-white min-w-[150px] xs:min-w-[173px] min-h-[30px] xs:min-w-[213px] relative lg:text-sm xl:text-lg lg:pl-[14px] lg:pr-[18px] lg:before:content-[url(/radius-big.svg)] lg:before:w-[19px] lg:before:h-[21px] lg:before:top-[-1.55px] lg:before:left-[-17.5px] lg:before:rotate-[-7deg] lg:after:rotate-[-7deg] lg:rounded-b-[18px] lg:min-h-[48px]  lg:after:content-[url(/radius-big-right.svg)]  lg:after:top-[-3.56px] lg:after:right-[-19.34px] lg:text-base  lg:min-w-none xl:tex-lg'
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
    top: 'lg:px-6 lg:py-4 px-3 py-2 xs:py-3 xs:px-4 lg:text-sm xl:text-lg sm:text-sm xs:text-xxs whitespace-nowrap bg-ui-green text-ui-black rounded-[150px] text-xxs xs:text-sm xs:px-4 xs:py-3  max-w-fit lg:text-sm xl:text-lg lg:mt-[3px]'
  },
  accent: {
    top: 'WORLDWIDE'
  }
};
</script>

<style scoped></style>
