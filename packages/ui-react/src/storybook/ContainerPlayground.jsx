import { useEffect, useRef } from 'react';
import Container from '@/components/Container.jsx';
import FluidHintSnack from '@/storybook/FluidHintSnack.jsx';
import { showFluidHint } from '@/storybook/fluid-hint-state.js';

export default function ContainerPlayground({
  fluid = false,
  size = '',
  label = 'container',
  onFluidUpdate,
}) {
  const hasSize = Boolean(size);
  const previousRef = useRef({ fluid, size });

  const containerProps = {
    fluid: hasSize && fluid,
    size: size || undefined,
  };

  function blockFluidWithHint() {
    showFluidHint();
    if (fluid) onFluidUpdate?.(false);
  }

  useEffect(() => {
    const previous = previousRef.current;
    const current = { fluid, size };

    if (current.fluid && !current.size) {
      blockFluidWithHint();
      previousRef.current = current;
      return;
    }

    if (!current.size && previous.size && previous.fluid) {
      blockFluidWithHint();
    }

    previousRef.current = current;
  }, [fluid, size]);

  return (
    <>
      <FluidHintSnack />
      <Container {...containerProps}>
        <div className="container_demo-fill">{label}</div>
      </Container>
    </>
  );
}
