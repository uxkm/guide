import Link from 'next/link';

export default function NextLinkButton({ children = 'Next Link Button', ...props }) {
  return <Link className="uxkm-framework-link" {...props}>{children}</Link>;
}
