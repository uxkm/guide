---
id: gulp-nunjucks
group: 프레임워크
parent: framework-gulp
path: guides/frameworks/gulp/nunjucks/
label: HTML 편집 (Gulp NJK)
title: Nunjucks 템플릿 문법
eyebrow: Gulp · Nunjucks
lead: 출력과 제어문부터 layout, include, macro를 이용한 UXKM 재사용 구조까지 정리합니다.
order: 18
---

## 출력과 제어문

`{{ }}`는 값을 출력하고 `{% %}`는 조건과 반복 같은 제어문을 실행합니다. `{# #}`는 결과 HTML에 남지 않는 주석입니다.

```nunjucks
{% set pageTitle = title or 'UXKM Guide' %}
<h1>{{ pageTitle | escape }}</h1>

{% if loading %}
  <p role="status">불러오는 중입니다.</p>
{% elif error %}
  <p role="alert">오류가 발생했습니다.</p>
{% else %}
  <ul>
  {% for item in items %}
    <li>{{ loop.index }}. {{ item.label | escape }}</li>
  {% else %}
    <li>항목이 없습니다.</li>
  {% endfor %}
  </ul>
{% endif %}
```

## 상속과 include

```nunjucks
{# templates/layouts/default.njk #}
<!doctype html>
<html lang="ko">
  <body>{% block content %}{% endblock %}</body>
</html>
```

```nunjucks
{# pages/index.njk #}
{% extends "templates/layouts/default.njk" %}
{% set title = "UXKM Gulp" %}

{% block content %}
  {% include "templates/partials/header.njk" %}
  <main><h1>{{ title }}</h1></main>
{% endblock %}
```

공통 골격은 `extends`와 `block`, 여러 페이지에서 반복되는 작은 조각은 `include`로 분리합니다.

## 컴포넌트 macro

```nunjucks
{% macro button(label, variant='filled', disabled=false) %}
<button
  class="btn btn_{{ variant }} color_primary"
  type="button"
  {% if disabled %}disabled{% endif %}
>
  <span class="btn_label">{{ label | escape }}</span>
</button>
{% endmacro %}
```

```nunjucks
{% from "components/button.njk" import button %}
{{ button('저장') }}
{{ button('삭제', variant='outline', disabled=true) }}
```

외부 입력은 `escape` 처리하고 신뢰할 수 없는 값에 `safe`를 사용하지 않습니다. Nunjucks는 사용자 작성 template을 안전하게 실행하는 sandbox가 아니므로 template 소스 자체를 사용자 입력으로 받지 않습니다.

## 문서 안내

- [Nunjucks 시작하기](https://mozilla.github.io/nunjucks/getting-started.html)
- [UXKM Gulp 가이드](https://uxkm.io/buildSystem/gulp/01-gulp_start/01-intro)
