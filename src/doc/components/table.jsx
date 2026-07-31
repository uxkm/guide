'use client';

export const docMeta = {
  title: 'Table | UXKM Guide',
  activeNav: 'table',
  pageTitle: 'Table',
};

import Badge from '@/components/Badge.jsx';
import ApiSection from '@/components/guide/ApiSection.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import Table from '@/components/Table.jsx';
import {
  memberTableColumns,
  productTableColumns,
  stickyDeptMonthColumns,
  stickyMonthColumns,
  tableClassColumns,
  tableClasses,
  tablePropColumns,
  tableProps,
  tableSlotColumns,
  tableSlots,
  tableTokenColumns,
  tableTokens,
} from '@/doc/data/table-api';

const basicCode = `import Badge from '@/components/Badge.jsx';
import Table from '@/components/Table.jsx';
import { memberTableColumns } from '@/data/table-demo';

export function BasicExample() {
  return (
    <Table columns={memberTableColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">역할</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const stripedCode = `import Table from '@/components/Table.jsx';
import { productTableColumns } from '@/data/table-demo';

export function StripedExample() {
  return (
    <Table striped columns={productTableColumns}>
      <thead>
        <tr>
          <th scope="col">제품</th>
          <th scope="col">가격</th>
          <th scope="col">재고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>노트북</td>
          <td>1,200,000원</td>
          <td>24</td>
        </tr>
        <tr>
          <td>키보드</td>
          <td>89,000원</td>
          <td>156</td>
        </tr>
        <tr>
          <td>마우스</td>
          <td>45,000원</td>
          <td>89</td>
        </tr>
        <tr>
          <td>모니터</td>
          <td>350,000원</td>
          <td>12</td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const borderedCode = `import Table from '@/components/Table.jsx';

export function BorderedExample() {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">항목</th>
          <th scope="col">수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>사과</td>
          <td>10</td>
        </tr>
        <tr>
          <td>002</td>
          <td>바나나</td>
          <td>25</td>
        </tr>
        <tr>
          <td>003</td>
          <td>오렌지</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const compactCode = `import Table from '@/components/Table.jsx';
import { productTableColumns } from '@/data/table-demo';

export function CompactExample() {
  return (
    <Table compact columns={productTableColumns}>
      <thead>
        <tr>
          <th scope="col">제품</th>
          <th scope="col">가격</th>
          <th scope="col">재고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>노트북</td>
          <td>1,200,000원</td>
          <td>24</td>
        </tr>
        <tr>
          <td>키보드</td>
          <td>89,000원</td>
          <td>156</td>
        </tr>
        <tr>
          <td>마우스</td>
          <td>45,000원</td>
          <td>89</td>
        </tr>
        <tr>
          <td>모니터</td>
          <td>350,000원</td>
          <td>12</td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const hoverCode = `import Badge from '@/components/Badge.jsx';
import Table from '@/components/Table.jsx';
import { memberTableColumns } from '@/data/table-demo';

export function HoverExample() {
  return (
    <Table hover columns={memberTableColumns}>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">역할</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const variantCode = `import Table from '@/components/Table.jsx';

export function VariantExample() {
  return (
    <Table bordered compact hover>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">항목</th>
          <th scope="col">수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>사과</td>
          <td>10</td>
        </tr>
        <tr>
          <td>002</td>
          <td>바나나</td>
          <td>25</td>
        </tr>
        <tr>
          <td>003</td>
          <td>오렌지</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const stickyTopCode = `import Badge from '@/components/Badge.jsx';
import Table from '@/components/Table.jsx';

export function StickyTopExample() {
  return (
    <Table scroll scrollMaxHeight="14rem" stickyTop bordered compact>
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">직급</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>시니어</td>
          <td>
            <Badge dot color="warning" label="Away" />
          </td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>프론트엔드</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>백엔드</td>
          <td>시니어</td>
          <td>
            <Badge dot color="danger" label="Busy" />
          </td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>인프라</td>
          <td>리드</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>디자인</td>
          <td>주니어</td>
          <td>
            <Badge dot color="success" label="Active" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const stickyLeftCode = `import Table from '@/components/Table.jsx';
import { stickyMonthColumns } from '@/data/table-demo';

export function StickyLeftExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const stickyLeftColsCode = `import Table from '@/components/Table.jsx';
import { stickyDeptMonthColumns } from '@/data/table-demo';

export function StickyLeftColsExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="none"
      stickyLeft
      stickyCols={2}
      stickyLeftOffsets={{ 2: '7rem' }}
      bordered
      compact
      columns={stickyDeptMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">부서</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자인</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>QA</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
        </tr>
      </tbody>
    </Table>
  );
}`;

const stickyBothCode = `import Table from '@/components/Table.jsx';
import { stickyMonthColumns } from '@/data/table-demo';

export function StickyBothExample() {
  return (
    <Table
      scroll
      scrollMaxHeight="14rem"
      stickyTop
      stickyLeft
      stickyCols={1}
      bordered
      compact
      columns={stickyMonthColumns}
    >
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">1월</th>
          <th scope="col">2월</th>
          <th scope="col">3월</th>
          <th scope="col">4월</th>
          <th scope="col">5월</th>
          <th scope="col">6월</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>120</td>
          <td>132</td>
          <td>101</td>
          <td>134</td>
          <td>90</td>
          <td>230</td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>220</td>
          <td>182</td>
          <td>191</td>
          <td>234</td>
          <td>290</td>
          <td>330</td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>150</td>
          <td>232</td>
          <td>201</td>
          <td>154</td>
          <td>190</td>
          <td>330</td>
        </tr>
        <tr>
          <td>박민수</td>
          <td>320</td>
          <td>132</td>
          <td>151</td>
          <td>134</td>
          <td>110</td>
          <td>130</td>
        </tr>
        <tr>
          <td>최지우</td>
          <td>180</td>
          <td>162</td>
          <td>171</td>
          <td>144</td>
          <td>210</td>
          <td>250</td>
        </tr>
        <tr>
          <td>정수연</td>
          <td>240</td>
          <td>212</td>
          <td>181</td>
          <td>194</td>
          <td>260</td>
          <td>280</td>
        </tr>
        <tr>
          <td>한도윤</td>
          <td>110</td>
          <td>142</td>
          <td>121</td>
          <td>164</td>
          <td>170</td>
          <td>200</td>
        </tr>
        <tr>
          <td>오세린</td>
          <td>200</td>
          <td>192</td>
          <td>211</td>
          <td>184</td>
          <td>230</td>
          <td>310</td>
        </tr>
      </tbody>
    </Table>
  );
}`;

export default function TableDoc() {
  return (
    <>
      <div className="page_intro">
        <h1>Table</h1>
        <p className="lead">데이터를 행·열 구조로 표시하는 테이블 컴포넌트입니다.</p>
      </div>

      <DemoSection
        headingId="basic-heading"
        title="기본"
        description="table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다."
        code={basicCode}
      >
        <Table columns={memberTableColumns}>
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">역할</th>
              <th scope="col">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>홍길동</td>
              <td>프론트엔드</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>김철수</td>
              <td>백엔드</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>이영희</td>
              <td>디자이너</td>
              <td>
                <Badge dot color="warning" label="Away" />
              </td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="striped-heading"
        title="줄무늬"
        description="striped로 짝수 행에 배경색을 적용합니다."
        code={stripedCode}
      >
        <Table striped columns={productTableColumns}>
          <thead>
            <tr>
              <th scope="col">제품</th>
              <th scope="col">가격</th>
              <th scope="col">재고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>노트북</td>
              <td>1,200,000원</td>
              <td>24</td>
            </tr>
            <tr>
              <td>키보드</td>
              <td>89,000원</td>
              <td>156</td>
            </tr>
            <tr>
              <td>마우스</td>
              <td>45,000원</td>
              <td>89</td>
            </tr>
            <tr>
              <td>모니터</td>
              <td>350,000원</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="bordered-heading"
        title="테두리"
        description="bordered로 모든 셀에 테두리를 적용합니다."
        code={borderedCode}
      >
        <Table bordered>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">항목</th>
              <th scope="col">수량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>사과</td>
              <td>10</td>
            </tr>
            <tr>
              <td>002</td>
              <td>바나나</td>
              <td>25</td>
            </tr>
            <tr>
              <td>003</td>
              <td>오렌지</td>
              <td>8</td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="compact-heading"
        title="컴팩트"
        description="compact로 셀 패딩을 줄여 밀도를 높입니다."
        code={compactCode}
      >
        <Table compact columns={productTableColumns}>
          <thead>
            <tr>
              <th scope="col">제품</th>
              <th scope="col">가격</th>
              <th scope="col">재고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>노트북</td>
              <td>1,200,000원</td>
              <td>24</td>
            </tr>
            <tr>
              <td>키보드</td>
              <td>89,000원</td>
              <td>156</td>
            </tr>
            <tr>
              <td>마우스</td>
              <td>45,000원</td>
              <td>89</td>
            </tr>
            <tr>
              <td>모니터</td>
              <td>350,000원</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="hover-heading"
        title="호버"
        description="hover로 행에 마우스를 올리면 배경이 강조됩니다."
        code={hoverCode}
      >
        <Table hover columns={memberTableColumns}>
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">역할</th>
              <th scope="col">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>홍길동</td>
              <td>프론트엔드</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>김철수</td>
              <td>백엔드</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>이영희</td>
              <td>디자이너</td>
              <td>
                <Badge dot color="warning" label="Away" />
              </td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="variant-heading"
        title="조합"
        description="bordered · compact · hover를 함께 조합할 수 있습니다."
        code={variantCode}
      >
        <Table bordered compact hover>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">항목</th>
              <th scope="col">수량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>사과</td>
              <td>10</td>
            </tr>
            <tr>
              <td>002</td>
              <td>바나나</td>
              <td>25</td>
            </tr>
            <tr>
              <td>003</td>
              <td>오렌지</td>
              <td>8</td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="sticky-top-heading"
        title="상단 고정"
        description="scroll + stickyTop으로 헤더를 상단에 고정합니다. scrollMaxHeight로 스크롤 영역 높이를 조절합니다."
        code={stickyTopCode}
      >
        <Table scroll scrollMaxHeight="14rem" stickyTop bordered compact>
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">부서</th>
              <th scope="col">직급</th>
              <th scope="col">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>홍길동</td>
              <td>프론트엔드</td>
              <td>시니어</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>김철수</td>
              <td>백엔드</td>
              <td>리드</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>이영희</td>
              <td>디자인</td>
              <td>시니어</td>
              <td>
                <Badge dot color="warning" label="Away" />
              </td>
            </tr>
            <tr>
              <td>박민수</td>
              <td>QA</td>
              <td>주니어</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>최지우</td>
              <td>프론트엔드</td>
              <td>주니어</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>정수연</td>
              <td>백엔드</td>
              <td>시니어</td>
              <td>
                <Badge dot color="danger" label="Busy" />
              </td>
            </tr>
            <tr>
              <td>한도윤</td>
              <td>인프라</td>
              <td>리드</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
            <tr>
              <td>오세린</td>
              <td>디자인</td>
              <td>주니어</td>
              <td>
                <Badge dot color="success" label="Active" />
              </td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="sticky-left-heading"
        title="좌측 고정"
        description="stickyLeft + stickyCols로 첫 열을 좌측에 고정합니다. 가로로 스크롤해 보세요."
        code={stickyLeftCode}
      >
        <Table
          scroll
          scrollMaxHeight="none"
          stickyLeft
          stickyCols={1}
          bordered
          compact
          columns={stickyMonthColumns}
        >
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">1월</th>
              <th scope="col">2월</th>
              <th scope="col">3월</th>
              <th scope="col">4월</th>
              <th scope="col">5월</th>
              <th scope="col">6월</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>홍길동</td>
              <td>120</td>
              <td>132</td>
              <td>101</td>
              <td>134</td>
              <td>90</td>
              <td>230</td>
            </tr>
            <tr>
              <td>김철수</td>
              <td>220</td>
              <td>182</td>
              <td>191</td>
              <td>234</td>
              <td>290</td>
              <td>330</td>
            </tr>
            <tr>
              <td>이영희</td>
              <td>150</td>
              <td>232</td>
              <td>201</td>
              <td>154</td>
              <td>190</td>
              <td>330</td>
            </tr>
            <tr>
              <td>박민수</td>
              <td>320</td>
              <td>132</td>
              <td>151</td>
              <td>134</td>
              <td>110</td>
              <td>130</td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="sticky-left-cols-heading"
        title="좌측 고정 · 열 개수"
        description="stickyCols로 고정할 열 개수를 지정합니다. 2열 이상은 stickyLeftOffsets에 이전 열 너비 합을 넣습니다."
        code={stickyLeftColsCode}
      >
        <Table
          scroll
          scrollMaxHeight="none"
          stickyLeft
          stickyCols={2}
          stickyLeftOffsets={{ 2: '7rem' }}
          bordered
          compact
          columns={stickyDeptMonthColumns}
        >
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">부서</th>
              <th scope="col">1월</th>
              <th scope="col">2월</th>
              <th scope="col">3월</th>
              <th scope="col">4월</th>
              <th scope="col">5월</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>홍길동</td>
              <td>프론트</td>
              <td>120</td>
              <td>132</td>
              <td>101</td>
              <td>134</td>
              <td>90</td>
            </tr>
            <tr>
              <td>김철수</td>
              <td>백엔드</td>
              <td>220</td>
              <td>182</td>
              <td>191</td>
              <td>234</td>
              <td>290</td>
            </tr>
            <tr>
              <td>이영희</td>
              <td>디자인</td>
              <td>150</td>
              <td>232</td>
              <td>201</td>
              <td>154</td>
              <td>190</td>
            </tr>
            <tr>
              <td>박민수</td>
              <td>QA</td>
              <td>320</td>
              <td>132</td>
              <td>151</td>
              <td>134</td>
              <td>110</td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <DemoSection
        headingId="sticky-both-heading"
        title="상단 · 좌측 고정"
        description="stickyTop과 stickyLeft를 함께 쓰면 헤더와 좌측 열이 동시에 고정됩니다."
        code={stickyBothCode}
      >
        <Table
          scroll
          scrollMaxHeight="14rem"
          stickyTop
          stickyLeft
          stickyCols={1}
          bordered
          compact
          columns={stickyMonthColumns}
        >
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">1월</th>
              <th scope="col">2월</th>
              <th scope="col">3월</th>
              <th scope="col">4월</th>
              <th scope="col">5월</th>
              <th scope="col">6월</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>홍길동</td>
              <td>120</td>
              <td>132</td>
              <td>101</td>
              <td>134</td>
              <td>90</td>
              <td>230</td>
            </tr>
            <tr>
              <td>김철수</td>
              <td>220</td>
              <td>182</td>
              <td>191</td>
              <td>234</td>
              <td>290</td>
              <td>330</td>
            </tr>
            <tr>
              <td>이영희</td>
              <td>150</td>
              <td>232</td>
              <td>201</td>
              <td>154</td>
              <td>190</td>
              <td>330</td>
            </tr>
            <tr>
              <td>박민수</td>
              <td>320</td>
              <td>132</td>
              <td>151</td>
              <td>134</td>
              <td>110</td>
              <td>130</td>
            </tr>
            <tr>
              <td>최지우</td>
              <td>180</td>
              <td>162</td>
              <td>171</td>
              <td>144</td>
              <td>210</td>
              <td>250</td>
            </tr>
            <tr>
              <td>정수연</td>
              <td>240</td>
              <td>212</td>
              <td>181</td>
              <td>194</td>
              <td>260</td>
              <td>280</td>
            </tr>
            <tr>
              <td>한도윤</td>
              <td>110</td>
              <td>142</td>
              <td>121</td>
              <td>164</td>
              <td>170</td>
              <td>200</td>
            </tr>
            <tr>
              <td>오세린</td>
              <td>200</td>
              <td>192</td>
              <td>211</td>
              <td>184</td>
              <td>230</td>
              <td>310</td>
            </tr>
          </tbody>
        </Table>
      </DemoSection>

      <ApiSection headingId="api-props-heading" title="API · Props">
        <ApiTable columns={tablePropColumns} rows={tableProps} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="api-children-heading" title="API · Children">
        <ApiTable columns={tableSlotColumns} rows={tableSlots} codeColumn="name" />
      </ApiSection>

      <ApiSection
        headingId="api-classes-heading"
        title="클래스 · 속성"
        description="React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
      >
        <ApiTable columns={tableClassColumns} rows={tableClasses} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="tokens-heading" title="디자인 토큰">
        <ApiTable columns={tableTokenColumns} rows={tableTokens} codeColumn="name" />
      </ApiSection>
    </>
  );
}
