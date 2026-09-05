<template>
  <ThemeToggle />
  <component :is="view" />
</template>

<script setup>
import SignupView from './views/SignupView.vue';
import { computed } from 'vue';
import ThemeToggle from './demo/ThemeToggle.vue';
import { usePath } from './router/index.js';
import HomeView from './views/HomeView.vue';
import ComponentsView from './views/ComponentsView.vue';
import BasicView from './views/components/BasicView.vue';
import LayoutView from './views/components/LayoutView.vue';
import FormView from './views/components/FormView.vue';
import NavigationView from './views/components/NavigationView.vue';
import DataDisplayView from './views/components/DataDisplayView.vue';
import FeedbackView from './views/components/FeedbackView.vue';
import MiscellaneousView from './views/components/MiscellaneousView.vue';

const path = usePath();

const routes = {
  '/': HomeView,
  '/signup': SignupView,
  '/components': ComponentsView,
  '/components/basic': BasicView,
  '/components/layout': LayoutView,
  '/components/form': FormView,
  '/components/navigation': NavigationView,
  '/components/data-display': DataDisplayView,
  '/components/feedback': FeedbackView,
  '/components/miscellaneous': MiscellaneousView,
};

const view = computed(() => routes[path.value] ?? HomeView);
</script>
