import type { FrameworkExample } from './FrameworkCode';
import { badgeFrameworkExamples as baseExamples } from './dataDisplayFrameworkExamples';

import badgeHtmlComponent from '../../html/src/components/data-display/Badge/Badge.html?raw';
import badgeGulpComponent from '../../gulp/src/components/data-display/Badge/badge.njk?raw';
import badgeReactComponent from '../../react/src/components/data-display/Badge/Badge.jsx?raw';
import badgeVueComponent from '../../vue/src/components/data-display/Badge/Badge.vue?raw';
import badgeWrapVueComponent from '../../vue/src/components/data-display/Badge/BadgeWrap.vue?raw';

const badgeVueComponents = `${badgeVueComponent}\n\n<!-- BadgeWrap.vue -->\n${badgeWrapVueComponent}`;

export const badgeComponentExamples: FrameworkExample[] = [
  { id: 'html', label: 'HTML', fileName: 'apps/html/src/components/data-display/Badge/Badge.html', code: badgeHtmlComponent },
  { id: 'gulp', label: 'Gulp', fileName: 'apps/gulp/src/components/data-display/Badge/badge.njk', code: badgeGulpComponent },
  { id: 'vue', label: 'Vue', fileName: 'apps/vue/src/components/data-display/Badge/Badge.vue · BadgeWrap.vue', code: badgeVueComponents },
  { id: 'nuxt', label: 'Nuxt', fileName: '@uxkm/vue/badge → Badge.vue · BadgeWrap.vue', code: badgeVueComponents },
  { id: 'react', label: 'React', fileName: 'apps/react/src/components/data-display/Badge/Badge.jsx', code: badgeReactComponent },
  { id: 'next', label: 'Next', fileName: '@uxkm/react/badge → Badge.jsx', code: badgeReactComponent }
];

const webSquareExamples: Record<keyof typeof baseExamples, string> = {
  basic: `<w2:group id="badgeBasicExample" class="icon_group">
  <w2:textbox id="badgeDefault" tagname="span" class="badge color_default" label="Default"></w2:textbox>
  <w2:textbox id="badgePrimary" tagname="span" class="badge color_primary" label="Primary"></w2:textbox>
  <w2:textbox id="badgeSuccess" tagname="span" class="badge color_success" label="Success"></w2:textbox>
  <w2:textbox id="badgeWarning" tagname="span" class="badge color_warning" label="Warning"></w2:textbox>
  <w2:textbox id="badgeDanger" tagname="span" class="badge color_danger" label="Danger"></w2:textbox>
</w2:group>`,
  sizes: `<w2:group id="badgeSizesExample" class="icon_group">
  <w2:textbox id="badgeSmall" tagname="span" class="badge badge_sm color_primary" label="Small"></w2:textbox>
  <w2:textbox id="badgeMedium" tagname="span" class="badge color_primary" label="Medium"></w2:textbox>
  <w2:textbox id="badgeLarge" tagname="span" class="badge badge_lg color_primary" label="Large"></w2:textbox>
</w2:group>`,
  dot: `<w2:group id="badgeDotExample" class="icon_group">
  <w2:textbox id="badgeActive" tagname="span" class="badge badge_dot color_success" label="Active"></w2:textbox>
  <w2:textbox id="badgeAway" tagname="span" class="badge badge_dot color_warning" label="Away"></w2:textbox>
  <w2:textbox id="badgeOffline" tagname="span" class="badge badge_dot color_danger" label="Offline"></w2:textbox>
</w2:group>`,
  count: `<w2:group id="badgeCountExample" class="icon_group">
  <w2:textbox id="badgeCount3" tagname="span" class="badge badge_count color_danger" label="3" aria-label="알림 3건"></w2:textbox>
  <w2:textbox id="badgeCount12" tagname="span" class="badge badge_count color_primary" label="12" aria-label="알림 12건"></w2:textbox>
  <w2:textbox id="badgeCount99" tagname="span" class="badge badge_count color_success" label="99+" aria-label="알림 99건 이상"></w2:textbox>
</w2:group>`,
  overlay: `<w2:group id="badgeOverlayExample" class="icon_group">
  <w2:group id="badgeNotificationWrap" class="badge_wrap">
    <xf:trigger id="badgeNotificationButton" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.notification_onclick">
      <xf:label><![CDATA[알림]]></xf:label>
    </xf:trigger>
    <w2:textbox id="badgeNotificationCount" tagname="span" class="badge badge_count color_danger" label="5" aria-label="읽지 않은 알림 5건"></w2:textbox>
  </w2:group>
  <w2:group id="badgeAvatarWrap" class="badge_wrap">
    <w2:textbox id="badgeAvatar" tagname="span" class="avatar color_primary" label="홍" aria-hidden="true"></w2:textbox>
    <w2:group id="badgeOnlineStatus" class="badge_dot-only color_success" role="status" aria-label="온라인"></w2:group>
  </w2:group>
</w2:group>`
};

export const badgeFrameworkExamples = Object.fromEntries(
  Object.entries(baseExamples).map(([key, examples]) => [
    key,
    [
      ...examples,
      {
        id: 'websquare',
        label: 'WebSquare',
        fileName: `Badge.xml · ${key}`,
        code: webSquareExamples[key as keyof typeof webSquareExamples]
      }
    ]
  ])
) as typeof baseExamples;
