import '@/scss/main.scss';
import GuideLayout from '@/layouts/GuideLayout.jsx';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/+$/, '') || '';
const faviconPath = `${basePath}/_assets/images/favicon`;

export const metadata = {
  title: 'UXKM Guide',
  icons: {
    icon: [
      { url: `${faviconPath}/favicon/favicon.ico` },
      { url: `${faviconPath}/favicon-32x32.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${faviconPath}/apple-icon-180x180.png`, sizes: '180x180' }],
  },
  manifest: `${faviconPath}/manifest.json`,
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" data-theme="light" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <GuideLayout>{children}</GuideLayout>
      </body>
    </html>
  );
}
