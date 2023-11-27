<template>
  <AppSection v-observe-visibility="isInView" fullscreen class="mb-[160px]">
    <div class="lets-go flex flex-col items-center justify-center pt-20 text-center">
      <h1
        class="font-inter text-xl font-bold text-ui-white sm:max-w-[63%] lg:text-2xl lg:tracking-tighter xl:max-w-[83%] xl:text-3xl"
      >
        We&nbsp;are ready to&nbsp;integrate into the&nbsp;design or<span>dev process at&nbsp;any stage</span>
      </h1>
      <button
        aria-label="LetsGo"
        class="button-arrow relative mt-12 flex min-w-[249px] items-center overflow-hidden rounded-full bg-ui-purple py-5 pl-9 pr-6 text-xl text-ui-white before:absolute before:h-[174px] before:w-[177px] before:translate-x-[10px] md:before:translate-x-[20px] lg:min-w-[325px] lg:py-7 lg:pl-12 lg:pr-7 lg:text-2xl lg:tracking-tight lg:before:translate-x-[30px]"
      >
        <strong class="z-10 mr-7 font-inter font-normal">Let’s go</strong
        ><AppIcon class="z-10 h-12 w-12" name="arrow" />
      </button>
    </div>
  </AppSection>
</template>

<script setup lang="ts"></script>

<style scoped>
.is-visible .lets-go {
  animation:
    reveal-up 0.34s cubic-bezier(0.25, 0.1, 0.25, 1) 0.32s both,
    fade 0.44s ease-out 0.52s both;
}

.button-arrow::before {
  content: '';
  background: url('/blue-arrow.svg') no-repeat center;
}

@media screen and (max-width: 768px) {
  .conversation-tabs-btn {
    font-size: 16px;
  }
}
</style>
