<script setup lang="ts">
import { useTheme } from 'vuetify'
import { RouterLink } from 'vue-router'
import LinkButton from '../components/LinkButton.vue'

const theme = useTheme()

const links = [
  { label: 'Portfolio', icon: 'mdi-briefcase-outline', url: 'https://anaospina.dev' },
  {
    label: 'LinkedIn',
    icon: 'mdi-linkedin',
    url: 'https://www.linkedin.com/in/anaospina',
  },
  { label: 'Email', icon: 'mdi-email-outline', url: 'mailto:hello@anaospina.com' },
]

function toggleTheme() {
  theme.change(theme.global.current.value.dark ? 'light' : 'dark')
}
</script>

<template>
  <v-container class="link-page fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="5">
        <v-card class="link-card pa-6 pa-sm-10" rounded="xl" elevation="12">
          <v-btn
            class="theme-toggle"
            :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            :aria-label="theme.global.current.value.dark ? 'Use light mode' : 'Use dark mode'"
            variant="tonal"
            @click="toggleTheme"
          />

          <div class="text-center">
            <v-avatar class="mb-6" color="lime-accent-2" size="100">
              <span class="text-h4 font-weight-bold text-grey-darken-4">AO</span>
            </v-avatar>
            <p class="text-overline text-primary mb-2">WELCOME TO MY CORNER OF THE INTERNET</p>
            <h1 class="text-h2 text-sm-h1 font-weight-bold mb-4">Ana Ospina</h1>
            <p class="text-body-1 text-medium-emphasis mx-auto mb-8 tagline">
              Designer, builder, and curious mind making useful things for the web.
            </p>
          </div>

          <v-list class="link-list bg-transparent pa-0" aria-label="Ana's links">
            <v-list-item v-for="link in links" :key="link.label" class="pa-0 mb-3">
              <LinkButton :label="link.label" :url="link.url" :icon="link.icon" />
            </v-list-item>
          </v-list>

          <div class="text-center">
            <RouterLink class="bio-link text-primary" to="/bio">Read my bio <v-icon size="small">mdi-arrow-right</v-icon></RouterLink>
            <div class="text-caption text-medium-emphasis mt-8">
              <v-icon color="primary" size="small">mdi-bike</v-icon>
              <span class="ml-2">Made with intention · 2026</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.link-page {
  min-height: 100%;
  background: radial-gradient(circle at top right, rgba(212, 239, 116, 0.1), transparent 30rem);
}

.link-card {
  position: relative;
}

.theme-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.tagline {
  max-width: 20rem;
}

.bio-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.bio-link:hover {
  opacity: 0.75;
}
</style>
