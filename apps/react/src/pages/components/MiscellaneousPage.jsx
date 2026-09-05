import { Accordion, AccordionItem } from '@uxkm/react/accordion';
import Affix from '@uxkm/react/affix';
import BackTop from '@uxkm/react/back-top';
import Button from '@uxkm/react/button';
import { Carousel, CarouselSlide } from '@uxkm/react/carousel';
import { Collapse, CollapsePanel } from '@uxkm/react/collapse';
import { DemoSection } from '../../demo/DemoSection.jsx';
import { DemoLink } from '../../router/index.jsx';

export default function MiscellaneousPage() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">
            <DemoLink to="/components" className="link color_accent">
              컴포넌트
            </DemoLink>
            {' · Miscellaneous'}
          </p>
          <h1>Miscellaneous</h1>
          <p className="lead">기타 컴포넌트를 렌더합니다.</p>
        </header>

        <DemoSection id="accordion" title="Accordion" path="@uxkm/react/accordion">
          <Accordion>
            <AccordionItem title="첫 번째 항목" open>
              아코디언 본문 데모입니다.
            </AccordionItem>
            <AccordionItem title="두 번째 항목">두 번째 패널입니다.</AccordionItem>
          </Accordion>
        </DemoSection>

        <DemoSection id="collapse" title="Collapse" path="@uxkm/react/collapse">
          <Collapse>
            <CollapsePanel title="접기 패널" open>
              콜랩스 본문 데모입니다.
            </CollapsePanel>
            <CollapsePanel title="다른 패널">다른 패널 본문입니다.</CollapsePanel>
          </Collapse>
        </DemoSection>

        <DemoSection id="carousel" title="Carousel" path="@uxkm/react/carousel">
          <Carousel ariaLabel="데모 캐러셀" pagination navigation={false}>
            <CarouselSlide>
              <div style={{ padding: '2rem', textAlign: 'center' }}>슬라이드 1</div>
            </CarouselSlide>
            <CarouselSlide>
              <div style={{ padding: '2rem', textAlign: 'center' }}>슬라이드 2</div>
            </CarouselSlide>
            <CarouselSlide>
              <div style={{ padding: '2rem', textAlign: 'center' }}>슬라이드 3</div>
            </CarouselSlide>
          </Carousel>
        </DemoSection>

        <DemoSection id="affix" title="Affix" path="@uxkm/react/affix">
          <Affix offsetTop={16} interactive={false}>
            <Button label="Affix" />
          </Affix>
        </DemoSection>

        <DemoSection id="back-top" title="BackTop" path="@uxkm/react/back-top">
          <BackTop visibilityHeight={0} interactive={false} />
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
