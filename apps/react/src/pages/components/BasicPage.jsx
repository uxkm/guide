import Button from '@uxkm/react/button';
import Icon from '@uxkm/react/icon';
import Link from '@uxkm/react/link';
import { TypoText, TypoTitle } from '@uxkm/react/typography';
import { DemoSection } from '../../demo/DemoSection.jsx';
import { DemoLink } from '../../router/index.jsx';

export default function BasicPage() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">
            <DemoLink to="/components" className="link color_accent">
              컴포넌트
            </DemoLink>
            {' · Basic'}
          </p>
          <h1>Basic</h1>
          <p className="lead">기본 요소 컴포넌트를 렌더합니다.</p>
        </header>

        <DemoSection id="button" title="Button" path="@uxkm/react/button">
          <Button label="Button" />
        </DemoSection>

        <DemoSection id="icon" title="Icon" path="@uxkm/react/icon">
          <Icon name="plus" ariaLabel="추가" />
        </DemoSection>

        <DemoSection id="link" title="Link" path="@uxkm/react/link">
          <Link href="#link" label="링크 데모" />
        </DemoSection>

        <DemoSection id="typography" title="Typography" path="@uxkm/react/typography">
          <TypoTitle level={3} label="제목 예시" />
          <TypoText variant="paragraph">본문 텍스트 데모입니다.</TypoText>
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
