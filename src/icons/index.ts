/** Exact SVG geometry exported from Figma Icons (67:2168). Local, no runtime downloads. */
import asset0 from './assets/x.svg?url';
import asset1 from './assets/wallet-cards.svg?url';
import asset2 from './assets/user-round.svg?url';
import asset3 from './assets/timer.svg?url';
import asset4 from './assets/sparkles.svg?url';
import asset5 from './assets/smartphone.svg?url';
import asset6 from './assets/sliders-horizontal.svg?url';
import asset7 from './assets/shield-check.svg?url';
import asset8 from './assets/share-2.svg?url';
import asset9 from './assets/search.svg?url';
import asset10 from './assets/save.svg?url';
import asset11 from './assets/refresh-cw.svg?url';
import asset12 from './assets/receipt-text.svg?url';
import asset13 from './assets/plus.svg?url';
import asset14 from './assets/plane.svg?url';
import asset15 from './assets/phone.svg?url';
import asset16 from './assets/menu.svg?url';
import asset17 from './assets/mail.svg?url';
import asset18 from './assets/lock-keyhole.svg?url';
import asset19 from './assets/house.svg?url';
import asset20 from './assets/heart.svg?url';
import asset21 from './assets/graduation-cap.svg?url';
import asset22 from './assets/globe.svg?url';
import asset23 from './assets/file-text.svg?url';
import asset24 from './assets/external-link.svg?url';
import asset25 from './assets/credit-card.svg?url';
import asset26 from './assets/clock.svg?url';
import asset27 from './assets/circle-check-big.svg?url';
import asset28 from './assets/chevron-down.svg?url';
import asset29 from './assets/check.svg?url';
import asset30 from './assets/calendar-days.svg?url';
import asset31 from './assets/calendar-clock.svg?url';
import asset32 from './assets/briefcase-business.svg?url';
import asset33 from './assets/bookmark.svg?url';
import asset34 from './assets/bell-ring.svg?url';
import asset35 from './assets/badge-dollar-sign.svg?url';
import asset36 from './assets/arrow-right.svg?url';
import asset37 from './assets/arrow-left.svg?url';

export const ICON_NAMES = [
  'search','arrow-right','chevron-down','check','phone','heart','menu','bookmark',
  'calendar-days','lock-keyhole','wallet-cards','plus','mail','house','graduation-cap',
  'plane','briefcase-business','user-round','sliders-horizontal','x','share-2',
  'shield-check','circle-check-big','clock','external-link','save','bell-ring','file-text',
  'sparkles','credit-card','badge-dollar-sign','globe','calendar-clock','timer','receipt-text',
  'smartphone','refresh-cw','arrow-left',
] as const;

export type IconName = typeof ICON_NAMES[number];

export interface IconOptions { size?:number; className?:string; label?:string; }


const assets:Record<IconName,string>={
  'x':asset0,
  'wallet-cards':asset1,
  'user-round':asset2,
  'timer':asset3,
  'sparkles':asset4,
  'smartphone':asset5,
  'sliders-horizontal':asset6,
  'shield-check':asset7,
  'share-2':asset8,
  'search':asset9,
  'save':asset10,
  'refresh-cw':asset11,
  'receipt-text':asset12,
  'plus':asset13,
  'plane':asset14,
  'phone':asset15,
  'menu':asset16,
  'mail':asset17,
  'lock-keyhole':asset18,
  'house':asset19,
  'heart':asset20,
  'graduation-cap':asset21,
  'globe':asset22,
  'file-text':asset23,
  'external-link':asset24,
  'credit-card':asset25,
  'clock':asset26,
  'circle-check-big':asset27,
  'chevron-down':asset28,
  'check':asset29,
  'calendar-days':asset30,
  'calendar-clock':asset31,
  'briefcase-business':asset32,
  'bookmark':asset33,
  'bell-ring':asset34,
  'badge-dollar-sign':asset35,
  'arrow-right':asset36,
  'arrow-left':asset37,
};

export function Icon(name:IconName,options:IconOptions={}):string {
  const svg=iconSVG(name,options.size??20,options.label?.trim());
  return options.className?svg.replace('class="hn-icon"',`class="hn-icon ${escapeAttribute(options.className)}"`):svg;
}

export function iconSVG(name:IconName,size=20,label?:string):string {
  const aria=label?` role="img" aria-label="${escapeAttribute(label)}"`:' aria-hidden="true"';
  // A CSS mask uses the unchanged exported SVG and inherits the slot color.
  const url=escapeAttribute(assets[name].replace(/'/g,'%27'));
  return `<span class="hn-icon" data-icon="${name}" style="--hn-icon-size:${size}px;--hn-icon-asset:url('${url}')"${aria}></span>`;
}
export function hydrateIcons(root:ParentNode=document):void { void root; }
function escapeAttribute(value:string):string {
  return value.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
