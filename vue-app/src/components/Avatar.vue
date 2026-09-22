<script setup lang="ts">
defineProps<{
  backgroundColor: string
}>()
</script>

<template>
  <v-avatar class="mb-6" :color="backgroundColor" size="100">
    <span class="avatar-initials text-h4 text-grey-darken-4" aria-label="A O">
      <span class="avatar-initial">A</span><span class="avatar-initial avatar-initial--second">O</span>
    </span>
  </v-avatar>
</template>

<style scoped>
.avatar-initials {
  display: inline-flex;
  font-weight: 800;
}

.avatar-initial {
  display: inline-block;
  animation: initials-bounce 2.4s ease-in-out infinite;
}

.avatar-initial--second {
  animation-delay: 0.18s;
}

@keyframes initials-bounce {
  0%,
  62%,
  100% {
    transform: translateY(0);
  }

  8%,
  18% {
    transform: translateY(-3px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .avatar-initial {
    animation: none;
  }
}
</style>
