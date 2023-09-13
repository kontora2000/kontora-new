<template>
  <AppSection class="pb-20">
    <div class="lg:flex lg:pb-[180px]">
      <div class="mr-10 flex lg:order-2 lg:ml-[-120px] lg:mt-0 lg:self-start xl:ml-8">
        <div
          class="baselg:order-2 lf:left-[-10px] mb-9 ml-[100px] mt-8 flex max-w-[277px] flex-1 flex-col self-end xs:relative xs:left-[50px] xs:top-0 xs:ml-0 mb:left-0 mb:ml-auto lg:left-0 lg:mt-[50px] lg:max-w-none lg:shrink-0 xl:left-[-100px]"
        >
          <AppChip class="flex rotate-[8deg] flex-col items-center justify-center self-end" :chip="chipTop" icon-bottom>
            <template #title>
              Team of&nbsp;<span class="feature-caption font-bold tracking-[-0.34px] xs:text-[15px] lg:text-md"
                >developers</span
              >&nbsp;and designers.
            </template>
            <template #iconBottom>
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1197 19.4336V19.4336C15.9318 19.1261 14.4078 17.1036 14.7153 14.9158V14.9158C15.0228 12.728 17.0452 11.204 19.233 11.5114V11.5114C21.4209 11.8189 22.9449 13.8414 22.6374 16.0292V16.0292C22.3299 18.217 20.3075 19.7411 18.1197 19.4336Z"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.6353 29.9964C16.6353 29.9964 8.45975 21.1054 9.43396 14.1735C10.1514 9.06902 14.8709 5.51257 19.9754 6.22996C25.0799 6.94735 28.6364 11.6669 27.919 16.7714C26.9448 23.7033 16.6353 29.9964 16.6353 29.9964Z"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </AppChip>
          <AppChip icon-top class="relative rotate-[-2deg] self-center lg:self-end" :chip="chipBottom">
            <template #iconTop>
              <svg
                class="inline"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6777 4.60693C23.3164 4.37511 28.8574 9.54221 29.0892 16.1808C29.321 22.8194 24.1539 28.3605 17.5153 28.5923"
                  stroke="#151515"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5153 28.5923C10.8767 28.8241 5.33568 23.657 5.10385 17.0184C4.87203 10.3798 10.0391 4.83876 16.6777 4.60693"
                  stroke="#151515"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2857 6.10466C10.6592 12.6686 10.9492 20.9715 15.0247 27.2664C16.2177 29.1099 18.8468 29.0181 19.9084 27.0959C23.5348 20.532 23.2449 12.2291 19.1694 5.93412C17.975 4.09068 15.3473 4.18244 14.2857 6.10466Z"
                  stroke="#151515"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25684 11.4521C12.8458 13.2379 21.1021 12.9496 27.5492 10.7086"
                  stroke="#151515"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.9364 21.7471C21.3474 19.9613 13.0911 20.2496 6.64404 22.4907"
                  stroke="#151515"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
      'px-2 pb-2 before:content-[url(/radius.svg)] before:left-[-12px] before:top-[-6px]  after:content-[url(/radius.svg)] xs:text-sm lg:text-lg  after:right-[-16px] xs:after:right-[-10px]  after:rotate-[270deg] after:top-[-6px] before:absolute after:absolute  -mt-[1px]  bg-ui-purple flex lg:min-w-[370px] items-center justify-center rounded-b-[11px] text-xxs text-ui-white min-w-[150px] xs:min-w-[173px] min-h-[30px] xs:min-w-[213px] relative lg:text-base xl:text-lg lg:pl-[14px] lg:pr-[18px] lg:before:w-[19px] lg:before:h-[19px] lg:before:top-[-9px] lg:before:left-[-12px] lg:rounded-b-[18px] lg:min-h-[48px] lg:after:top-[-7px] lg:after:right-[-11px] lg:min-w-none'
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
    top: 'lg:px-6 lg:py-4 px-3 py-4 lg:text-lg sm:text-base whitespace-nowrap bg-ui-green text-ui-black rounded-[150px] text-xxs xs:text-sm  max-w-fit lg:text-lg lg:mt-[3px]'
  },
  accent: {
    top: 'WORLDWIDE'
  }
};
</script>

<style scoped></style>
