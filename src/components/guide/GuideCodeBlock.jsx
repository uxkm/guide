import TypoText from '@/components/TypoText.jsx';

export default function GuideCodeBlock({ children }) {
  return (
    <div className="demo_section-preview demo_section-preview-start demo_section-preview-code">
      <TypoText variant="pre">
        <code>{children}</code>
      </TypoText>
    </div>
  );
}
