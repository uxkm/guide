<script setup>
defineOptions({ name: 'UxkmBadgeWrap' });

defineProps({ ariaLabel: String });
</script>

<template>
  <span class="badge_wrap" :aria-label="ariaLabel" data-component="BadgeWrap"><slot /></span>
</template>
