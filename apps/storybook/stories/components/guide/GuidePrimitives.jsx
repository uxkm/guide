import React from 'react';

export function TypoCode({ children, tag: Tag = 'span' }) {
  return <Tag className="typo_code">{children}</Tag>;
}

export function GuideLink({ href, target, label }) {
  return (
    <a className="link color_primary" href={href} target={target}>
      {label}
    </a>
  );
}
