import Button from '@uxkm/react/button';
import { initInteractions } from '@uxkm/interactions';
import { useEffect, useState } from 'react';

export default function SaveButton() {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    initInteractions();
  }, []);

  return (
    <>
      <Button variant="filled" onClick={() => setSaved(true)}>
        저장
      </Button>
      {saved && <p role="status">저장했습니다.</p>}
    </>
  );
}
