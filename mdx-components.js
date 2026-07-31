function MdxCodeBlock({ children }) {
  return (
    <div className="demo_section-preview demo_section-preview-start demo_section-preview-code">
      <pre className="typo_pre">{children}</pre>
    </div>
  );
}

export function useMDXComponents(components) {
  return {
    pre: MdxCodeBlock,
    ...components,
  };
}
