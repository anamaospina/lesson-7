<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    class="link-button"
    :href="url"
    :prepend-icon="icon"
    append-icon="mdi-arrow-top-right"
    target="_blank"
    rel="noreferrer"
    variant="tonal"
    size="large"
    block
  >
    {{ label }}
  </v-btn>
</template>

<style scoped>
.link-button {
  min-height: 4.5rem;
  text-transform: none;
}
</style>
