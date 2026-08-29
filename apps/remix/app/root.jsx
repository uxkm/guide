import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { initInteractions } from '@uxkm/interactions';
import { useEffect } from 'react';

export const meta = () => [
  { title: 'UXKM Remix' },
  { name: 'description', content: '프레임워크별 UI 컴포넌트와 디자인 시스템 가이드' },
  { name: 'author', content: 'UXKM' },
  { name: 'theme-color', content: '#f4f6f9' }
];

export const links = () => [
  { rel: 'icon', href: '/images/meta/favicon/favicon.ico', sizes: '16x16 32x32' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/meta/favicon/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/meta/favicon/favicon-16x16.png' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/meta/favicon/apple-touch-icon.png' },
  { rel: 'manifest', href: '/images/meta/favicon/site.webmanifest' },
  { rel: 'stylesheet', href: '/styles/uxkm.css' }
];

export default function App() {
  useEffect(() => {
    initInteractions();
  }, []);

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
