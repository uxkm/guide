import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDocByKey, useDocRevision } from '@/utils/doc-loader';
import { useDocKey } from '@/utils/route-doc';
import { navigateInternal } from '@/utils/navigate-internal';
import { initPageRoot } from '@/utils/init-page';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { initAffixAll } from '@/legacy/affix-init';
import { initBackTopAll } from '@/legacy/back-top-init';
import { initCarousel } from '@/legacy/carousel-init';
import { initOverlays } from '@/legacy/overlay-init';

export default function DocView() {
  const navigate = useNavigate();
  const location = useLocation();
  const docKey = useDocKey();
  const contentRef = useRef(null);
  const revision = useDocRevision();
  const [renderKey, setRenderKey] = useState(0);

  const doc = useMemo(() => {
    return getDocByKey(docKey);
  }, [docKey, revision, renderKey, location.pathname]);

  useEffect(() => {
    if (!import.meta.hot) return undefined;

    const onAfterUpdate = (payload) => {
      const shouldRefresh = payload.updates.some(({ path }) =>
        /\/src\/(doc\/(components|pages)|components)\//.test(path),
      );

      if (shouldRefresh) {
        setRenderKey((key) => key + 1);
      }
    };

    import.meta.hot.on('vite:afterUpdate', onAfterUpdate);
    return () => {
      import.meta.hot.off('vite:afterUpdate', onAfterUpdate);
    };
  }, []);

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
  }, [docKey, revision, renderKey, location.pathname]);

  useEffect(() => {
    if (doc?.meta?.title) {
      document.title = doc.meta.title;
    }
  }, [doc]);

  function onContentClick(event) {
    const link = event.target.closest('a[href^="/"]');
    const root = contentRef.current;
    if (!link || !root?.contains(link)) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('//')) return;

    event.preventDefault();
    navigateInternal(navigate, href);
  }

  if (!doc) {
    return (
      <main className="guide_content">
        <div className="page_intro">
          <h1>페이지를 찾을 수 없습니다</h1>
          <p className="lead">요청한 문서가 존재하지 않습니다.</p>
        </div>
      </main>
    );
  }

  const DocComponent = doc.component;

  return (
    <main ref={contentRef} className="guide_content" onClick={onContentClick}>
      <DocComponent key={`${docKey}-${renderKey}`} />
    </main>
  );
}
