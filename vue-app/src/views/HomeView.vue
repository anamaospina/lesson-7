<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isLightMode = ref(false)

const links = [
  { label: 'Portfolio', detail: 'Selected work & experiments', href: 'https://anaospina.dev' },
  {
    label: 'LinkedIn',
    detail: "Let's connect professionally",
    href: 'https://www.linkedin.com/in/anaospina',
  },
  { label: 'Email', detail: 'hello@anaospina.com', href: 'mailto:hello@anaospina.com' },
]

function toggleTheme() {
  isLightMode.value = !isLightMode.value
}
</script>

<template>
  <main class="page-shell" :class="{ 'light-mode': isLightMode }">
    <section class="link-card" aria-labelledby="profile-name">
      <button
        class="theme-toggle"
        type="button"
        :aria-label="isLightMode ? 'Use dark mode' : 'Use light mode'"
        @click="toggleTheme"
      >
        <span aria-hidden="true">{{ isLightMode ? '☾' : '☀' }}</span>
        <span class="sr-only">{{ isLightMode ? 'Use dark mode' : 'Use light mode' }}</span>
      </button>

      <div class="profile-photo" aria-label="Profile photo placeholder">AO</div>
      <p class="eyebrow">WELCOME TO MY CORNER OF THE INTERNET</p>
      <h1 id="profile-name">Ana Ospina</h1>
      <p class="tagline">Designer, builder, and curious mind making useful things for the web.</p>

      <nav class="link-list" aria-label="Ana's links">
        <a
          v-for="link in links"
          :key="link.label"
          class="link-button"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <strong>{{ link.label }}</strong>
            <small>{{ link.detail }}</small>
          </span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      </nav>

      <RouterLink class="bio-link" to="/bio">Read my bio <span aria-hidden="true">→</span></RouterLink>

      <footer>
        <svg class="bike-icon" viewBox="0 0 64 32" role="img" aria-label="Bicycle">
          <circle cx="14" cy="22" r="8" />
          <circle cx="50" cy="22" r="8" />
          <path d="M14 22 25 8h10l15 14M25 8l5 14h12M30 8h-5M35 8l-3-4M25 8h-5" />
        </svg>
        <span>Made with intention · 2026</span>
      </footer>
    </section>
  </main>
</template>

<style scoped>
.page-shell {
  --page-bg: #101315;
  --card-bg: #1a2020;
  --card-border: rgba(232, 238, 224, 0.1);
  --text-main: #f0f3eb;
  --text-muted: #a7b1a4;
  --accent: #d4ef74;
  --button-bg: #222a28;
  --button-border: rgba(232, 238, 224, 0.1);
  position: relative;
  display: grid;
  min-height: 100vh;
  place-items: center;
  overflow: hidden;
  padding: 2rem 1.25rem;
  color: var(--text-main);
  background: var(--page-bg);
  transition: color 0.35s ease, background-color 0.35s ease;
}

.page-shell::before,
.page-shell::after {
  position: absolute;
  width: 15rem;
  height: 15rem;
  border: 1px solid rgba(212, 239, 116, 0.18);
  border-radius: 50%;
  content: '';
}

.page-shell::before {
  top: -8rem;
  right: -6rem;
}

.page-shell::after {
  bottom: -10rem;
  left: -7rem;
}

.link-card {
  position: relative;
  z-index: 1;
  width: min(100%, 480px);
  padding: 2.75rem 1.25rem 1.5rem;
  border: 1px solid var(--card-border);
  border-radius: 1.5rem;
  background: var(--card-bg);
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.22);
  text-align: center;
  transition: background-color 0.35s ease, border-color 0.35s ease;
}

.theme-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border: 1px solid var(--button-border);
  border-radius: 50%;
  color: var(--text-main);
  background: var(--button-bg);
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.25s ease, background-color 0.35s ease;
}

.theme-toggle:hover {
  transform: rotate(15deg) scale(1.08);
}

.profile-photo {
  display: grid;
  width: 6.25rem;
  height: 6.25rem;
  margin: 0 auto 1.5rem;
  place-items: center;
  border: 1px solid rgba(212, 239, 116, 0.4);
  border-radius: 50%;
  color: #172016;
  background: var(--accent);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.eyebrow {
  margin-bottom: 0.6rem;
  color: var(--accent);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

h1 {
  color: var(--text-main);
  font-size: clamp(2.25rem, 10vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
}

.tagline {
  max-width: 20rem;
  margin: 1rem auto 2rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.link-list {
  display: grid;
  gap: 0.75rem;
}

.link-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.1rem;
  border: 1px solid var(--button-border);
  border-radius: 0.85rem;
  color: var(--text-main);
  background: var(--button-bg);
  text-align: left;
  transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.link-button:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
  background: color-mix(in srgb, var(--button-bg) 80%, var(--accent));
}

.link-button strong,
.link-button small {
  display: block;
}

.link-button strong {
  font-size: 0.95rem;
}

.link-button small {
  margin-top: 0.2rem;
  color: var(--text-muted);
  font-size: 0.72rem;
}

.arrow {
  color: var(--accent);
  font-size: 1.25rem;
  transition: transform 0.25s ease;
}

.link-button:hover .arrow {
  transform: translate(3px, -3px);
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: var(--text-muted);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
}

.bio-link {
  display: inline-flex;
  gap: 0.45rem;
  margin-top: 1.25rem;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
  transition: gap 0.25s ease;
}

.bio-link:hover {
  gap: 0.7rem;
}

.bike-icon {
  width: 1.5rem;
  height: auto;
  fill: none;
  stroke: var(--accent);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.light-mode {
  --page-bg: #e7eadf;
  --card-bg: #f8f9f3;
  --card-border: rgba(23, 32, 22, 0.12);
  --text-main: #172016;
  --text-muted: #687266;
  --button-bg: #eef1e8;
  --button-border: rgba(23, 32, 22, 0.1);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 600px) {
  .link-card {
    padding: 3.5rem 2.5rem 1.75rem;
  }
}
</style>
