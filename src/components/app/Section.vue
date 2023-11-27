<template>
  <section>
    <AppContainer :variant="sectionVariant" class="selection:bg-ui-purple selection:text-ui-black"
      ><slot
    /></AppContainer>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ fullscreen: boolean }>(), {
  fullscreen: false
});

const sectionVariant = computed(() => (props.fullscreen ? 'fullscreen' : 'section'));
</script>
