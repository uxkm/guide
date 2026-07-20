export const OVERLAY_OFFSET_SIZES = ['none', 'sm', 'md', 'lg'];

export const overlayOffsetProp = {
  type: String,
  validator: (value) => value === undefined || OVERLAY_OFFSET_SIZES.includes(value),
};

/** @returns {string[]} */
export function overlayOffsetClasses(prefix, props) {
  const classes = [];

  if (props.offset !== 'md') {
    classes.push(`${prefix}_offset-${props.offset}`);
  }

  const sides = [
    ['top', props.offsetTop],
    ['right', props.offsetRight],
    ['bottom', props.offsetBottom],
    ['left', props.offsetLeft],
  ];

  for (const [side, value] of sides) {
    if (value) {
      classes.push(`${prefix}_offset-${side}-${value}`);
    }
  }

  return classes;
}
