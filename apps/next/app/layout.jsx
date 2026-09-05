import ThemeToggle from '../src/demo/ThemeToggle.jsx';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/+$/, '') || '';
const assetBase = (process.env.NEXT_PUBLIC_ASSET_BASE || process.env.NEXT_PUBLIC_SITE_URL || basePath).replace(/\/+$/, '');
const faviconPath = `${assetBase}/images/meta/favicon`;

const themeInitScript = `(function(){try{var t=localStorage.getItem('uxkm-demo-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;}catch(e){}})();`;

export const metadata = {
  title: 'UXKM Next',
  description: '프레임워크별 UI 컴포넌트와 디자인 시스템 가이드',
  applicationName: 'UXKM Framework Components',
  authors: [{ name: 'UXKM' }],
  icons: {
    icon: [
      { url: `${faviconPath}/favicon.ico`, sizes: '16x16 32x32' },
      { url: `${faviconPath}/favicon-32x32.png`, type: 'image/png', sizes: '32x32' },
      { url: `${faviconPath}/favicon-16x16.png`, type: 'image/png', sizes: '16x16' }
    ],
    apple: [{ url: `${faviconPath}/apple-touch-icon.png`, sizes: '180x180' }]
  },
  manifest: `${faviconPath}/site.webmanifest`
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4f6f9'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="stylesheet" href={`${assetBase}/styles/uxkm.css`} />
        <link rel="stylesheet" href={`${assetBase}/styles/demo.css`} />
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
