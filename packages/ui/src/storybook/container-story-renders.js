import Container from '@/components/Container.vue';
import ContainerPlayground from '@/storybook/ContainerPlayground.vue';
import { storyArgsRef } from '@/storybook/story-renders.js';

export function renderContainerPlayground(label = 'container') {
  return (_args, context) => ({
    components: { ContainerPlayground },
    setup() {
      const args = storyArgsRef(context);
      return {
        args,
        label,
        onFluidUpdate(fluid) {
          context.updateArgs({ fluid });
        },
      };
    },
    template: `
      <ContainerPlayground
        v-bind="args"
        :label="label"
        @update:fluid="onFluidUpdate"
      />
    `,
  });
}

/** Fluid 예시 — size 없이 fluid 단독 적용 */
export function renderContainerFluid(_args, context) {
  return {
    components: { Container },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `
      <Container v-bind="args">
        <div class="container_demo-fill">
          container{{ args.fluid ? ' container_fluid' : '' }} — 전체 너비
        </div>
      </Container>
    `,
  };
}

/** 중첩 예시 — 바깥 fluid · 안쪽 size Controls 연동 */
export function renderContainerNested(_args, context) {
  return {
    components: { Container },
    setup() {
      return { args: storyArgsRef(context) };
    },
    template: `
      <Container :fluid="args.fluid">
        <div class="container_demo-fill" style="margin-bottom: var(--space-md);">
          바깥 — {{ args.fluid ? 'fluid' : '기본' }}
        </div>
        <Container :size="args.size || undefined">
          <div class="container_demo-fill">안쪽 — {{ args.size || '기본' }}</div>
        </Container>
      </Container>
    `,
  };
}

/** Docs 정적 데모 유지 · Canvas에서만 Controls 렌더 */
export function docsBasicRender() {
  return {
    components: { Container },
    template: `
      <Container>
        <div class="container_demo-fill">container — 기본 최대 너비</div>
      </Container>
    `,
  };
}

export function docsFluidRender() {
  return {
    components: { Container },
    template: `
      <Container fluid>
        <div class="container_demo-fill">container container_fluid — 전체 너비</div>
      </Container>
    `,
  };
}

export function docsSizeRender() {
  return {
    components: { Container },
    template: `
      <div class="container_demo-sizes">
        <Container size="sm">
          <div class="container_demo-fill">container_sm (36rem)</div>
        </Container>
        <Container size="md">
          <div class="container_demo-fill">container_md (48rem)</div>
        </Container>
        <Container size="lg">
          <div class="container_demo-fill">container_lg (64rem)</div>
        </Container>
        <Container size="xl">
          <div class="container_demo-fill">container_xl (80rem)</div>
        </Container>
      </div>
    `,
  };
}

export function docsNestedRender() {
  return {
    components: { Container },
    template: `
      <Container fluid>
        <div class="container_demo-fill" style="margin-bottom: var(--space-md);">바깥 — fluid</div>
        <Container size="md">
          <div class="container_demo-fill">안쪽 — md</div>
        </Container>
      </Container>
    `,
  };
}
