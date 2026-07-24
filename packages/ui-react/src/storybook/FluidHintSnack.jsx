import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { hideFluidHint, subscribeFluidHint } from '@/storybook/fluid-hint-state.js';

export default function FluidHintSnack() {
  const [open, setOpen] = useState(false);

  useEffect(() => subscribeFluidHint(setOpen), []);

  if (!open) return null;

  return createPortal(
    <div className="sb-snackbar-hint" role="status" aria-live="polite">
      <div className="alert color_warning" role="alert">
        <div>
          <Icon name="alert-triangle" className="alert_icon" />
        </div>
        <div className="alert_body">
          <div className="alert_title">fluid는 size가 선택된 경우에만 적용됩니다</div>
          <p className="alert_desc">sm · md · lg · xl 중 하나를 선택한 뒤 fluid를 활성화하세요.</p>
        </div>
        <Button
          variant="ghost"
          iconOnly
          className="alert_close"
          ariaLabel="알림 닫기"
          onClick={hideFluidHint}
          iconBefore={<Icon name="close" size="sm" />}
        />
      </div>
    </div>,
    document.body,
  );
}
