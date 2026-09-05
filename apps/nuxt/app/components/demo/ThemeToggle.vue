<template>
  <div class="demo_theme-bar" role="region" aria-label="테마 설정">
    <button
      type="button"
      class="guide_header-theme-btn"
      :aria-label="isDark ? '라이트 모드로 전환' : '다크 모드로 전환'"
      :aria-pressed="isDark"
      @click="toggle"
    >
      <svg class="icon guide_header-theme-icon-moon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z"></path>
      </svg>
      <svg class="icon guide_header-theme-icon-sun" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
const { isDark, toggle } = useTheme();
</script>
