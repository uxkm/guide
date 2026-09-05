import { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@uxkm/react/accordion';
import { Affix } from '@uxkm/react/affix';
import { Alert } from '@uxkm/react/alert';
import { Avatar } from '@uxkm/react/avatar';
import { BackTop } from '@uxkm/react/back-top';
import { Badge } from '@uxkm/react/badge';
import { Breadcrumb, BreadcrumbItem } from '@uxkm/react/breadcrumb';
import { Button } from '@uxkm/react/button';
import { Calendar, CalendarHeader, CalendarMonth, CalendarWeekdays } from '@uxkm/react/calendar';
import { Card } from '@uxkm/react/card';
import { Carousel, CarouselSlide } from '@uxkm/react/carousel';
import { Checkbox } from '@uxkm/react/checkbox';
import { Collapse, CollapsePanel } from '@uxkm/react/collapse';
import { Container } from '@uxkm/react/container';
import { DatePicker } from '@uxkm/react/date-picker';
import { Divider } from '@uxkm/react/divider';
import { Drawer } from '@uxkm/react/drawer';
import { Dropdown } from '@uxkm/react/dropdown';
import { Empty } from '@uxkm/react/empty';
import { Flex } from '@uxkm/react/flex';
import { FormField, FormLayout } from '@uxkm/react/form-layout';
import { Grid } from '@uxkm/react/grid';
import { Icon } from '@uxkm/react/icon';
import { Input } from '@uxkm/react/input';
import { Link } from '@uxkm/react/link';
import { List, ListItem } from '@uxkm/react/list';
import { Menu, MenuItem } from '@uxkm/react/menu';
import { Modal } from '@uxkm/react/modal';
import { Navbar, NavbarItem, NavbarList } from '@uxkm/react/navbar';
import { Pagination } from '@uxkm/react/pagination';
import { Popover } from '@uxkm/react/popover';
import { Progress } from '@uxkm/react/progress';
import { Radio } from '@uxkm/react/radio';
import { Rate } from '@uxkm/react/rate';
import { Select } from '@uxkm/react/select';
import { Skeleton } from '@uxkm/react/skeleton';
import { Slider } from '@uxkm/react/slider';
import { Snackbar } from '@uxkm/react/snackbar';
import { Space } from '@uxkm/react/space';
import { Spin } from '@uxkm/react/spin';
import { Stat } from '@uxkm/react/stat';
import { Steps } from '@uxkm/react/steps';
import { Switch } from '@uxkm/react/switch';
import { Table } from '@uxkm/react/table';
import { TabPanel, Tabs } from '@uxkm/react/tabs';
import { Tag } from '@uxkm/react/tag';
import { Textarea } from '@uxkm/react/textarea';
import { Timeline, TimelineItem } from '@uxkm/react/timeline';
import { Tooltip } from '@uxkm/react/tooltip';
import { Tree, TreeNode } from '@uxkm/react/tree';
import { TypoTitle } from '@uxkm/react/typography';
import { Upload } from '@uxkm/react/upload';
import { initSignup } from '../../../../packages/demo/signup.js';
import '../../../../packages/demo/signup.css';
export default function SignupPage() {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(
    () =>
      initSignup(document.querySelector('.join_demo'), {
        openTerms: () => setModal(true),
        openHelp: () => setDrawer(true),
      }),
    [],
  );
  useEffect(() => {
    document.getElementById('join-page-copy').textContent = [
      '프로필에서 나를 소개해 보세요.',
      '관심 분야를 선택해 콘텐츠를 찾아보세요.',
      '새로운 소식과 혜택을 만나 보세요.',
    ][page - 1];
  }, [page]);
  return (
    <div className="join_demo">
      <a href="#join-main" className="join_skip">
        본문 바로가기
      </a>
      <header className="join_header">
        <Navbar
          brandSrc="/images/brand/uxkm_logo_hand.svg"
          brandAlt="UXKM"
          brandHref="/"
          navLabel="주요 메뉴"
        >
          <NavbarList>
            <NavbarItem label="회원가입" href="#account" active={true} />
            <NavbarItem label="멤버십" href="#benefits" />
            <NavbarItem label="도움말" href="#help" />
          </NavbarList>
        </Navbar>
        <span className="join_framework">React</span>
      </header>
      <div className="join_layout">
        <aside className="join_sidebar">
          <div>
            <p className="join_eyebrow">MY UXKM</p>
            <h2>함께 만드는 경험</h2>
            <p>나만의 프로필로 시작해 보세요.</p>
            <Menu ariaLabel="회원가입 메뉴">
              <MenuItem label="기본 정보" href="#account" />
              <MenuItem label="프로필" href="#profile" />
              <MenuItem label="관심 설정" href="#preferences" />
              <MenuItem label="멤버십 혜택" href="#benefits" />
              <MenuItem label="약관 동의" href="#terms" />
              <MenuItem label="가입 안내" href="#help" />
            </Menu>
            <div className="join_side-note">
              <Badge label="WELCOME" />
              <p>새로운 연결, 더 나은 경험.</p>
              <Link href="#benefits" label="멤버십 혜택 살펴보기 →" />
            </div>
          </div>
        </aside>
        <main id="join-main" tabIndex={-1}>
          <div className="join_hero">
            <Breadcrumb>
              <BreadcrumbItem label="홈" href="/" />
              <BreadcrumbItem label="회원가입" current={true} />
            </Breadcrumb>
            <p className="join_eyebrow">JOIN OUR COMMUNITY</p>
            <Icon name="plus" ariaLabel="새로운 시작" />
            <TypoTitle level={1} label="반가워요, 함께 시작해요." />
            <p className="join_lead">기본 정보를 입력하고 나에게 맞는 멤버십을 완성하세요.</p>
            <Steps
              items={[
                {
                  title: '정보 입력',
                  description: '나를 소개해요',
                  status: 'active',
                },
                {
                  title: '약관 동의',
                  description: '함께할 준비',
                  status: 'wait',
                },
                {
                  title: '가입 완료',
                  description: '새로운 시작',
                  status: 'wait',
                },
              ]}
              current={1}
              ariaLabel="회원가입 단계"
            />
            <Alert
              color="info"
              description="체험용 회원가입입니다. 입력한 정보는 서버에 전송되거나 저장되지 않습니다."
            />
          </div>
          <FormLayout id="join-form">
            <section id="account" className="join_section" tabIndex={-1}>
              <div className="join_section-heading">
                <span className="join_number">01</span>
                <div>
                  <h2>기본 정보를 알려주세요</h2>
                  <p>별표(*)가 있는 항목은 필수입니다.</p>
                </div>
              </div>
              <Grid cols={1} colsMd={2} gap="lg">
                <FormField htmlFor="join-name" label="이름" required={true}>
                  <Input
                    id="join-name"
                    name="join-name"
                    type="text"
                    required={true}
                    block={true}
                    placeholder="이름 입력"
                  />
                </FormField>
                <FormField htmlFor="join-email" label="이메일" required={true}>
                  <Input
                    id="join-email"
                    name="join-email"
                    type="email"
                    required={true}
                    block={true}
                    placeholder="you@example.com"
                  />
                </FormField>
                <FormField htmlFor="join-password" label="비밀번호" required={true}>
                  <Input
                    id="join-password"
                    name="join-password"
                    type="password"
                    required={true}
                    block={true}
                    placeholder="8자 이상 입력하세요"
                  />
                </FormField>
                <FormField htmlFor="join-confirm" label="비밀번호 확인" required={true}>
                  <Input
                    id="join-confirm"
                    name="join-confirm"
                    type="password"
                    required={true}
                    block={true}
                    placeholder="8자 이상 입력하세요"
                  />
                </FormField>
              </Grid>
              <p id="join-password-hint" className="join_hint">
                비밀번호는 8자 이상 입력해 주세요.
              </p>
            </section>
            <section id="profile" className="join_section" tabIndex={-1}>
              <div className="join_section-heading">
                <span className="join_number">02</span>
                <div>
                  <h2>나를 소개해 주세요</h2>
                  <p>선택 정보는 나중에도 수정할 수 있어요.</p>
                </div>
              </div>
              <Flex gap="lg" align="center">
                <Avatar initials="ME" size="lg" color="primary" />
                <div>
                  <h3>프로필 사진</h3>
                  <Upload
                    id="join-photo"
                    name="photo"
                    accept="image/*"
                    buttonLabel="사진 선택"
                    hint="이미지 파일을 선택해 주세요."
                  />
                </div>
              </Flex>
              <Grid cols={1} colsMd={2} gap="lg">
                <FormField htmlFor="join-birthday" label="생년월일">
                  <DatePicker
                    id="join-birthday"
                    name="birthday"
                    ariaLabel="생년월일"
                    placeholder="날짜를 선택하세요"
                  />
                </FormField>
                <FormField htmlFor="join-role" label="하는 일">
                  <Select id="join-role" name="role" placeholder="선택하세요">
                    <option value="designer">디자이너</option>
                    <option value="developer">개발자</option>
                    <option value="planner">기획자</option>
                  </Select>
                </FormField>
              </Grid>
              <FormField htmlFor="join-bio" label="자기소개">
                <Textarea
                  id="join-bio"
                  name="bio"
                  rows={3}
                  maxLength={200}
                  placeholder="관심사나 함께하고 싶은 일을 소개해 주세요."
                />
              </FormField>
            </section>
            <section id="preferences" className="join_section" tabIndex={-1}>
              <div className="join_section-heading">
                <span className="join_number">03</span>
                <div>
                  <h2>나에게 맞게 설정하세요</h2>
                  <p>관심사와 소식을 받는 방법을 선택해 주세요.</p>
                </div>
              </div>
              <fieldset>
                <legend>회원 유형</legend>
                <Space gap="lg" wrap={true}>
                  <Radio
                    id="join-personal"
                    name="memberType"
                    value="personal"
                    label="개인 회원"
                    defaultChecked={true}
                  />
                  <Radio id="join-team" name="memberType" value="team" label="팀 회원" />
                </Space>
              </fieldset>
              <fieldset>
                <legend>관심 분야</legend>
                <Space gap="lg" wrap={true}>
                  <Checkbox
                    id="join-interest-0"
                    name="interests"
                    value="UI 디자인"
                    label="UI 디자인"
                  />
                  <Checkbox
                    id="join-interest-1"
                    name="interests"
                    value="프론트엔드"
                    label="프론트엔드"
                  />
                  <Checkbox id="join-interest-2" name="interests" value="접근성" label="접근성" />
                </Space>
              </fieldset>
              <Divider />
              <Switch id="join-news" name="newsletter" label="새로운 콘텐츠 소식 받기" />
              <Switch id="join-events" name="events" label="이벤트 및 혜택 소식 받기" />
              <div>
                <h3>주간 학습 목표</h3>
                <Slider
                  name="goal"
                  defaultValue={3}
                  min={1}
                  max={7}
                  showValue={true}
                  ariaLabel="주간 학습 목표"
                />
              </div>
              <div>
                <h3>현재 관심도</h3>
                <Rate name="interestLevel" defaultValue={3} ariaLabel="현재 관심도" />
              </div>
            </section>
            <section id="benefits" className="join_section" tabIndex={-1}>
              <div className="join_section-heading">
                <span className="join_number">04</span>
                <div>
                  <h2>가입하면 이런 점이 좋아요</h2>
                  <p>배우고, 공유하고, 함께 성장하세요.</p>
                </div>
              </div>
              <Space gap="sm">
                <Tag label="무료 멤버십" />
                <Badge label="NEW" />
              </Space>
              <Grid cols={1} colsMd={2} gap="lg">
                <Stat title="시작 비용" value="0" suffix="원" card={true} />
                <Stat title="관심 분야" value="3" suffix="가지" card={true} />
              </Grid>
              <Tabs defaultValue="personal" ariaLabel="멤버십 혜택">
                <TabPanel value="personal" label="개인 혜택" active={true}>
                  <List bordered={true}>
                    <ListItem
                      title="나만의 학습 공간"
                      description="관심 있는 콘텐츠를 한곳에서 확인하세요."
                    />
                    <ListItem
                      title="커뮤니티 참여"
                      description="경험을 나누고 새로운 아이디어를 발견하세요."
                    />
                  </List>
                </TabPanel>
                <TabPanel value="team" label="팀 혜택">
                  <p>팀원과 지식을 나누며 함께 성장하는 공간을 만들어 보세요.</p>
                </TabPanel>
              </Tabs>
              <Card title="우리의 이야기">
                <Carousel pagination={true} navigation={true} ariaLabel="멤버십 이야기">
                  <CarouselSlide>
                    <div className="join_slide">
                      <h3>작은 시작이 만드는 변화</h3>
                      <p>오늘의 배움이 내일의 경험이 됩니다.</p>
                    </div>
                  </CarouselSlide>
                  <CarouselSlide>
                    <div className="join_slide">
                      <h3>함께라서 더 즐거운 성장</h3>
                      <p>서로의 경험에서 새로운 가능성을 찾아보세요.</p>
                    </div>
                  </CarouselSlide>
                </Carousel>
              </Card>
              <Table bordered={true}>
                <caption>멤버십 제공 내용</caption>
                <thead>
                  <tr>
                    <th scope="col">제공 내용</th>
                    <th scope="col">개인 회원</th>
                    <th scope="col">팀 회원</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">프로필</th>
                    <td>포함</td>
                    <td>포함</td>
                  </tr>
                  <tr>
                    <th scope="row">콘텐츠 소식</th>
                    <td>선택</td>
                    <td>선택</td>
                  </tr>
                </tbody>
              </Table>
            </section>
            <section id="terms" className="join_section" tabIndex={-1}>
              <div className="join_section-heading">
                <span className="join_number">05</span>
                <div>
                  <h2>함께하기 전 확인해 주세요</h2>
                  <p>필수 약관에 동의하면 가입을 완료할 수 있어요.</p>
                </div>
              </div>
              <Accordion>
                <AccordionItem title="서비스 이용약관" open={true}>
                  <p>
                    커뮤니티에서는 서로 존중하며 콘텐츠를 공유해 주세요. 이 내용은 화면 체험을 위한
                    예시 약관입니다.
                  </p>
                </AccordionItem>
                <AccordionItem title="개인정보 수집 및 이용 안내">
                  <p>
                    실제 가입 서비스에서는 개인정보 수집 목적과 보유 기간을 안내합니다. 이
                    데모에서는 입력 정보를 저장하지 않습니다.
                  </p>
                </AccordionItem>
              </Accordion>
              <Checkbox id="join-terms" name="terms" label="[필수] 서비스 이용약관에 동의합니다" />
              <Checkbox
                id="join-privacy"
                name="privacy"
                label="[필수] 개인정보 수집 및 이용에 동의합니다"
              />
              <div className="join_actions">
                <Button label="약관 자세히 보기" variant="outline" className="join_terms-trigger" />
                <Button label="가입 도움말" variant="ghost" className="join_help-trigger" />
              </div>
              <p id="join-status" role="status">
                입력 내용을 확인한 후 가입을 완료해 주세요.
              </p>
              <Button type="submit" label="동의하고 가입 완료" size="lg" block={true} />
            </section>
          </FormLayout>
          <section id="help" className="join_section" tabIndex={-1}>
            <div className="join_section-heading">
              <span className="join_number">06</span>
              <div>
                <h2>첫 시작을 도와드려요</h2>
                <p>가입 이후의 여정을 미리 확인하세요.</p>
              </div>
            </div>
            <Timeline>
              <TimelineItem
                title="정보 입력"
                description="나만의 프로필을 작성해요."
                active={true}
              />
              <TimelineItem title="약관 확인" description="서비스 이용 안내를 확인해요." />
              <TimelineItem title="멤버십 시작" description="새로운 경험을 함께해요." />
            </Timeline>
            <Collapse>
              <CollapsePanel title="모든 정보를 입력해야 하나요?" open={true}>
                <p>
                  선택 정보는 비워 두어도 가입할 수 있습니다. 프로필에서 언제든 수정할 수 있어요.
                </p>
              </CollapsePanel>
              <CollapsePanel title="실제로 계정이 만들어지나요?">
                <p>이 페이지는 UI 데모로 실제 계정을 만들지 않습니다.</p>
              </CollapsePanel>
            </Collapse>
            <Space gap="lg" wrap={true}>
              <Tooltip
                content="필수 항목과 약관 동의를 확인해 주세요."
                triggerContent="가입 전 확인"
              />
              <Popover title="가입 안내" triggerContent="가입 절차 보기">
                <p>회원 정보 입력과 약관 동의까지 한 페이지에서 진행합니다.</p>
              </Popover>
            </Space>
            <Tree ariaLabel="시작 가이드">
              <TreeNode label="시작 가이드" expanded={true}>
                <TreeNode label="프로필 설정" />
                <TreeNode label="관심 분야 선택" />
              </TreeNode>
            </Tree>
            <div className="join_pagination">
              <h3>콘텐츠 둘러보기</h3>
              <p id="join-page-copy">페이지를 선택하면 안내 콘텐츠가 변경됩니다.</p>
              <Pagination
                current={page}
                total={30}
                pageSize={10}
                ariaLabel="안내 콘텐츠 페이지"
                onChange={setPage}
              />
            </div>
            <Dropdown triggerLabel="빠른 이동">
              <Menu ariaLabel="빠른 이동">
                <MenuItem label="기본 정보로 이동" href="#account" />
                <MenuItem label="약관으로 이동" href="#terms" />
              </Menu>
            </Dropdown>
            <Card title="멤버십 일정 예시">
              <Calendar ariaLabel="멤버십 일정 예시" readonly={true}>
                <CalendarHeader title="2026년 9월" showNav={false} />
                <CalendarWeekdays />
                <CalendarMonth
                  days={[
                    { day: 30, otherMonth: true },
                    { day: 31, otherMonth: true },
                    { day: 1, selected: false },
                    { day: 2, selected: false },
                    { day: 3, selected: false },
                    { day: 4, selected: false },
                    { day: 5, selected: true },
                    { day: 6, selected: false },
                    { day: 7, selected: false },
                    { day: 8, selected: false },
                    { day: 9, selected: false },
                    { day: 10, selected: false },
                    { day: 11, selected: false },
                    { day: 12, selected: false },
                    { day: 13, selected: false },
                    { day: 14, selected: false },
                    { day: 15, selected: false },
                    { day: 16, selected: false },
                    { day: 17, selected: false },
                    { day: 18, selected: false },
                    { day: 19, selected: false },
                    { day: 20, selected: false },
                    { day: 21, selected: false },
                    { day: 22, selected: false },
                    { day: 23, selected: false },
                    { day: 24, selected: false },
                    { day: 25, selected: false },
                    { day: 26, selected: false },
                    { day: 27, selected: false },
                    { day: 28, selected: false },
                    { day: 29, selected: false },
                    { day: 30, selected: false },
                    { day: 1, otherMonth: true },
                    { day: 2, otherMonth: true },
                    { day: 3, otherMonth: true },
                  ]}
                  readonly={true}
                />
              </Calendar>
            </Card>
          </section>
          <section id="states" className="join_section" tabIndex={-1}>
            <div className="join_section-heading">
              <span className="join_number">07</span>
              <div>
                <h2>화면 상태 미리보기</h2>
                <p>서비스에서 만나는 대기·빈 화면·완료 알림의 예시입니다.</p>
              </div>
            </div>
            <Grid cols={1} colsMd={2} gap="lg">
              <Card title="저장한 콘텐츠">
                <Empty description="아직 저장한 콘텐츠가 없어요." />
              </Card>
              <Card title="불러오는 동안">
                <Skeleton paragraph={true} />
                <Spin tip="콘텐츠를 불러오는 중" />
              </Card>
            </Grid>
            <Progress percent={100} showInfo={true} block={true} ariaLabel="완료 상태 예시" />
            <Snackbar message="설정이 반영되었어요. (알림 예시)" motion="none" />
          </section>
        </main>
        <aside className="join_toc">
          <Affix offsetTop={96} interactive={false}>
            <nav aria-label="페이지 목차">
              <p className="join_eyebrow">이 페이지에서</p>
              <a href="#account">01 기본 정보</a>
              <a href="#profile">02 프로필</a>
              <a href="#preferences">03 관심 설정</a>
              <a href="#benefits">04 멤버십 혜택</a>
              <a href="#terms">05 약관 동의</a>
              <a href="#help">06 가입 안내</a>
              <a href="#states">07 상태 미리보기</a>
            </nav>
          </Affix>
        </aside>
      </div>
      <footer className="join_footer">
        <Container>
          <Flex justify="between" wrap={true} gap="lg">
            <div>
              <strong>UXKM</strong>
              <p>좋은 경험을 함께 만듭니다.</p>
            </div>
            <Space gap="lg">
              <Link href="#terms" label="이용약관" />
              <Link href="#help" label="도움말" />
            </Space>
          </Flex>
        </Container>
      </footer>
      <BackTop label="TOP" color="primary" visibilityHeight={240} className="join_backtop" />
      <Modal
        id="join-terms-modal"
        title="서비스 이용약관"
        open={modal}
        onClose={() => setModal(false)}
      >
        <p>
          서로를 존중하는 커뮤니티를 함께 만들어 주세요. 본 약관은 회원가입 UI 체험을 위한
          예시입니다.
        </p>
      </Modal>
      <Drawer
        id="join-help-drawer"
        title="회원가입 도움말"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <p>필수 기본 정보와 약관 동의를 확인하세요. 선택 항목은 비워 두어도 됩니다.</p>
      </Drawer>
    </div>
  );
}
