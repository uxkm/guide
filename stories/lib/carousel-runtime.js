/**
 * Carousel — Swiper + src/js/carousel.js 를 Storybook에서 재현
 */
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../../src/js/carousel.js';

window.Swiper = Swiper;

/**
 * @param {ParentNode} [root=document]
 */
export function initCarousels(root = document) {
  if (typeof window.initGuideCarousels === 'function') {
    window.initGuideCarousels(root);
  }
}
