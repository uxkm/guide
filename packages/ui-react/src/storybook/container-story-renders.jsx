import ContainerPlayground from '@/storybook/ContainerPlayground.jsx';

export function renderContainerPlayground(label = 'container') {
  return (_args, context) => (
    <ContainerPlayground
      {...context.args}
      label={label}
      onFluidUpdate={(nextFluid) => context.updateArgs({ fluid: nextFluid })}
    />
  );
}
