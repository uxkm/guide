---
id: remix-loaders-actions
group: 프레임워크
parent: framework-remix
path: guides/frameworks/remix/loaders-actions/
label: Loader와 Action
title: Remix Loader와 Action
eyebrow: Remix · Data
lead: loader로 route data를 읽고 action으로 form mutation을 처리하며 폼 UI와 연결합니다.
order: 104
---

## Loader

route module의 `loader`는 server에서 실행되어 UI에 필요한 data를 반환합니다.

```jsx
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Table from '@uxkm/react/table';

export async function loader() {
  return json({
    rows: [{ id: 1, label: '항목 1' }],
  });
}

export default function TablePage() {
  const { rows } = useLoaderData();

  return <Table rows={rows} />;
}
```

loader는 component가 필요로 하는 초기 data shape를 맞춥니다. presentation state는 client `useState`로 유지합니다.

## Action과 Form

mutation은 `action`과 Remix `<Form>`으로 처리합니다.

```jsx
import { Form, useActionData } from '@remix-run/react';
import Button from '@uxkm/react/button';
import Input from '@uxkm/react/input';

export async function action({ request }) {
  const formData = await request.formData();
  const email = String(formData.get('email') ?? '');

  if (!email) {
    return { ok: false, error: '이메일을 입력하세요.' };
  }

  return { ok: true };
}

export default function EmailPage() {
  const actionData = useActionData();

  return (
    <Form method="post">
      <label htmlFor="email">이메일</label>
      <Input id="email" name="email" type="email" error={Boolean(actionData?.error)} />
      {actionData?.error && <p role="alert">{actionData.error}</p>}
      <Button type="submit">저장</Button>
    </Form>
  );
}
```

JavaScript가 없어도 form이 동작하도록 native `<Form method="post">`를 우선 사용합니다.

## 오류 처리

loader·action 오류는 route `ErrorBoundary`와 `CatchBoundary`로 처리합니다. Alert, Empty, Modal은 사용자에게 보여줄 최종 UI로 사용하고, 서버 오류 원문은 노출하지 않습니다.

## 공식 문서

- [Remix Loader](https://remix.run/docs/en/main/route/loader)
- [Remix Action](https://remix.run/docs/en/main/route/action)
- [Remix Form](https://remix.run/docs/en/main/components/form)
