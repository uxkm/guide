import type { FrameworkExample } from '../FrameworkCode';

type FrameworkPair = {
  mergedId: string;
  mergedLabel: string;
  primary: string;
  secondary: string;
};

const FRAMEWORK_PAIRS: FrameworkPair[] = [
  { primary: 'vue', secondary: 'nuxt', mergedId: 'vue-nuxt', mergedLabel: 'Vue/Nuxt' },
  { primary: 'react', secondary: 'next', mergedId: 'react-next', mergedLabel: 'React/Next' },
];

function mergeFileName(
  primary: FrameworkExample,
  secondary: FrameworkExample,
  mergedLabel: string,
) {
  if (primary.fileName === secondary.fileName) return primary.fileName;
  return `${primary.fileName} · ${mergedLabel}`;
}

function mergePair(examples: FrameworkExample[], pair: FrameworkPair): FrameworkExample[] {
  const primary = examples.find((example) => example.id === pair.primary);
  const secondary = examples.find((example) => example.id === pair.secondary);

  if (!primary || !secondary || primary.code !== secondary.code) return examples;

  return examples
    .filter((example) => example.id !== pair.secondary)
    .map((example) =>
      example.id === pair.primary
        ? {
            ...example,
            id: pair.mergedId,
            label: pair.mergedLabel,
            fileName: mergeFileName(primary, secondary, pair.mergedLabel),
          }
        : example,
    );
}

/** Vue·Nuxt, React·Next 코드가 같을 때 탭을 하나로 합칩니다. */
export function mergeMatchingFrameworkExamples(examples: FrameworkExample[]): FrameworkExample[] {
  return FRAMEWORK_PAIRS.reduce((current, pair) => mergePair(current, pair), examples);
}
