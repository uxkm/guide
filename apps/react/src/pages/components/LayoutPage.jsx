import Container from '@uxkm/react/container';
import Divider from '@uxkm/react/divider';
import Flex, { FlexItem } from '@uxkm/react/flex';
import Grid, { GridCol } from '@uxkm/react/grid';
import Space from '@uxkm/react/space';
import { DemoSection } from '../../demo/DemoSection.jsx';
import { DemoLink } from '../../router/index.jsx';

export default function LayoutPage() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">
            <DemoLink to="/components" className="link color_accent">
              컴포넌트
            </DemoLink>
            {' · Layout'}
          </p>
          <h1>Layout</h1>
          <p className="lead">레이아웃 컴포넌트를 렌더합니다.</p>
        </header>

        <DemoSection id="container" title="Container" path="@uxkm/react/container">
          <Container size="sm">Container 데모</Container>
        </DemoSection>

        <DemoSection id="divider" title="Divider" path="@uxkm/react/divider">
          <Divider label="구분선" />
        </DemoSection>

        <DemoSection id="flex" title="Flex" path="@uxkm/react/flex">
          <Flex gap="sm">
            <FlexItem>Item A</FlexItem>
            <FlexItem>Item B</FlexItem>
            <FlexItem>Item C</FlexItem>
          </Flex>
        </DemoSection>

        <DemoSection id="grid" title="Grid" path="@uxkm/react/grid">
          <Grid cols={3} gap="sm">
            <GridCol>Col 1</GridCol>
            <GridCol>Col 2</GridCol>
            <GridCol>Col 3</GridCol>
          </Grid>
        </DemoSection>

        <DemoSection id="space" title="Space" path="@uxkm/react/space">
          <Space gap="sm">
            <span>하나</span>
            <span>둘</span>
            <span>셋</span>
          </Space>
        </DemoSection>

        <p>
          <DemoLink to="/components" className="link color_primary">
            ← 컴포넌트 목록
          </DemoLink>
        </p>
      </div>
    </main>
  );
}
