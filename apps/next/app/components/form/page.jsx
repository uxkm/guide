'use client';

import Checkbox from '@uxkm/react/checkbox';
import DatePicker from '@uxkm/react/date-picker';
import { FormField, FormLayout } from '@uxkm/react/form-layout';
import Input from '@uxkm/react/input';
import Radio from '@uxkm/react/radio';
import Rate from '@uxkm/react/rate';
import Select from '@uxkm/react/select';
import Slider from '@uxkm/react/slider';
import Switch from '@uxkm/react/switch';
import Textarea from '@uxkm/react/textarea';
import Upload from '@uxkm/react/upload';
import Link from 'next/link';
import { DemoSection } from '../../../src/demo/DemoSection.jsx';

export default function FormPage() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">
            <Link href="/components" className="link color_accent">
              컴포넌트
            </Link>
            {' · Form'}
          </p>
          <h1>Form</h1>
          <p className="lead">폼 컴포넌트를 렌더합니다.</p>
        </header>

        <DemoSection id="input" title="Input" path="@uxkm/react/input">
          <Input placeholder="이름을 입력하세요" aria-label="이름" />
        </DemoSection>

        <DemoSection id="textarea" title="Textarea" path="@uxkm/react/textarea">
          <Textarea placeholder="내용을 입력하세요" aria-label="메모" rows={3} />
        </DemoSection>

        <DemoSection id="select" title="Select" path="@uxkm/react/select">
          <Select placeholder="선택하세요" aria-label="옵션">
            <option value="a">옵션 A</option>
            <option value="b">옵션 B</option>
            <option value="c">옵션 C</option>
          </Select>
        </DemoSection>

        <DemoSection id="checkbox" title="Checkbox" path="@uxkm/react/checkbox">
          <Checkbox label="이용약관에 동의합니다" />
        </DemoSection>

        <DemoSection id="radio" title="Radio" path="@uxkm/react/radio">
          <Radio name="demo-radio" value="a" label="옵션 A" defaultChecked />
        </DemoSection>

        <DemoSection id="switch" title="Switch" path="@uxkm/react/switch">
          <Switch label="알림 받기" />
        </DemoSection>

        <DemoSection id="slider" title="Slider" path="@uxkm/react/slider">
          <Slider aria-label="슬라이더" defaultValue={40} showValue />
        </DemoSection>

        <DemoSection id="rate" title="Rate" path="@uxkm/react/rate">
          <Rate defaultValue={3} aria-label="별점" />
        </DemoSection>

        <DemoSection id="date-picker" title="DatePicker" path="@uxkm/react/date-picker">
          <DatePicker placeholder="날짜를 선택하세요" />
        </DemoSection>

        <DemoSection id="upload" title="Upload" path="@uxkm/react/upload">
          <Upload buttonLabel="파일 선택" />
        </DemoSection>

        <DemoSection id="form-layout" title="FormLayout" path="@uxkm/react/form-layout">
          <FormLayout fit>
            <FormField label="이름" htmlFor="form-demo-name">
              <Input id="form-demo-name" placeholder="이름을 입력하세요" />
            </FormField>
          </FormLayout>
        </DemoSection>

        <p>
          <Link href="/components" className="link color_primary">
            ← 컴포넌트 목록
          </Link>
        </p>
      </div>
    </main>
  );
}
