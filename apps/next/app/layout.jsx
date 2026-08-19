const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/+$/, '') || '';
const faviconPath = `${basePath}/images/meta/favicon`;

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
    <html lang="ko">
      <head><link rel="stylesheet" href="/styles/uxkm.css" /></head>
      <body>{children}</body>
    </html>
  );
}
