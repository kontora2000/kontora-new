<template>
  <svg
    v-if="name === 'location'"
    width="37"
    height="37"
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
  <svg
    v-else-if="name === 'worldwide'"
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
  <svg
    v-else-if="name === 'arrow'"
    width="49"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4549_335)">
      <path
        d="M0.5 25.0495H46.6538M46.6538 25.0495L24.0385 2.43408M46.6538 25.0495L24.0385 47.6649"
        stroke="white"
        stroke-width="3.69231"
      />
    </g>
    <defs>
      <clipPath id="clip0_4549_335">
        <rect width="48" height="48" fill="white" transform="translate(0.5 0.587891)" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<style lang="scss" scoped></style>
