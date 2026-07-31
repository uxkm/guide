import { notFound } from 'next/navigation';
import DocContent from '@/next/DocContent.jsx';
import {
  getAllDocRouteParams,
  getDocKeyFromSegments,
  getDocMetaByKey,
  hasDocKey,
} from '@/data/doc-registry';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDocRouteParams();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const docKey = getDocKeyFromSegments(slug);

  if (!docKey || !hasDocKey(docKey)) {
    return { title: '페이지를 찾을 수 없습니다 | UXKM Guide' };
  }

  return getDocMetaByKey(docKey);
}

export default async function DocPage({ params }) {
  const { slug } = await params;
  const docKey = getDocKeyFromSegments(slug);

  if (!docKey || !hasDocKey(docKey)) {
    notFound();
  }

  return <DocContent key={docKey} docKey={docKey} />;
}
