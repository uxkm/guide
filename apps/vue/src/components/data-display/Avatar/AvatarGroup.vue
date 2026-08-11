<script setup>
defineOptions({ name: 'UxkmAvatarGroup' });

defineProps({ ariaLabel: String });
</script>

<template>
  <div class="avatar_group" :aria-label="ariaLabel" data-component="AvatarGroup"><slot /></div>
</template>
