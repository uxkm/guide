// @ts-nocheck -- JS 컴포넌트의 런타임 분기 조합을 검증하는 전용 Storybook harness입니다.
import { useContext, useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../../react/src/components/basic/Button/Button.jsx';
import Link from '../../react/src/components/basic/Link/Link.jsx';
import { TypoText, TypoTitle } from '../../react/src/components/basic/Typography/Typography.jsx';
import Card, { CardBody, CardDeck, CardFooter, CardHeader } from '../../react/src/components/data-display/Card/Card.jsx';
import Avatar, { AvatarGroup } from '../../react/src/components/data-display/Avatar/Avatar.jsx';
import Calendar, { CalendarDay, CalendarFooter, CalendarGrid, CalendarHeader, CalendarMonth, CalendarNav, CalendarWeekdays, CalendarWheel, CalendarWheelColumn } from '../../react/src/components/data-display/Calendar/Calendar.jsx';
import Tag, { TagGroup } from '../../react/src/components/data-display/Tag/Tag.jsx';
import Table from '../../react/src/components/data-display/Table/Table.jsx';
import List, { ListItem } from '../../react/src/components/data-display/List/List.jsx';
import Tree, { TreeNode } from '../../react/src/components/data-display/Tree/Tree.jsx';
import Alert from '../../react/src/components/feedback/Alert/Alert.jsx';
import Skeleton from '../../react/src/components/feedback/Skeleton/Skeleton.jsx';
import Accordion, { AccordionContext } from '../../react/src/components/miscellaneous/Accordion/Accordion.jsx';
import Affix from '../../react/src/components/miscellaneous/Affix/Affix.jsx';
import BackTop from '../../react/src/components/miscellaneous/BackTop/BackTop.jsx';
import Carousel, { normalizeInitialSlide, updateCoverflowStyles } from '../../react/src/components/miscellaneous/Carousel/Carousel.jsx';
import CarouselSlide from '../../react/src/components/miscellaneous/Carousel/CarouselSlide.jsx';
import AccordionItem from '../../react/src/components/miscellaneous/Accordion/AccordionItem.jsx';
import Collapse, { CollapseContext } from '../../react/src/components/miscellaneous/Collapse/Collapse.jsx';
import CollapseExternal from '../../react/src/components/miscellaneous/Collapse/CollapseExternal.jsx';
import CollapsePanel from '../../react/src/components/miscellaneous/Collapse/CollapsePanel.jsx';
import Drawer, { getDrawerPortalRoot } from '../../react/src/components/feedback/Drawer/Drawer.jsx';
import Input from '../../react/src/components/form/Input/Input.jsx';
import Modal, { getModalPortalRoot } from '../../react/src/components/feedback/Modal/Modal.jsx';
import Popover, { getPopoverPortalRoot, resolveTriggerAnchor, topViewportRect } from '../../react/src/components/feedback/Popover/Popover.jsx';
import Snackbar from '../../react/src/components/feedback/Snackbar/Snackbar.jsx';
import SnackbarRegion, { getSnackbarPortalRoot } from '../../react/src/components/feedback/Snackbar/SnackbarRegion.jsx';
import Tooltip, { getTooltipPortalRoot, resolveTriggerAnchor as resolveTooltipTriggerAnchor, viewportRect } from '../../react/src/components/feedback/Tooltip/Tooltip.jsx';
import DatePicker from '../../react/src/components/form/DatePicker/DatePicker.jsx';
import Rate from '../../react/src/components/form/Rate/Rate.jsx';
import Slider from '../../react/src/components/form/Slider/Slider.jsx';
import Textarea from '../../react/src/components/form/Textarea/Textarea.jsx';
import Upload, { revokeUploadObjectUrls } from '../../react/src/components/form/Upload/Upload.jsx';
import Dropdown from '../../react/src/components/navigation/Dropdown/Dropdown.jsx';
import Menu from '../../react/src/components/navigation/Menu/Menu.jsx';
import MenuItem from '../../react/src/components/navigation/Menu/MenuItem.jsx';
import MenuSubmenu from '../../react/src/components/navigation/Menu/MenuSubmenu.jsx';
import Navbar from '../../react/src/components/navigation/Navbar/Navbar.jsx';
import NavbarItem from '../../react/src/components/navigation/Navbar/NavbarItem.jsx';
import Pagination from '../../react/src/components/navigation/Pagination/Pagination.jsx';
import Steps from '../../react/src/components/navigation/Steps/Steps.jsx';
import StepsItem from '../../react/src/components/navigation/Steps/StepsItem.jsx';
import Tabs from '../../react/src/components/navigation/Tabs/Tabs.jsx';
import TabMenu from '../../react/src/components/navigation/Tabs/TabMenu.jsx';
import TabPanel from '../../react/src/components/navigation/Tabs/TabPanel.jsx';

const wait = (milliseconds = 0) => new Promise((resolve) => window.setTimeout(resolve, milliseconds));

function portalDocument(canvasElement: HTMLElement) {
  try {
    return canvasElement.ownerDocument.defaultView?.top?.document ?? canvasElement.ownerDocument;
  } catch {
    return canvasElement.ownerDocument;
  }
}

function setInputValue(input: HTMLInputElement, value: string) {
  Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

function keyboard(target: EventTarget, key: string, shiftKey = false) {
  target.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key, shiftKey }));
}

function pointer(target: EventTarget, type: string, options: PointerEventInit = {}) {
  target.dispatchEvent(new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 1, button: 0, ...options }));
}

function clickPrevented(target: EventTarget) {
  const event = new MouseEvent('click', { bubbles: true, cancelable: true });
  event.preventDefault();
  target.dispatchEvent(event);
}

function FormsHarness() {
  const [controlled, setControlled] = useState('12');
  return <div className="demo-stack">
    <label>숫자 제한<Input aria-label="숫자 제한" inputMode="numeric" maxLength={4} clearable defaultValue="12a" onChange={(event: any) => setControlled(event.target.value)} onPaste={() => undefined} onClear={() => undefined} /></label>
    <label>숫자 무제한<Input aria-label="숫자 무제한" inputMode="numeric" defaultValue="" /></label>
    <label>number<Input aria-label="number" type="number" defaultValue="" /></label>
    <label>제어 입력<Input aria-label="제어 입력" value={controlled} onChange={(event: any) => setControlled(event.target.value)} clearable prefix="₩" suffix="원" size="invalid" block error /></label>
    <label>읽기 전용<Input aria-label="읽기 전용" clearable defaultValue="read" readOnly /></label>
    <label>비활성<Input aria-label="비활성" clearable defaultValue="disabled" disabled /></label>

    <Accordion variant="invalid" size="invalid">
      <AccordionProbe />
      <AccordionItem label="첫째" content="첫째 내용" open extra="추가" />
      <AccordionItem title="둘째" disabled>둘째 내용</AccordionItem>
      <AccordionItem label="셋째" content="셋째 내용" />
    </Accordion>
    <Accordion multiple effect="slide" variant="card" size="sm">
      <AccordionItem label="슬라이드 하나" content="내용" />
      <AccordionItem label="슬라이드 둘" content="내용" />
    </Accordion>

    <Collapse variant="invalid" size="invalid" accordion>
      <CollapseProbe />
      <CollapsePanel label="접기 첫째" content="첫째 내용" open extra="추가" />
      <CollapsePanel title="접기 둘째" disabled>둘째 내용</CollapsePanel>
      <CollapsePanel label="접기 셋째" content="셋째 내용" />
    </Collapse>
    <Collapse variant="ghost" size="lg" effect="slide">
      <CollapsePanel label="슬라이드 접기" content="내용" />
      <CollapsePanel label="슬라이드 접기 둘" content="내용" />
    </Collapse>
    <CollapseExternal triggerLabel="외부 기본" lead="설명" open>외부 내용</CollapseExternal>
    <CollapseExternal triggerLabel="외부 슬라이드" effect="slide" boxed={false}>외부 슬라이드 내용</CollapseExternal>
  </div>;
}

function OverlayHarness() {
  const footer = <button type="button">푸터 버튼</button>;
  return <>
    <button type="button">이전 초점</button>
    <Modal open id="coverage-modal-main" title="기본 모달" size="invalid" scrollable footer={footer} footerAlign="even" footerRatio="2-1" footerNoPadBottom onClose={() => undefined}>본문</Modal>
    <Modal open id="coverage-modal-empty" header={<h2 id="coverage-modal-empty-title">빈 모달</h2>} aria-labelledby="coverage-modal-empty-title" backdrop={false} size="fullscreen" onClose={() => undefined}>초점 요소 없음</Modal>
    <Modal defaultOpen id="coverage-modal-internal" title="내부 모달" onClose={noop}>내부 상태</Modal>
    <Drawer open id="coverage-drawer-main" title="기본 드로어" size="invalid" placement="invalid" footer={footer} footerAlign="even" footerRatio="2-1" footerNoPadBottom extra="추가" onClose={() => undefined}>본문</Drawer>
    <Drawer open id="coverage-drawer-empty" header={<h2 id="coverage-drawer-empty-title">빈 드로어</h2>} aria-labelledby="coverage-drawer-empty-title" noBackdrop placement="left" size="sm" onClose={() => undefined}>초점 요소 없음</Drawer>
    <Drawer open id="coverage-drawer-drag" title="드래그 드로어" placement="bottom" size="lg" draggable onClose={() => undefined}>드래그 본문</Drawer>
    <Drawer defaultOpen id="coverage-drawer-internal" title="내부 드로어" onClose={noop}>내부 상태</Drawer>
  </>;
}

function FocuslessOverlayHarness() {
  return <><Modal open aria-label="초점 없는 모달" onClose={noop}>초점 가능한 요소 없음</Modal><Drawer open aria-label="초점 없는 드로어" onClose={noop}>초점 가능한 요소 없음</Drawer></>;
}

function FeedbackHarness() {
  return <div className="demo-stack">
    <SnackbarRegion placement="invalid" label="기본 알림 영역" className="coverage-region">
      <Snackbar message="기본" color="invalid" size="invalid" motion="invalid" placement="invalid" duration="invalid" />
      <Snackbar message="닫기" closable duration={1000} onClose={() => undefined} onMouseEnter={() => undefined} onMouseLeave={() => undefined} onFocusCapture={() => undefined} onBlurCapture={() => undefined} onKeyDown={() => undefined} onAnimationEnd={() => undefined} />
      <Snackbar message="빠른 자동 닫기" motion="none" duration={10} onClose={() => undefined} />
      <Snackbar role="alert" color="danger" size="sm" motion="none" round closable icon={<span>!</span>} action={({ close }: any) => <button type="button" onClick={close}>실행</button>} onClose={() => undefined}>즉시 닫기</Snackbar>
      <Snackbar message="애니메이션 닫기" motion="slide" closable onClose={() => undefined} />
    </SnackbarRegion>
    <Tooltip content="호버 도움말" defaultOpen placement="invalid" size="invalid" offset="lg" offsetTop="sm" offsetRight="lg" offsetBottom="sm" offsetLeft="lg" inverse noArrow className="coverage-tooltip"><button type="button">호버 대상</button></Tooltip>
    <Tooltip content="클릭 도움말" trigger="click" placement="right" arrowAnchor="target" arrowTargetAlign="bottom" panelAlign="end" closable><button type="button">클릭 대상</button></Tooltip>
    <Tooltip content="혼합 도움말" defaultOpen placement="top-start" arrowAnchor="mixed" arrowTargetAlign="left" panelAlign="start"><button type="button">혼합 대상</button></Tooltip>
    <Tooltip content="왼쪽 도움말" defaultOpen placement="left" arrowAnchor="mixed" arrowTargetAlign="right" panelAlign="end"><button type="button">왼쪽 대상</button></Tooltip>
    <Tooltip content="오른쪽 도움말" defaultOpen placement="right" arrowAnchor="mixed" panelAlign="center"><button type="button">오른쪽 대상</button></Tooltip>
    <Tooltip content="아래 도움말" defaultOpen placement="end" arrowAnchor="mixed" panelAlign="center"><button type="button">아래 대상</button></Tooltip>
    <Tooltip content="비활성 도움말" disabled defaultOpen><button type="button">비활성 대상</button></Tooltip>
    <Tooltip content="문자 트리거" triggerContent="문자" />
  </div>;
}

const noop = () => undefined;
const preventNavigation = (event: Event) => event.preventDefault();

function AccordionProbe() {
  const context = useContext(AccordionContext);
  useEffect(() => { context?.toggleItem('missing-accordion-item'); requestAnimationFrame(() => { const id = document.querySelector<HTMLButtonElement>('.accordion_trigger:disabled')?.id; if (id) context?.toggleItem(id); }); }, [context]);
  return null;
}

function CollapseProbe() {
  const context = useContext(CollapseContext);
  useEffect(() => { context?.togglePanel('missing-collapse-panel'); requestAnimationFrame(() => { const id = document.querySelector<HTMLButtonElement>('.collapse_trigger:disabled')?.id; if (id) context?.togglePanel(id); }); }, [context]);
  return null;
}

function ElementsHarness() {
  const [text, setText] = useState('controlled');
  return <div className="demo-stack">
    <div>
      <Button label="일반" onClick={noop} onKeyDown={noop} />
      <Button tag="div" label="div 버튼" onClick={noop} onKeyDown={noop} />
      <Button tag="a" label="링크 역할 버튼" onClick={noop} onKeyDown={noop} />
      <Button tag="a" href="#button-link" label="링크 버튼" />
      <Button disabled label="비활성" onClick={noop} onKeyDown={noop} />
      <Button tag="div" ariaDisabled label="aria 비활성" onClick={noop} onKeyDown={noop} />
      <Button loading label="로딩" onClick={noop} onKeyDown={noop} />
      <Button variant="select" selectCaret selectText placeholder iconBefore="앞" iconAfter="뒤" vertical round block grow fit open error invalid>선택</Button>
      <Button grow="2" size="lg" variant="ghost" iconOnly>아이콘</Button>
    </div>
    <div>
      <Link label="기본 링크" onClick={noop} />
      <Link href="/real" label="실제 링크" target="_blank" rel="noreferrer" onClick={preventNavigation} />
      <Link as="button" disabled label="비활성 링크" onClick={noop} />
      <Link as="div" disabled label="비활성 div 링크" onClick={noop} />
      <Link as="div" href="#" label="div 링크" color="invalid" size="invalid" underline noUnderline standalone nav block back active icon="앞" iconAfter="뒤" onClick={noop} />
      <Link iconOnly icon="아이콘" ariaLabel="아이콘 링크" />
    </div>
    <div>
      <TypoTitle level="invalid" color="primary" label="제목" />
      <TypoTitle level="2">제목 2</TypoTitle>
      <TypoText variant="link" label="타이포 링크" onClick={noop} />
      <TypoText variant="link" href="/real" label="타이포 실제 링크" onClick={preventNavigation} />
      <TypoText variant="blockquote" cite="출처" ellipsis={2} size="invalid">인용</TypoText>
      <TypoText variant="invalid" tag="span" ellipsis={1} size="xl">사용자 태그</TypoText>
      <TypoText ellipsis={3} size="sm">세 줄</TypoText>
    </div>
    <CardDeck columns={2}><Card title="카드" subtitle="부제" extra="추가" media="미디어" horizontal compact hoverable accent color="info" size="invalid" variant="invalid"><CardBody>본문</CardBody></Card><Card header={<CardHeader title="헤더" subtitle="부제" extra="추가" />} variant="flat" /></CardDeck>
    <CardDeck columns={4}><Card href="#card" title="링크 카드" onClick={noop} /><Card onClick={noop} disabled title="비활성 카드" /><Card href="#disabled-card" disabled title="비활성 링크 카드" onClick={noop} /><Card as="section"><CardHeader><b>직접 헤더</b></CardHeader><CardBody>본문</CardBody><CardFooter between>푸터</CardFooter></Card></CardDeck>
    <TagGroup tight ariaLabel="태그 모음">
      <Tag label="일반" icon="아이콘" closable onClose={noop} />
      <Tag label="체크" checkable selected closable onClick={noop} onClose={noop} variant="invalid" size="invalid" />
      <Tag label="추가" add closable onClick={noop} onClose={noop} />
      <Tag label="링크" href="#tag" closable onClick={noop} onClose={noop} />
      <Tag label="비활성" href="#tag-disabled" disabled closable onClick={noop} onClose={noop} />
      <Tag closable closeLabel="복합 태그 제거"><span>복합</span></Tag>
    </TagGroup>
    <Tree ariaLabel="테스트 트리" bordered lines compact multiselectable>
      <TreeNode label="부모" toggleLabel="부모 펼치기" selected plusToggle meta="2" prefix="앞" icon="폴더" onExpandedChange={noop}><TreeNode label="자식" link metaSlot={<span>메타</span>} labelSlot={<span className="tree_label">슬롯</span>} /></TreeNode>
      <TreeNode label="제어 부모" expanded={false} expandable toggleLabel="제어 펼치기"><TreeNode label="숨김 자식" /></TreeNode>
      <TreeNode label="비활성" disabled expandable toggleLabel="비활성 펼치기" />
      <TreeNode label="말단" />
    </Tree>
    <Table wrap={false} aria-label="래퍼 없는 표"><tbody><tr><td>셀</td></tr></tbody></Table>
    <Alert title="닫기 경고" description="설명" closable color="invalid" size="sm" banner actions={<button type="button">액션</button>} onClose={noop} />
    <Alert showIcon={false} role="status">사용자 내용</Alert>
    <Alert icon={<span>!</span>} color="danger" title="아이콘">내용</Alert>
    <Textarea aria-label="일반 텍스트" defaultValue="a" onChange={noop} fit size="invalid" resize="invalid" />
    <Textarea aria-label="카운트 텍스트" value={text} onChange={(event: any) => setText(event.target.value)} showCount maxLength={10} fit error wrapperClassName="wrap" aria-describedby="hint" />
    <Textarea aria-label="무제한 카운트" defaultValue="abc" showCount />
  </div>;
}

const initialUploads = [
  { name: 'done.txt', size: 10, type: 'text/plain', status: 'done' },
  { name: 'error.txt', size: 2048, type: 'text/plain', status: 'error', error: '실패' },
  { name: 'uploading.txt', size: 2_000_000, type: 'text/plain', status: 'uploading', progress: 30 },
];

function FormsNavigationHarness() {
  const [date, setDate] = useState('2026-08-25');
  const [tab, setTab] = useState('one');
  const [showUploads, setShowUploads] = useState(true);
  return <div className="demo-stack">
    <DatePicker id="coverage-date" value={date} onChange={setDate} name="date" min="2026-08-01" max="2026-09-30" panelAlign="end" size="lg" fit block error success required />
    <DatePicker id="coverage-date-disabled" defaultValue="invalid" disabled clearable={false} ariaLabel="비활성 날짜" />
    <DatePicker id="coverage-date-uncontrolled" defaultValue="2026-08-20" ariaLabel="비제어 날짜" />
    <Rate defaultValue={2.5} count={3} allowHalf clearable legend="별점" size="invalid" onChange={noop} />
    <Rate value={1} count={0} onChange={noop} />
    <Rate readOnly value={2.5} count={3} allowHalf aria-label="읽기 별점" />
    <Rate readonly count={3} aria-label="빈 읽기 별점" />
    <Slider label="범위" min={0} max={10} defaultValue={20} step={2} stepper stepperAlways showValue valueSuffix="점" hint="힌트" size="invalid" onChange={noop} data-slider-valuetext-map="0:없음,10:최대" />
    <Slider aria-label="고정 범위" min={5} max={5} value={5} onChange={noop} vertical size="lg" data-slider-valuetext-suffix="단계" />
    <Slider aria-label="텍스트 범위" defaultValue={30} aria-valuetext="삼십" data-slider-suffix="%" />
    {showUploads && <><Upload id="upload-button" defaultFiles={initialUploads} hint="업로드 힌트" onChange={noop} />
    <Upload id="upload-drag" variant="dropzone" accept="image/*,.txt" multiple maxFiles={3} maxSize={100} description="설명" hint="힌트" onChange={noop} onError={noop} />
    <Upload id="upload-card" variant="cards" defaultFiles={[{ name: 'card.txt', size: 20, type: 'text/plain', url: '', status: 'done' }]} cards={<span>카드 앞</span>} onChange={noop} />
    <Upload id="upload-avatar" variant="avatar" avatarSrc="data:image/gif;base64,R0lGODlhAQABAAAAACw=" onChange={noop} />
    <Upload id="upload-list" variant="list" defaultFiles={initialUploads} onChange={noop}>목록 전용</Upload>
    <Upload id="upload-disabled" disabled trigger={<span>비활성 트리거</span>} /></>}
    <button type="button" onClick={() => setShowUploads(false)}>업로드 제거</button>

    <Menu mode="invalid" bordered compact dark ariaLabel="테스트 메뉴" onClick={noop}>
      <MenuItem label="활성" active href="#active" icon="아이콘" extra="추가" onClick={noop} />
      <MenuItem label="버튼" onClick={noop} />
      <MenuItem label="비활성" disabled onClick={noop} />
      <MenuSubmenu label="하위" expanded icon="아이콘"><MenuItem label="하위 항목" /></MenuSubmenu>
    </Menu>
    <Dropdown defaultOpen placement="invalid" fit maxVisibleItems={3} menuWidth={12} menuMinWidth="8rem" triggerContent={<Button label="사용자 트리거" onClick={noop} onKeyDown={noop} />} onOpenChange={noop} onSelect={noop}>
      <Menu ariaLabel="드롭다운 메뉴"><MenuItem label="첫째" /><MenuItem label="비활성" disabled /><MenuItem label="셋째" /></Menu>
    </Dropdown>
    <Dropdown triggerLabel="기본 드롭다운" placement="end" closeOnSelect={false}><Menu ariaLabel="두 번째 메뉴"><MenuItem label="유지" /></Menu></Dropdown>
    <Dropdown triggerLabel="비활성 드롭다운" disabled placement="top"><Menu ariaLabel="비활성 메뉴"><MenuItem label="항목" /></Menu></Dropdown>
    <Navbar brand="브랜드" responsive size="invalid" borderless dark sticky items={<ul className="navbar_list"><NavbarItem label="홈" active badge="1" onClick={noop} /><NavbarItem href="/next">다음</NavbarItem></ul>} search={<input aria-label="탐색 검색" />} actions={<button type="button">액션</button>} />
    <Navbar role="presentation" brandContent={<span>로고</span>} brandIcon="아이콘"><NavbarItem label="자식 메뉴" /></Navbar>
    <Pagination current={5} total={200} pageSize={10} round size="invalid" onChange={noop} />
    <Pagination current={1} total={30} simple minimal size="sm" onChange={noop} ariaLabel="간단 페이지" />
    <Pagination current={20} total={200} pageSize={10} onChange={noop} ariaLabel="끝 페이지" />
    <Steps current={2} navigable direction="invalid" size="invalid" dot iconStyle align="center" ariaLabel="진행 단계" onChange={noop} items={[{ title: '첫째', onClick: noop }, { title: '둘째' }, { title: '셋째' }]} />
    <Steps ariaLabel="자식 단계"><StepsItem title="대기" /><StepsItem title="완료" status="finished" onClick={noop} /></Steps>
    <Tabs value={tab} onChange={setTab} variant="invalid" size="invalid" layout="invalid" indicator="invalid" ariaLabel="기본 탭" extra="추가" items={[{ key: 'one', label: '하나', content: '하나 내용' }, { key: 'disabled', label: '비활성', disabled: true, content: '숨김' }, { key: 'two', label: '둘', badge: '2', icon: 'I', content: '둘 내용' }]} />
    <Tabs mode="dynamic" defaultValue="a" variant="pill" layout="scroll" indicator="slide" ariaLabel="동적 탭" panel={({ value }: any) => `${value} 패널`} items={[{ key: 'a', label: 'A' }, { key: 'b', label: 'B' }, { key: 'c', label: 'C' }]} />
    <Tabs vertical variant="card" size="lg" layout="equal" scrollable ariaLabel="자식 탭"><TabPanel value="panel" label="패널">패널 내용</TabPanel><TabMenu value="menu" label="메뉴" /></Tabs>
    <TabPanel /><TabMenu />
  </div>;
}

function PopoverHarness() {
  return <div className="demo-stack">
    <Popover defaultOpen title="기본 팝오버" footer="푸터" placement="invalid" size="invalid" offset="lg" offsetTop="sm" offsetRight="lg" offsetBottom="sm" offsetLeft="lg" panelAlign="center" arrowAnchor="target" arrowTargetAlign="right" className="coverage-popover"><button type="button">기본 대상</button></Popover>
    <Popover defaultOpen panelLabel="혼합 팝오버" trigger="hover" placement="left" arrowAnchor="mixed" arrowTargetAlign="left" noArrow closable><button type="button">호버 대상</button></Popover>
    <Popover panelLabel="클릭 팝오버" triggerContent={<button type="button">클릭 대상</button>} onOpenChange={noop}>클릭 내용</Popover>
    <Popover panelLabel="비활성 팝오버" disabled defaultOpen><button type="button">비활성 대상</button></Popover>
    <Popover panelLabel="문자 팝오버" triggerContent="문자" />
    <Popover defaultOpen aria-label="플로팅 팝오버"><button type="button">플로팅 대상</button></Popover>
  </div>;
}

function RemainderHarness() {
  const slides = Array.from({ length: 6 }, (_, index) => <CarouselSlide key={index}>슬라이드 {index + 1}</CarouselSlide>);
  return <div className="demo-stack">
    <AvatarGroup ariaLabel="아바타 그룹"><Avatar src="/missing-avatar.png" alt="깨진 아바타" initials="AB" badgeColor="success" badgeLabel="온라인" size="invalid" square /><Avatar icon="아이콘" ariaHidden /><Avatar>자식</Avatar></AvatarGroup>
    <Skeleton avatar paragraph={5} /><Skeleton avatar paragraph={0} active={false} /><Skeleton paragraph /><Skeleton round /><Skeleton paragraph={false}>추가</Skeleton>
    <List layout="inline" inlineGap="1rem" inlineLabelWidth="5rem"><ListItem title="인라인" description="설명" /></List>
    <List variant="definition"><ListItem title="용어만" /><ListItem description="설명만" /></List>
    <List tag="div"><ListItem title="div 항목" /></List>
    <Table columns={[{ width: 10, minWidth: '5rem', maxWidth: 20, padding: '1rem', nowrap: true }]} stickyLeft stickyCols={9} stickyLeftOffsets={{ 1: '0', 2: '', 3: null }}><tbody><tr><td>열</td></tr></tbody></Table>
    <Affix interactive={false} skin="invalid">고정 안 함</Affix>
    <BackTop interactive={false} target="#coverage-scroll" size="invalid" color="invalid" label="위로" />
    <TabsResetHarness />
    <Calendar title="달력 제목" ariaLabel="전체 달력" minimal compact borderless shadow ghost week readonly disabled weekends agenda size="sm"><CalendarHeader title="헤더" showPrev={false} showNext children="추가" /><CalendarWeekdays labels={['일', '월']} /><CalendarMonth partial weekends rangeStart={3} rangeEnd={7} events={[5]} disabled={[4]} readonly /><CalendarFooter>사용자 푸터</CalendarFooter></Calendar>
    <Calendar noHeader title="숨긴 제목" ariaLabel="사용자 날짜"><CalendarNav label="이번 주" /><CalendarGrid week><CalendarDay day={1} otherMonth selected /><CalendarDay day={2} otherMonth inRange /><CalendarDay day={3} otherMonth /><CalendarDay day={4} today selected sunday saturday rangeStart rangeEnd event /></CalendarGrid></Calendar>
    <CalendarWheel title="휠" cancelLabel="취소" confirmLabel="확인" ariaLabel="날짜 휠" footer footerContent="휠 푸터"><CalendarWheelColumn label="날짜" items={[1, 2, 3]} selected={2} /></CalendarWheel>
    <CalendarWheel toolbarContent="사용자 툴바" ariaLabel="사용자 휠"><CalendarWheelColumn label="빈 휠" items={[]} showSteps={false} /></CalendarWheel>
    <Carousel ariaLabel="자동 재생 커버리지" autoplay autoplayToggle delay={10000} loop initialSlide={-1} onSwiper={noop}>{slides}</Carousel>
    <Carousel ariaLabel="자동 너비 캐러셀" slidesPerView="auto" loop freeMode>{slides.slice(0, 4)}</Carousel>
    <Carousel ariaLabel="커버플로 너비 없음" effect="coverflow" coverflowSides={2}>{slides}</Carousel>
    <Carousel ariaLabel="즉시 파기 캐러셀" onSwiper={(instance: any) => instance.destroy(true, true)}>{slides.slice(0, 2)}</Carousel>
    <Carousel ariaLabel="빈 캐러셀" autoplayToggle pagination={false} navigation={false} />
  </div>;
}

function TabsResetHarness() {
  const [items, setItems] = useState([{ key: 'old', label: '이전', content: '이전 내용' }]);
  useEffect(() => { setItems([{ key: 'new', label: '새 탭', content: '새 내용' }]); }, []);
  return <Tabs ariaLabel="항목 교체 탭" items={items} />;
}

const meta = {
  title: '테스트/전체 커버리지',
  parameters: { layout: 'padded' },
  tags: ['test'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormsAndDisclosures: Story = {
  render: () => <FormsHarness />,
  play: async ({ canvasElement, userEvent }) => {
    const inputs = [...canvasElement.querySelectorAll<HTMLInputElement>('input')];
    setInputValue(inputs[0], 'a12b345');
    setInputValue(inputs[1], 'a1b2');
    setInputValue(inputs[2], '1e+ab-2');
    await userEvent.type(inputs[2], '12');
    setInputValue(inputs[3], '99');
    inputs[0].setSelectionRange(1, 2);
    inputs[0].dispatchEvent(new ClipboardEvent('paste', { bubbles: true, cancelable: true, clipboardData: new DataTransfer() }));
    const paste = new Event('paste', { bubbles: true, cancelable: true }) as any;
    paste.clipboardData = { getData: () => 'x98y' };
    inputs[0].dispatchEvent(paste);
    const emptyPaste = new Event('paste', { bubbles: true, cancelable: true }) as any;
    emptyPaste.clipboardData = { getData: () => 'abc' };
    inputs[1].dispatchEvent(emptyPaste);
    const preventedPaste = new Event('paste', { bubbles: true, cancelable: true });
    preventedPaste.preventDefault();
    inputs[0].dispatchEvent(preventedPaste);
    for (const clear of canvasElement.querySelectorAll<HTMLButtonElement>('.input_clear:not([hidden])')) await userEvent.click(clear);
    for (const clear of canvasElement.querySelectorAll<HTMLButtonElement>('.input_clear[hidden]')) clickPrevented(clear);

    const accordionButtons = [...canvasElement.querySelectorAll<HTMLButtonElement>('.accordion_trigger')];
    await userEvent.click(accordionButtons[2]);
    await userEvent.click(accordionButtons[0]);
    await userEvent.click(accordionButtons[3]);
    await userEvent.click(accordionButtons[4]);
    for (const key of ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown']) keyboard(accordionButtons[0], key);

    const collapseButtons = [...canvasElement.querySelectorAll<HTMLButtonElement>('.collapse_trigger')];
    await userEvent.click(collapseButtons[2]);
    await userEvent.click(collapseButtons[0]);
    await userEvent.click(collapseButtons[3]);
    await userEvent.click(collapseButtons[4]);
    for (const key of ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown']) keyboard(collapseButtons[0], key);
    for (const button of canvasElement.querySelectorAll<HTMLButtonElement>('[aria-controls^="collapse-external"]')) await userEvent.click(button);
  },
};

export const Overlays: Story = {
  render: () => <OverlayHarness />,
  play: async ({ canvasElement, userEvent }) => {
    await wait(30);
    const doc = portalDocument(canvasElement);
    const modals = [...doc.querySelectorAll<HTMLElement>('.modal.is-open')];
    const drawers = [...doc.querySelectorAll<HTMLElement>('.drawer.is-open')];
    for (const root of [...modals, ...drawers]) {
      root.querySelector<HTMLElement>('button')?.focus();
      keyboard(doc, 'Tab', true);
      const buttons = root.querySelectorAll<HTMLElement>('button');
      buttons[buttons.length - 1]?.focus();
      keyboard(doc, 'Tab');
    }
    keyboard(doc, 'Escape');
    modals[0]?.querySelector<HTMLElement>('.modal_backdrop')?.click();
    modals[1]?.querySelector<HTMLElement>('.modal_backdrop')?.click();
    drawers[0]?.querySelector<HTMLElement>('.drawer_backdrop')?.click();
    drawers[1]?.querySelector<HTMLElement>('.drawer_backdrop')?.click();
    await userEvent.click(modals[0].querySelector<HTMLButtonElement>('.modal_close')!);
    await userEvent.click(drawers[0].querySelector<HTMLButtonElement>('.drawer_close')!);
    doc.querySelector<HTMLElement>('#coverage-modal-internal .modal_close')?.click();
    doc.querySelector<HTMLElement>('#coverage-drawer-internal .drawer_close')?.click();

    const handle = drawers[2]?.querySelector<HTMLElement>('.drawer_handle');
    if (handle) {
      const panel = drawers[2].querySelector<HTMLElement>('.drawer_panel')!;
      pointer(drawers[2].querySelector<HTMLElement>('.drawer_close')!, 'pointerdown', { clientY: 300 });
      panel.getBoundingClientRect = () => ({ width: 300, height: 300, top: 0, right: 300, bottom: 300, left: 0, x: 0, y: 0, toJSON: () => ({}) });
      pointer(handle, 'pointerdown', { clientY: 300 });
      pointer(handle, 'pointermove', { clientY: 200 });
      pointer(handle, 'pointerup', { clientY: 200 });
      pointer(handle, 'pointerdown', { clientY: 300 });
      pointer(handle, 'pointermove', { clientY: 290 });
      pointer(handle, 'pointerup', { clientY: 290 });
      pointer(handle, 'pointerdown', { clientY: 200, button: 1 });
      pointer(handle, 'pointermove', { clientY: 100, pointerId: 2 });
      pointer(handle, 'pointerup', { clientY: 100, pointerId: 2 });
      pointer(handle, 'pointerdown', { clientY: 200 });
      pointer(handle, 'pointermove', { clientY: 500 });
      panel.getBoundingClientRect = () => ({ width: 300, height: 100, top: 0, right: 300, bottom: 100, left: 0, x: 0, y: 0, toJSON: () => ({}) });
      pointer(handle, 'pointercancel', { clientY: 500 });
    }
  },
};

export const FocuslessOverlays: Story = {
  render: () => <FocuslessOverlayHarness />,
  play: async ({ canvasElement }) => {
    await wait(30);
    const doc = portalDocument(canvasElement);
    keyboard(doc, 'Tab');
  },
};

export const Feedback: Story = {
  render: () => <FeedbackHarness />,
  play: async ({ canvasElement, userEvent }) => {
    const doc = portalDocument(canvasElement);
    await wait(20);
    const enteringSnackbars = [...doc.querySelectorAll<HTMLElement>('.snackbar')];
    enteringSnackbars[0]?.dispatchEvent(new AnimationEvent('animationend', { bubbles: true }));
    const leavingSnackbar = enteringSnackbars[enteringSnackbars.length - 1];
    leavingSnackbar?.querySelector<HTMLElement>('.snackbar_close')?.click();
    await wait();
    leavingSnackbar?.querySelector<HTMLElement>('.snackbar_close')?.click();
    leavingSnackbar?.dispatchEvent(new AnimationEvent('animationend', { bubbles: true }));
    await wait(300);
    const snackbars = [...doc.querySelectorAll<HTMLElement>('.snackbar')];
    snackbars[1]?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    snackbars[1]?.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    snackbars[1]?.dispatchEvent(new MouseEvent('mouseout', { bubbles: true, relatedTarget: doc.body }));
    snackbars[1]?.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: doc.body }));
    keyboard(snackbars[1], 'Escape');
    snackbars[1]?.dispatchEvent(new AnimationEvent('animationend', { bubbles: true }));
    await userEvent.click(snackbars[2].querySelector<HTMLButtonElement>('button')!);
    snackbars[3]?.querySelector<HTMLElement>('.snackbar_close')?.click();
    snackbars[3]?.dispatchEvent(new AnimationEvent('animationend', { bubbles: true }));

    const triggers = [...canvasElement.querySelectorAll<HTMLElement>('.tooltip_trigger')];
    try {
      Object.defineProperty(canvasElement.ownerDocument.defaultView, 'frameElement', { configurable: true, value: { getBoundingClientRect: () => ({ top: 10, left: 20, width: 0, height: 0 }) } });
    } catch { /* 테스트 브라우저가 frameElement 재정의를 막으면 기본 좌표 경로를 사용합니다. */ }
    triggers[0]?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    triggers[0]?.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    triggers[0]?.dispatchEvent(new MouseEvent('mouseout', { bubbles: true, relatedTarget: doc.body }));
    triggers[0]?.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await userEvent.click(triggers[1]);
    doc.querySelector<HTMLButtonElement>('.tooltip_close')?.click();
    await userEvent.click(triggers[1]);
    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new Event('scroll'));
    keyboard(doc, 'Escape');
    await userEvent.click(triggers[1]);
    doc.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    triggers[4]?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    await wait(320);
  },
};

export const Elements: Story = {
  render: () => <ElementsHarness />,
  play: async ({ canvasElement, userEvent }) => {
    const buttons = [...canvasElement.querySelectorAll<HTMLElement>('[data-component="Button"]')];
    for (const button of buttons.slice(0, 7)) {
      clickPrevented(button);
      keyboard(button, 'Enter');
      keyboard(button, ' ');
      keyboard(button, 'ArrowDown');
    }
    for (const link of canvasElement.querySelectorAll<HTMLElement>('[data-component="Link"], [data-component="TypoText"][href]')) clickPrevented(link);
    for (const card of canvasElement.querySelectorAll<HTMLElement>('.card_clickable')) clickPrevented(card);
    for (const tag of canvasElement.querySelectorAll<HTMLElement>('[data-component="Tag"] button, [data-component="Tag"] a')) clickPrevented(tag);
    for (const close of canvasElement.querySelectorAll<HTMLButtonElement>('.tag_close')) clickPrevented(close);
    for (const toggle of canvasElement.querySelectorAll<HTMLButtonElement>('.tree_toggle:not(.tree_toggle_placeholder)')) toggle.click();
    canvasElement.querySelector<HTMLButtonElement>('.alert_close')?.click();
    const areas = [...canvasElement.querySelectorAll<HTMLTextAreaElement>('textarea')];
    await userEvent.clear(areas[0]); await userEvent.type(areas[0], 'changed');
    await userEvent.clear(areas[1]); await userEvent.type(areas[1], '1234567890');
  },
};

export const FormsAndNavigation: Story = {
  render: () => <FormsNavigationHarness />,
  play: async ({ canvasElement, userEvent }) => {
    const date = canvasElement.querySelector<HTMLElement>('#coverage-date')!;
    await userEvent.click(date);
    const calendarToggle = canvasElement.querySelector<HTMLButtonElement>('#coverage-date')!.parentElement!.querySelector<HTMLButtonElement>('.date_picker_btn')!;
    await userEvent.click(calendarToggle);
    await userEvent.click(calendarToggle);
    await userEvent.click(date);
    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('[aria-label="이전 달"]')!);
    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('[aria-label="다음 달"]')!);
    const day = [...canvasElement.querySelectorAll<HTMLButtonElement>('.calendar_day:not(:disabled)')].find((item) => !item.classList.contains('is-selected'));
    if (day) await userEvent.click(day);
    const clearAfterDay = canvasElement.querySelector<HTMLButtonElement>('.date_picker_clear');
    if (clearAfterDay) await userEvent.click(clearAfterDay);
    await userEvent.click(date);
    const anotherDay = [...canvasElement.querySelectorAll<HTMLButtonElement>('.calendar_day:not(:disabled)')].find((item) => !item.classList.contains('is-selected'));
    if (anotherDay) await userEvent.click(anotherDay);
    await userEvent.click(date);
    await userEvent.click(canvasElement.querySelector<HTMLButtonElement>('.calendar_footer .btn')!);
    await userEvent.click(date);
    const footerButtons = canvasElement.querySelectorAll<HTMLButtonElement>('.calendar_footer .btn');
    if (footerButtons[1]) await userEvent.click(footerButtons[1]);
    const finalClear = canvasElement.querySelector<HTMLButtonElement>('.date_picker_clear');
    if (finalClear) await userEvent.click(finalClear);
    const uncontrolledClear = canvasElement.querySelector<HTMLButtonElement>('#coverage-date-uncontrolled')?.parentElement?.querySelector<HTMLButtonElement>('.date_picker_clear');
    if (uncontrolledClear) await userEvent.click(uncontrolledClear);
    canvasElement.querySelector<HTMLButtonElement>('#coverage-date-disabled + .date_picker_btn')?.click();
    keyboard(canvasElement.querySelector<HTMLElement>('.date_picker')!, 'Escape');

    for (const radio of canvasElement.querySelectorAll<HTMLInputElement>('.rate_input:not(:disabled)')) radio.click();
    for (const half of canvasElement.querySelectorAll<HTMLButtonElement>('.rate_star-half:not(:disabled)')) half.click();
    canvasElement.querySelector<HTMLButtonElement>('.rate_clear')?.click();
    for (const step of canvasElement.querySelectorAll<HTMLButtonElement>('.slider_step:not(:disabled)')) await userEvent.click(step);
    const increase = canvasElement.querySelector<HTMLButtonElement>('.slider_step-increase:not(:disabled)');
    if (increase) await userEvent.click(increase);
    const range = canvasElement.querySelector<HTMLInputElement>('.slider_input')!;
    setInputValue(range, '7');

    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
    const image = new File(['image'], 'image.png', { type: 'image/png' });
    const imageTwo = new File(['image-two'], 'image-two.png', { type: 'image/png' });
    const large = new File(['x'.repeat(150)], 'large.txt', { type: 'text/plain' });
    const invalid = new File(['x'], 'bad.pdf', { type: 'application/pdf' });
    const uploadInput = canvasElement.querySelector<HTMLInputElement>('#upload-drag')!;
    for (const selected of [[invalid], [large], [file, image], [file], [image, imageTwo]]) {
      const transfer = new DataTransfer();
      selected.forEach((item) => transfer.items.add(item));
      Object.defineProperty(uploadInput, 'files', { configurable: true, value: transfer.files });
      uploadInput.dispatchEvent(new Event('change', { bubbles: true }));
      await wait();
    }
    const dropzone = canvasElement.querySelector<HTMLElement>('.upload_dropzone')!;
    dropzone.dispatchEvent(new DragEvent('dragenter', { bubbles: true, cancelable: true }));
    dropzone.dispatchEvent(new DragEvent('dragover', { bubbles: true, cancelable: true }));
    dropzone.dispatchEvent(new DragEvent('dragleave', { bubbles: true, cancelable: true, relatedTarget: canvasElement }));
    const dropTransfer = new DataTransfer(); dropTransfer.items.add(file);
    dropzone.dispatchEvent(new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer: dropTransfer }));
    keyboard(dropzone, 'Enter'); keyboard(dropzone, ' '); keyboard(dropzone, 'Escape');
    keyboard(canvasElement.querySelector<HTMLElement>('.upload_card-trigger')!, 'Enter');
    keyboard(canvasElement.querySelector<HTMLElement>('.upload_avatar')!, ' ');
    keyboard(canvasElement.querySelector<HTMLElement>('#upload-disabled')!.parentElement!, 'Enter');
    for (const root of canvasElement.querySelectorAll<HTMLElement>('[data-component="Upload"]')) {
      if (root.querySelector('#upload-drag')) continue;
      for (const remove of root.querySelectorAll<HTMLButtonElement>('.upload_item-action, .upload_card-actions button')) remove.click();
    }
    const dragRemoveButtons = canvasElement.querySelectorAll<HTMLElement>('[data-component="Upload"]:has(#upload-drag) .upload_item-action');
    (dragRemoveButtons[1] ?? dragRemoveButtons[0])?.click();
    const disabledUpload = canvasElement.querySelector<HTMLInputElement>('#upload-disabled');
    if (disabledUpload) disabledUpload.dispatchEvent(new Event('change', { bubbles: true }));
    await userEvent.click([...canvasElement.querySelectorAll<HTMLButtonElement>('button')].find((button) => button.textContent === '업로드 제거')!);

    const menuLinks = [...canvasElement.querySelectorAll<HTMLElement>('.menu > .menu_list > .menu_item > .menu_link')];
    menuLinks.forEach((link) => link.click());
    canvasElement.querySelector<HTMLElement>('.menu_item-submenu .menu_link')?.click();
    const dropdowns = [...canvasElement.querySelectorAll<HTMLElement>('.dropdown')];
    const firstMenu = dropdowns[0].querySelector<HTMLElement>('.dropdown_menu')!;
    for (const key of ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown']) keyboard(firstMenu, key);
    firstMenu.querySelector<HTMLElement>('.menu_link.is-disabled')?.click();
    firstMenu.querySelectorAll<HTMLElement>('.menu_link')[2]?.click();
    keyboard(dropdowns[0].querySelector<HTMLElement>('.dropdown_trigger')!, 'ArrowDown');
    keyboard(firstMenu, 'Tab');
    dropdowns[1].querySelector<HTMLElement>('.dropdown_trigger')?.click();
    dropdowns[1].querySelector<HTMLElement>('.menu_link')?.click();
    dropdowns[2].querySelector<HTMLElement>('.dropdown_trigger')?.click();
    dropdowns[0].querySelector<HTMLElement>('.dropdown_trigger')?.click();
    await wait();
    keyboard(canvasElement.ownerDocument, 'Escape');
    dropdowns[0].querySelector<HTMLElement>('.dropdown_trigger')?.click();
    canvasElement.ownerDocument.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));

    canvasElement.querySelector<HTMLElement>('.navbar_brand')?.click();
    canvasElement.querySelector<HTMLElement>('.navbar_toggle')?.click();
    canvasElement.querySelector<HTMLElement>('.navbar_toggle')?.click();
    for (const item of canvasElement.querySelectorAll<HTMLElement>('.navbar_link')) item.click();
    for (const page of canvasElement.querySelectorAll<HTMLElement>('.pagination button:not(:disabled)')) page.click();
    for (const step of canvasElement.querySelectorAll<HTMLElement>('.steps_navigable .steps_item:not(.is-wait) button, .steps_navigable .steps_item:not(.is-wait) a')) step.click();

    const tabLists = [...canvasElement.querySelectorAll<HTMLElement>('.tabs_list')];
    const scrollList = tabLists.find((list) => list.closest('.tabs_scroll-nav'));
    if (scrollList) {
      Object.defineProperty(scrollList, 'scrollWidth', { configurable: true, value: 900 });
      Object.defineProperty(scrollList, 'clientWidth', { configurable: true, value: 200 });
      Object.defineProperty(scrollList, 'scrollLeft', { configurable: true, writable: true, value: 100 });
      scrollList.scrollBy = ({ left }: any) => { scrollList.scrollLeft += Number(left || 0); scrollList.dispatchEvent(new Event('scroll')); };
    }
    for (const list of tabLists) {
      const tabs = [...list.querySelectorAll<HTMLElement>('[role="tab"]')];
      for (const tabButton of tabs) tabButton.click();
      for (const key of ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End', 'PageDown']) keyboard(tabs[0], key);
      list.dispatchEvent(new Event('scroll'));
    }
    window.dispatchEvent(new Event('resize'));
    await wait(40);
    for (const nav of canvasElement.querySelectorAll<HTMLButtonElement>('.tabs_nav:not(:disabled)')) nav.click();
  },
};

export const Popovers: Story = {
  render: () => <PopoverHarness />,
  play: async ({ canvasElement, userEvent }) => {
    const doc = portalDocument(canvasElement);
    await wait(20);
    try {
      Object.defineProperty(canvasElement.ownerDocument.defaultView, 'frameElement', { configurable: true, value: { getBoundingClientRect: () => ({ top: 10, left: 20, width: 0, height: 0 }) } });
    } catch { /* 테스트 브라우저가 frameElement 재정의를 막으면 기본 좌표 경로를 사용합니다. */ }
    doc.querySelector<HTMLButtonElement>('.popover_close-floating')?.click();
    const triggers = [...canvasElement.querySelectorAll<HTMLElement>('.popover_trigger')];
    triggers[1].dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    triggers[1].dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    triggers[1].dispatchEvent(new MouseEvent('mouseout', { bubbles: true, relatedTarget: doc.body }));
    triggers[1].dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await userEvent.click(triggers[2]);
    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new Event('scroll'));
    keyboard(doc, 'Escape');
    await userEvent.click(triggers[2]);
    doc.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    triggers[3].dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    for (const close of doc.querySelectorAll<HTMLButtonElement>('.popover_close')) clickPrevented(close);
    await wait(120);
  },
};

export const Remainders: Story = {
  render: () => <RemainderHarness />,
  play: async ({ canvasElement, userEvent }) => {
    const doc = canvasElement.ownerDocument;
    const localWindow = { top: null, addEventListener: noop } as any;
    getDrawerPortalRoot(null, null); getDrawerPortalRoot(doc, localWindow);
    getModalPortalRoot(null, null); getModalPortalRoot(doc, localWindow);
    getPopoverPortalRoot(null, null); getPopoverPortalRoot(doc, localWindow);
    getTooltipPortalRoot(null, null); getTooltipPortalRoot(doc, localWindow);
    getSnackbarPortalRoot(null, null); getSnackbarPortalRoot(doc, localWindow);
    const foreignDocument = doc.implementation.createHTMLDocument('portal');
    const base = foreignDocument.createElement('base'); base.href = doc.baseURI; foreignDocument.head.appendChild(base);
    const pagehideCallbacks: Array<() => void> = [];
    const crossWindow = { top: { document: foreignDocument }, addEventListener: (_type: string, callback: () => void) => pagehideCallbacks.push(callback) } as any;
    getDrawerPortalRoot(doc, crossWindow); getModalPortalRoot(doc, crossWindow);
    pagehideCallbacks.forEach((callback) => callback());
    const rect = { top: 1, left: 2, width: 3, height: 4 };
    const element = { ownerDocument: doc, getBoundingClientRect: () => rect } as any;
    topViewportRect(element, { top: { document: doc } } as any);
    topViewportRect(element, { top: { document: {} }, frameElement: { getBoundingClientRect: () => ({ top: 10, left: 20 }) } } as any);
    topViewportRect(element, { top: { document: {} }, frameElement: null } as any);
    viewportRect(element, { top: { document: doc } } as any);
    viewportRect(element, { top: { document: {} }, frameElement: { getBoundingClientRect: () => ({ top: 10, left: 20 }) } } as any);
    viewportRect(element, { top: { document: {} }, frameElement: null } as any);
    const triggerWrap = doc.createElement('span');
    const triggerButton = doc.createElement('button');
    triggerButton.className = 'btn';
    triggerWrap.appendChild(triggerButton);
    resolveTriggerAnchor(null);
    resolveTriggerAnchor(triggerButton);
    resolveTriggerAnchor(triggerWrap);
    resolveTooltipTriggerAnchor(triggerWrap);
    normalizeInitialSlide(0, 0, false);
    updateCoverflowStyles(null, null, false, 4, 1.5);
    const layoutRoot = doc.createElement('div'); const layoutSwiper = doc.createElement('div');
    updateCoverflowStyles(layoutRoot, layoutSwiper, true, 4, 1.5);
    revokeUploadObjectUrls(new Set(['blob:coverage-test']));
    const avatarImage = canvasElement.querySelector<HTMLImageElement>('.avatar_image');
    avatarImage?.dispatchEvent(new Event('error'));
    const wheel = canvasElement.querySelector<HTMLElement>('.calendar_wheel-column')!;
    wheel.querySelector<HTMLButtonElement>('.calendar_wheel-step-prev')?.click();
    wheel.querySelector<HTMLButtonElement>('.calendar_wheel-step-next')?.click();
    for (const item of wheel.querySelectorAll<HTMLButtonElement>('[role="option"]')) item.click();
    await wait(30);
    const toggles = [...canvasElement.querySelectorAll<HTMLButtonElement>('.carousel_toggle')];
    for (const toggle of toggles) { await userEvent.click(toggle); await userEvent.click(toggle); }
    window.dispatchEvent(new Event('resize'));
    await wait(30);
  },
};
