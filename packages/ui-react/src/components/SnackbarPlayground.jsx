import { useEffect, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Snackbar from '@/components/Snackbar.jsx';
import SnackbarRegion, {
  SNACKBAR_PLACEMENTS,
} from '@/components/SnackbarRegion.jsx';

const PLACEMENT_LABELS = {
  'top-start': '상단 좌측',
  'top-center': '상단 가운데',
  'top-end': '상단 우측',
  'middle-start': '중간 좌측',
  'middle-end': '중간 우측',
  'bottom-start': '하단 좌측',
  'bottom-center': '하단 가운데',
  'bottom-end': '하단 우측',
};

const COLORS = ['info', 'success', 'warning', 'danger'];

export default function SnackbarPlayground({
  openOnLoad = false,
  openOnLoadPlacement = 'bottom-center',
  openOnLoadCount = 1,
  openOnLoadRound = false,
  openOnLoadMotion = 'slide',
}) {
  const nextIdRef = useRef(0);
  const didInitialOpenRef = useRef(false);
  const [items, setItems] = useState([]);

  function removeSnackbar(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function createSnackbar(placement, sequence = 0, round = false, motion = 'fade') {
    nextIdRef.current += 1;
    const id = nextIdRef.current;

    return {
      id,
      placement,
      color: COLORS[(id - 1) % COLORS.length],
      message: `${PLACEMENT_LABELS[placement]} 알림${sequence ? ` ${sequence}` : ''}`,
      round,
      motion,
    };
  }

  function showAt(placement, count = 1, round = false, motion = 'slide') {
    const additions = Array.from({ length: count }, (_, index) =>
      createSnackbar(placement, count > 1 ? index + 1 : 0, round, motion),
    );
    setItems((current) => [...current, ...additions]);
  }

  function showEverywhere(count = 1, round = false, motion = 'fade') {
    const additions = SNACKBAR_PLACEMENTS.flatMap((placement) =>
      Array.from({ length: count }, (_, index) =>
        createSnackbar(placement, count > 1 ? index + 1 : 0, round, motion),
      ),
    );
    setItems((current) => [...current, ...additions]);
  }

  useEffect(() => {
    if (!openOnLoad || didInitialOpenRef.current) return;

    didInitialOpenRef.current = true;
    const resolvedPlacement = SNACKBAR_PLACEMENTS.includes(openOnLoadPlacement)
      ? openOnLoadPlacement
      : 'bottom-center';
    const resolvedCount = Math.min(10, Math.max(1, Number(openOnLoadCount) || 1));
    showAt(
      resolvedPlacement,
      resolvedCount,
      openOnLoadRound,
      openOnLoadMotion,
    );
  }, [
    openOnLoad,
    openOnLoadCount,
    openOnLoadMotion,
    openOnLoadPlacement,
    openOnLoadRound,
  ]);

  return (
    <div className="snackbar_playground">
      <div className="snackbar_playground-controls" aria-label="Snackbar 위치 테스트">
        {SNACKBAR_PLACEMENTS.map((placement) => (
          <Button
            key={placement}
            variant="outline"
            size="sm"
            label={PLACEMENT_LABELS[placement]}
            onClick={() => showAt(placement)}
          />
        ))}
      </div>

      <div className="snackbar_playground-actions">
        <Button
          variant="filled"
          color="primary"
          label="모든 위치에 1개"
          onClick={() => showEverywhere()}
        />
        <Button
          variant="filled"
          color="success"
          label="각 위치에 3개씩"
          onClick={() => showEverywhere(3)}
        />
        <Button
          variant="outline"
          label="모든 위치에 라운드"
          onClick={() => showEverywhere(1, true)}
        />
        <Button
          variant="outline"
          label="모든 위치 Slide"
          onClick={() => showEverywhere(1, false, 'slide')}
        />
        <Button
          variant="ghost"
          label={`전체 닫기${items.length ? ` (${items.length})` : ''}`}
          disabled={!items.length}
          onClick={() => setItems([])}
        />
      </div>

      {SNACKBAR_PLACEMENTS.map((placement) => {
        const placementItems = items.filter((item) => item.placement === placement);
        if (!placementItems.length) return null;

        return (
          <SnackbarRegion
            key={placement}
            placement={placement}
            label={`${PLACEMENT_LABELS[placement]} Snackbar 영역`}
          >
            {placementItems.map((item) => (
              <Snackbar
                key={item.id}
                color={item.color}
                message={item.message}
                round={item.round}
                motion={item.motion}
                closable
                duration={8000}
                action={({ close }) => (
                  <Button
                    variant="ghost"
                    size="sm"
                    label="확인"
                    onClick={close}
                  />
                )}
                onClose={() => removeSnackbar(item.id)}
              />
            ))}
          </SnackbarRegion>
        );
      })}
    </div>
  );
}
