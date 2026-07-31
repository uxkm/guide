'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getDocByKey } from '@/utils/doc-loader';
import { initPageRoot } from '@/utils/init-page';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { initAffixAll } from '@/legacy/affix-init';
import { initBackTopAll } from '@/legacy/back-top-init';
import { initCarousel } from '@/legacy/carousel-init';
import { initOverlays } from '@/legacy/overlay-init';

export default function DocContent({ docKey }) {
  const router = useRouter();
  const contentRef = useRef(null);
  const doc = getDocByKey(docKey);

  useEffect(() => {
    let cancelled = false;

    async function initContent() {
      await Promise.resolve();
      if (cancelled) return;

      const root = contentRef.current;
      if (!root?.querySelectorAll) return;

      initPageRoot(root);

      if (root.querySelector('[data-affix]')) {
        initAffixAll(root);
      }

      if (root.querySelector('[data-back-top]')) {
        initBackTopAll(root);
      }

      if (root.querySelector('[data-swiper]')) {
        initCarousel(root, Swiper);
      }

      if (root.querySelector('[data-dropdown], [data-popover], [data-tooltip]')) {
        initOverlays(root);
      }
    }

    initContent();

    return () => {
      cancelled = true;
    };
  }, [docKey]);

  function onContentClick(event) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest('a[href^="/"]');
    const root = contentRef.current;
    if (!link || !root?.contains(link)) return;
    if (link.target && link.target !== '_self') return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('//')) return;

    event.preventDefault();
    router.push(href);
  }

  if (!doc) return null;

  const DocComponent = doc.component;

  return (
    <main ref={contentRef} className="guide_content" onClick={onContentClick}>
      <DocComponent />
    </main>
  );
}
