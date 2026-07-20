import { prettyPrintHtml } from '@/utils/format-demo-html';
import { dedentBlock } from '@/utils/format-slot-component-code';

const SCRIPT_SETUP_RE = /^<script\s+setup>\s*\n([\s\S]*?)\n<\/script>\s*/;
const TEMPLATE_RE = /^<template>\s*\n?([\s\S]*?)\n?<\/template>\s*$/;

function formatScriptSetup(body) {
  return body
    .replace(/\r\n/g, '\n')
    .trim()
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n');
}

function formatTemplateBlock(body) {
  const dedented = dedentBlock(body.replace(/\r\n/g, '\n'));
  if (!dedented) return '';

  return prettyPrintHtml(dedented);
}

/**
 * Vue SFC 문자열(<script setup> + <template>) 들여쓰기를 정렬합니다.
 */
export function formatVueSourceCode(source) {
  if (!source?.trim()) return source ?? '';

  const normalized = source.replace(/\r\n/g, '\n').trim();
  const scriptMatch = normalized.match(SCRIPT_SETUP_RE);
  const remainder = scriptMatch ? normalized.slice(scriptMatch[0].length).trim() : normalized;
  const templateMatch = remainder.match(TEMPLATE_RE);

  const parts = [];

  if (scriptMatch) {
    parts.push('<script setup>');
    parts.push(formatScriptSetup(scriptMatch[1]));
    parts.push('</script>');
    parts.push('');
  }

  if (templateMatch) {
    parts.push('<template>');
    parts.push(formatTemplateBlock(templateMatch[1]));
    parts.push('</template>');
  } else if (remainder) {
    parts.push(formatTemplateBlock(remainder));
  }

  return parts.join('\n');
}
