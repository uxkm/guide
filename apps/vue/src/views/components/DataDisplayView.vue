<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">
          <a class="link color_accent" href="/components" @click.prevent="goComponents">컴포넌트</a>
          · Data Display
        </p>
        <h1>Data Display</h1>
        <p class="lead">데이터 표시 컴포넌트를 Vue로 렌더합니다.</p>
      </header>

      <DemoSection id="avatar" title="Avatar" path="@uxkm/vue/avatar">
        <AvatarGroup>
          <Avatar initials="UX" />
          <Avatar initials="KM" />
        </AvatarGroup>
      </DemoSection>

      <DemoSection id="badge" title="Badge" path="@uxkm/vue/badge">
        <Badge label="NEW" />
      </DemoSection>

      <DemoSection id="tag" title="Tag" path="@uxkm/vue/tag">
        <Tag label="Vue" />
      </DemoSection>

      <DemoSection id="stat" title="Stat" path="@uxkm/vue/stat">
        <Stat title="방문자" value="1,284" />
      </DemoSection>

      <DemoSection id="card" title="Card" path="@uxkm/vue/card">
        <Card title="카드 제목">카드 본문 데모입니다.</Card>
      </DemoSection>

      <DemoSection id="list" title="List" path="@uxkm/vue/list">
        <List bordered>
          <ListItem title="첫 번째 항목" description="설명 텍스트" />
          <ListItem title="두 번째 항목" description="설명 텍스트" />
        </List>
      </DemoSection>

      <DemoSection id="table" title="Table" path="@uxkm/vue/table">
        <Table bordered>
          <thead>
            <tr>
              <th>이름</th>
              <th>역할</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kim</td>
              <td>Designer</td>
            </tr>
            <tr>
              <td>Lee</td>
              <td>Engineer</td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection id="timeline" title="Timeline" path="@uxkm/vue/timeline">
        <Timeline>
          <TimelineItem title="생성" description="항목이 생성되었습니다." time="09:00" />
          <TimelineItem title="수정" description="내용이 업데이트되었습니다." time="12:30" />
        </Timeline>
      </DemoSection>

      <DemoSection id="calendar" title="Calendar" path="@uxkm/vue/calendar">
        <Calendar />
      </DemoSection>

      <DemoSection id="tree" title="Tree" path="@uxkm/vue/tree">
        <Tree>
          <TreeNode label="루트" expanded>
            <TreeNode label="자식 A" />
            <TreeNode label="자식 B" />
          </TreeNode>
        </Tree>
      </DemoSection>

      <p>
        <a class="link color_primary" href="/components" @click.prevent="goComponents"
          >← 컴포넌트 목록</a
        >
      </p>
    </div>
  </main>
</template>

<script setup>
import Avatar, { AvatarGroup } from '@uxkm/vue/avatar';
import Badge from '@uxkm/vue/badge';
import Calendar from '@uxkm/vue/calendar';
import Card from '@uxkm/vue/card';
import List, { ListItem } from '@uxkm/vue/list';
import Stat from '@uxkm/vue/stat';
import Table from '@uxkm/vue/table';
import Tag from '@uxkm/vue/tag';
import Timeline, { TimelineItem } from '@uxkm/vue/timeline';
import Tree, { TreeNode } from '@uxkm/vue/tree';
import DemoSection from '../../demo/DemoSection.vue';
import { navigate } from '../../router/index.js';

function goComponents() {
  navigate('/components');
}
</script>
