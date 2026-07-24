import React from 'react';

/** React 마이그레이션 전 컴포넌트 플레이스홀더 */
export function ComingSoon({ name }) {
  return (
    <div className="empty empty_centered" style={{ maxWidth: '32rem', margin: '2rem auto' }}>
      <p className="empty_title">{name}</p>
      <p className="empty_desc">이 컴포넌트는 React로 마이그레이션 중입니다.</p>
    </div>
  );
}
