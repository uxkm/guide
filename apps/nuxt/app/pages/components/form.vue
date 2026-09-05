<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">
          <NuxtLink class="link color_accent" to="/components">컴포넌트</NuxtLink>
          · Form
        </p>
        <h1>Form</h1>
        <p class="lead">폼 컴포넌트를 Vue로 렌더합니다.</p>
      </header>

      <DemoSection id="input" title="Input" path="@uxkm/vue/input">
        <label class="form_field">
          <span class="form_field-label">이름</span>
          <Input placeholder="이름을 입력하세요" />
        </label>
      </DemoSection>

      <DemoSection id="textarea" title="Textarea" path="@uxkm/vue/textarea">
        <Textarea placeholder="내용을 입력하세요" />
      </DemoSection>

      <DemoSection id="select" title="Select" path="@uxkm/vue/select">
        <Select placeholder="선택하세요">
          <option value="a">옵션 A</option>
          <option value="b">옵션 B</option>
          <option value="c">옵션 C</option>
        </Select>
      </DemoSection>

      <DemoSection id="checkbox" title="Checkbox" path="@uxkm/vue/checkbox">
        <Checkbox label="이용약관에 동의합니다" />
      </DemoSection>

      <DemoSection id="radio" title="Radio" path="@uxkm/vue/radio">
        <Radio name="demo-radio" value="a" label="옵션 A" checked />
        <Radio name="demo-radio" value="b" label="옵션 B" />
      </DemoSection>

      <DemoSection id="switch" title="Switch" path="@uxkm/vue/switch">
        <Switch label="알림 받기" />
      </DemoSection>

      <DemoSection id="slider" title="Slider" path="@uxkm/vue/slider">
        <Slider :model-value="40" show-value />
      </DemoSection>

      <DemoSection id="rate" title="Rate" path="@uxkm/vue/rate">
        <Rate :model-value="3" />
      </DemoSection>

      <DemoSection id="date-picker" title="DatePicker" path="@uxkm/vue/date-picker">
        <DatePicker />
      </DemoSection>

      <DemoSection id="upload" title="Upload" path="@uxkm/vue/upload">
        <Upload />
      </DemoSection>

      <DemoSection id="form-layout" title="FormLayout" path="@uxkm/vue/form-layout">
        <FormLayout>
          <FormField label="이메일" for="demo-email">
            <Input id="demo-email" type="email" placeholder="you@example.com" />
          </FormField>
          <FormActions>
            <Button label="제출" />
          </FormActions>
        </FormLayout>
      </DemoSection>

      <p>
        <NuxtLink class="link color_primary" to="/components">← 컴포넌트 목록</NuxtLink>
      </p>
    </div>
  </main>
</template>

<script setup>
import Button from '@uxkm/vue/button';
import Checkbox from '@uxkm/vue/checkbox';
import DatePicker from '@uxkm/vue/date-picker';
import FormLayout, { FormActions, FormField } from '@uxkm/vue/form-layout';
import Input from '@uxkm/vue/input';
import Radio from '@uxkm/vue/radio';
import Rate from '@uxkm/vue/rate';
import Select from '@uxkm/vue/select';
import Slider from '@uxkm/vue/slider';
import Switch from '@uxkm/vue/switch';
import Textarea from '@uxkm/vue/textarea';
import Upload from '@uxkm/vue/upload';
import DemoSection from '../../components/demo/DemoSection.vue';
</script>
