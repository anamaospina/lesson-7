<template>
  <main class="bio-page">
    <article class="bio-card" aria-labelledby="bio-title">
      <RouterLink class="back-link" to="/">← Back to links</RouterLink>

      <div class="bio-mark" aria-hidden="true">AO</div>
      <p class="eyebrow">A LITTLE ABOUT ME</p>
      <h1 id="bio-title">Hi, I’m Ana.</h1>
      <p class="bio-copy">
        I’ve spent most of my career working closely with technology and development teams, with
        experience creating digital products in healthcare, finance, and international
        organizations. I’m strong at using design to make complex systems more humane, efficient,
        and clear — especially in environments where the stakes are high and ambiguity is the norm.
      </p>

      <RouterLink class="home-button" to="/">Explore my links <span aria-hidden="true">↗</span></RouterLink>
    </article>
  </main>
</template>

<style scoped>
.bio-page {
  --page-bg: #101315;
  --card-bg: #1a2020;
  --card-border: rgba(232, 238, 224, 0.1);
  --text-main: #f0f3eb;
  --text-muted: #a7b1a4;
  --accent: #d4ef74;
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 2rem 1.25rem;
  color: var(--text-main);
  background: var(--page-bg);
}

.bio-card {
  width: min(100%, 480px);
  padding: 1.5rem;
  border: 1px solid var(--card-border);
  border-radius: 1.5rem;
  background: var(--card-bg);
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.22);
}

.back-link,
.home-button {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
}

.back-link {
  display: inline-block;
  margin-bottom: 3.5rem;
}

.bio-mark {
  display: grid;
  width: 4.5rem;
  height: 4.5rem;
  margin-bottom: 1.5rem;
  place-items: center;
  border: 1px solid rgba(212, 239, 116, 0.4);
  border-radius: 50%;
  color: #172016;
  background: var(--accent);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.eyebrow {
  margin-bottom: 0.65rem;
  color: var(--accent);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

h1 {
  margin-bottom: 1.25rem;
  color: var(--text-main);
  font-size: clamp(2.25rem, 10vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
}

.bio-copy {
  margin-top: 1rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.75;
}

.home-button {
  display: inline-flex;
  gap: 0.5rem;
  margin-top: 2rem;
  transition: gap 0.25s ease;
}

.home-button:hover {
  gap: 0.75rem;
}

@media (min-width: 600px) {
  .bio-card {
    padding: 2.5rem;
  }
}
</style>
