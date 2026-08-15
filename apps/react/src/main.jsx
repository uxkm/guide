import '/styles/uxkm.css';
import { initRipple } from '../../../packages/styles/src/ripple.js';
import { initClickableCard } from '../../../packages/styles/src/clickable-card.js';

initRipple();
initClickableCard();

export default function main() {
  return <section>Main</section>;
}
