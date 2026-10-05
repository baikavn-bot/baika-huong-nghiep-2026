import timelinePrimary from './assets/timeline-primary.svg?url';
import timelineSpark from './assets/timeline-spark.svg?url';
import formPanel from './assets/form-panel.svg?url';
const timelineDots = {primary:timelinePrimary,spark:timelineSpark};
import { Logo } from '../brand/index.js';
import { clamp, escapeHTML } from '../lib/html.js';
import { Icon, type IconName } from '../icons/index.js';

export type ButtonType = 'primary' | 'secondary' | 'ghost' | 'spark';
export type ButtonSize = 'm' | 's';
export interface ButtonProps { label: string; type?: ButtonType; size?: ButtonSize; icon?: IconName | false; iconPosition?: 'start'|'end'; disabled?: boolean; attrs?: string; }
export function Button({label,type='primary',size='m',icon='arrow-right',iconPosition='end',disabled=false,attrs=''}: ButtonProps): string {
  const renderedIcon = icon ? Icon(icon,{size:size==='s'?16:20,className:'hn-button__icon'}) : '';
  const content = iconPosition==='start' ? `${renderedIcon}<span>${escapeHTML(label)}</span>` : `<span>${escapeHTML(label)}</span>${renderedIcon}`;
  return `<button class="hn-button hn-button--${type} hn-button--${size}"${disabled?' disabled':''} ${attrs}>${content}</button>`;
}

export interface ChipFilterProps { label:string; count?:number|string; selected?:boolean; size?:'m'|'s'; }
export function ChipFilter({label,count,selected=false,size='m'}:ChipFilterProps):string {
  return `<button class="hn-chip hn-chip--${size}" type="button" aria-pressed="${selected}">${selected?Icon('check',{size:size==='s'?14:16,className:'hn-chip__icon'}):''}<span>${escapeHTML(label)}</span>${count!==undefined?`<span class="hn-chip__count">${escapeHTML(count)}</span>`:''}</button>`;
}

export type StatusKind='open'|'soon'|'closed'|'rolling';
export function StatusBadge(label:string,status:StatusKind='open'):string {
  return `<span class="hn-status hn-status--${status}">${escapeHTML(label)}</span>`;
}

export function SearchField(placeholder='Tìm học bổng, nước, ngành, trường…'):string {
  return `<form class="hn-search" role="search">${Icon('search',{size:22,className:'hn-search__icon'})}<input name="q" autocomplete="off" placeholder="${escapeHTML(placeholder)}"/>${Button({label:'Tìm',size:'s',attrs:'type="submit"'})}</form>`;
}

export function Select(value:string, options:string[]):string {
  return `<span class="hn-select-wrap"><select class="hn-select" aria-label="Sắp xếp">${options.map(o=>`<option${o===value?' selected':''}>${escapeHTML(o)}</option>`).join('')}</select>${Icon('chevron-down',{size:18,className:'hn-select__icon'})}</span>`;
}
export function Checkbox(label:string,checked=false):string {
  return `<label class="hn-checkbox">${checkboxContent(label,checked)}</label>`;
}

export interface ScholarshipCardProps {
  title:string; provider:string; eyebrow:string; countryCode:string; valueText:string;
  deadline:string; statusLabel?:string; status?:StatusKind; access?:'free'|'locked'; href?:string;
}
export function ScholarshipCard(p:ScholarshipCardProps):string {
  const locked=p.access==='locked';
  const status=p.status||'open';
  const statusLabel=p.statusLabel||p.deadline;
  return `<article class="hn-card hn-card--interactive hn-scholarship-card" data-access="${locked?'locked':'free'}">
    <div class="hn-scholarship-card__top">
      <span class="hn-stamp">${escapeHTML(p.countryCode)}</span>
      ${StatusBadge(statusLabel,status)}
      <span class="hn-scholarship-card__spacer"></span>
      <button class="hn-scholarship-card__save" type="button" data-save aria-label="Lưu học bổng">${Icon('bookmark',{size:20})}</button>
    </div>
    <p class="hn-eyebrow hn-scholarship-card__eyebrow">${escapeHTML(p.eyebrow)}</p>
    <h3 class="hn-title-l">${escapeHTML(p.title)}</h3>
    <p class="hn-scholarship-card__provider">${escapeHTML(p.provider)}</p>
    <div class="hn-scholarship-card__value">${escapeHTML(p.valueText)}</div>
    <div class="hn-scholarship-card__divider"></div>
    <div class="hn-scholarship-card__bottom">
      ${locked
        ? `<span class="hn-scholarship-card__lockbox">${Icon('lock-keyhole',{size:16})}</span><span class="hn-body-s">Tiêu chí &amp; hồ sơ mẫu trong gói năm</span>`
        : `${Icon('calendar-days',{size:18})}<span class="hn-data">Hạn ${escapeHTML(p.deadline)}</span><span class="hn-scholarship-card__spacer"></span><a href="${escapeHTML(p.href||'#')}" class="hn-scholarship-card__detail"><span>Chi tiết</span>${Icon('arrow-right',{size:16})}</a>`}
    </div>
  </article>`;
}

export interface DeadlineTicketProps { date:string; year?:string; name:string; meta:string; statusLabel:string; status?:StatusKind; }
export function DeadlineTicket(p:DeadlineTicketProps):string {
  return `<article class="hn-deadline-ticket"><div class="hn-deadline-ticket__stub"><strong class="hn-deadline-ticket__date">${escapeHTML(p.date)}</strong><span class="hn-deadline-ticket__year">${escapeHTML(p.year||'2026')}</span></div><div class="hn-deadline-ticket__body"><strong class="hn-title-m">${escapeHTML(p.name)}</strong><span class="hn-body-s">${escapeHTML(p.meta)}</span>${StatusBadge(p.statusLabel,p.status||'soon')}</div></article>`;
}

export interface CountryPostcardProps { country:string; code:string; cost:string; lang:string; work:string; count:string; newPolicy?:boolean; compare?:boolean; }
export function CountryPostcard(p:CountryPostcardProps):string {
  return `<article class="hn-card hn-card--interactive hn-country-card" aria-selected="${!!p.compare}"><div class="hn-country-card__cover" aria-hidden="true"><span class="hn-country-card__door">${DoorPanel({width:120,height:170,tone:'primary'})}</span>${Spark(42)}</div><div class="hn-country-card__body"><div style="display:flex;justify-content:space-between;align-items:center"><span class="hn-stamp">${escapeHTML(p.code)}</span>${p.newPolicy?'<span class="hn-caption">Chính sách mới</span>':''}</div><h3 class="hn-h3">${escapeHTML(p.country)}</h3><p class="hn-data-bold">${escapeHTML(p.cost)}</p><p class="hn-body-s">Ngôn ngữ · ${escapeHTML(p.lang)}<br>Làm thêm · ${escapeHTML(p.work)}<br>${escapeHTML(p.count)}</p><div class="hn-country-card__actions"><a class="hn-country-card__cost" href="#/du-hoc">${Icon('wallet-cards',{size:16})}<span>Chi phí, visa</span></a><button class="hn-button hn-button--ghost hn-button--s" type="button" aria-pressed="${!!p.compare}">${p.compare?Icon('check',{size:14,className:'hn-button__icon'}):Icon('plus',{size:14,className:'hn-button__icon'})}<span>${p.compare?'Đã chọn so sánh':'Thêm vào so sánh'}</span></button></div></div></article>`;
}

export interface SalaryRangeProps { min:number; max:number; entryMin:number; entryMax:number; rangeText:string; note:string; }
export function SalaryRange(p:SalaryRangeProps):string {
  const min=clamp(p.min,0,80), max=clamp(p.max,0,80);
  const left=(min/80)*100, width=(Math.max(0,max-min)/80)*100;
  const entryMid=clamp((p.entryMin+p.entryMax)/2,min,max);
  const entry=((entryMid-min)/Math.max(1,max-min))*100;
  return `<div class="hn-salary"><div style="display:flex;justify-content:space-between"><span class="hn-caption">Lương thị trường</span><strong class="hn-data">${escapeHTML(p.rangeText)}</strong></div><div class="hn-salary__track"><span class="hn-salary__base"></span><span class="hn-salary__range" style="left:${left}%;width:${width}%"><i class="hn-salary__entry" style="left:${entry}%"></i></span></div><div class="hn-salary__ticks"><span>0</span><span>20</span><span>40</span><span>60</span><span>80+ tr</span></div><span class="hn-body-s hn-salary__note"><span class="hn-salary__entry-dot" aria-hidden="true"></span>${escapeHTML(p.note)}</span></div>`;
}

export interface JobCardProps { title:string; group:string; holland:string; summary:string; salary:SalaryRangeProps; }
export function JobCard(p:JobCardProps):string {
  return `<article class="hn-card hn-card--interactive hn-job-card"><div class="hn-job-card__meta"><span class="hn-job-card__group">${escapeHTML(p.group)}</span><span class="hn-job-card__holland">${escapeHTML(p.holland)}</span></div><h3 class="hn-title-l">${escapeHTML(p.title)}</h3><p class="hn-body-s">${escapeHTML(p.summary)}</p>${SalaryRange(p.salary)}${Button({label:'Xem nhiệm vụ chính',type:'ghost',size:'s'})}</article>`;
}

export type JourneyState='done'|'current'|'next';
export function JourneyStep(title:string,meta:string,state:JourneyState):string {
  return `<article class="hn-journey-step" data-state="${state}">${state==='done'?`<span class="hn-journey-step__done" aria-hidden="true">${RisingPanel(52,44)}${Icon('check',{size:20})}</span>`:''}${state==='current'?`<span class="hn-journey-step__marker" aria-hidden="true">${RisingPanel(34,18)}</span>`:''}<h3 class="hn-title-m">${escapeHTML(title)}</h3><p class="hn-body-s">${escapeHTML(meta)}</p></article>`;
}

export function PaywallLock(title:string,body:string):string {
  return `<section class="hn-paywall">${Icon('lock-keyhole',{size:22,className:'hn-paywall__icon'})}<h3 class="hn-h3">${escapeHTML(title)}</h3><p class="hn-body-m">${escapeHTML(body)}</p><div aria-hidden="true"><span class="hn-skeleton"></span><br><span class="hn-skeleton" style="width:82%;margin:auto"></span></div>${Button({label:'Mở khoá gói năm',type:'spark'})}</section>`;
}

export interface SectionHeadingProps { eyebrow:string; title:string; description:string; linkLabel?:string; linkHref?:string; }
export function SectionHeading(p:SectionHeadingProps):string {
  return `<header class="hn-section-heading"><div class="hn-section-heading__lead"><div class="hn-section-heading__eyebrow">${Spark(18)}<span class="hn-eyebrow">${escapeHTML(p.eyebrow)}</span></div><h2 class="hn-h1">${escapeHTML(p.title)}</h2><p class="hn-body-m hn-section-heading__desc">${escapeHTML(p.description)}</p></div>${p.linkLabel?`<a href="${escapeHTML(p.linkHref||'#')}" class="hn-button hn-button--ghost hn-button--s"><span>${escapeHTML(p.linkLabel)}</span>${Icon('arrow-right',{size:16,className:'hn-button__icon'})}</a>`:''}</header>`;
}

export function QuizOption(answer:string,letter:string,selected=false,name='holland'):string {
  return `<label class="hn-quiz-option" role="radio" aria-checked="${selected}" tabindex="0"><input type="radio" name="${escapeHTML(name)}" value="${escapeHTML(letter)}"${selected?' checked':''} hidden/><span class="hn-quiz-option__letter">${escapeHTML(letter)}</span><span class="hn-body-m">${escapeHTML(answer)}</span>${Icon('check',{size:22,className:'hn-quiz-option__check'})}</label>`;
}

export function PricingTicket(plan:'free'|'year'):string {
  const yearly=plan==='year';
  const features=yearly?['Mọi thứ ở gói xem lướt','Tiêu chí, hồ sơ mẫu của 172 học bổng','Thị thực, chứng minh tài chính 32 nước','Mô tả nhiệm vụ đủ 299 nghề','Lộ trình 12 tháng và nhắc hạn qua email','So sánh 3 nước, lưu không giới hạn']:['Tên, giá trị, hạn nộp mọi học bổng','Chi phí ước tính 32 nước','Dải lương 299 nghề','Trắc nghiệm hướng nghiệp'];
  return `<article class="hn-pricing" data-plan="${plan}">${yearly?'<span class="hn-pricing__badge">NÊN CHỌN</span>':''}<p class="hn-eyebrow">${yearly?'GÓI NĂM':'MIỄN PHÍ'}</p><h3 class="hn-h2">${yearly?'199.000đ / năm':'0đ'}</h3><p class="hn-body-m">${yearly?'Mở tiêu chí chi tiết, hồ sơ mẫu, lộ trình và nhắc hạn.':'Tra cứu cơ bản và nội dung miễn phí.'}</p><ul class="hn-pricing__features">${features.map(x=>`<li>${Icon('check',{size:18})}<span>${escapeHTML(x)}</span></li>`).join('')}</ul>${Button({label:yearly?'Mở khoá gói năm':'Dùng miễn phí',type:yearly?'spark':'secondary',icon:'arrow-right'})}</article>`;
}

export function CompareBar(selected:number, countries:Array<{id:number;name:string}>=[]):string {
  const enabled=selected>=2;
  return `<aside class="hn-compare-bar" aria-label="So sánh nước"><strong class="hn-body-m">Đã chọn ${selected}/3 nước</strong><div class="hn-compare-bar__chips">${countries.map(c=>`<button type="button" class="hn-compare-chip" data-remove-country="${c.id}" aria-label="Bỏ ${escapeHTML(c.name)} khỏi so sánh"><span>${escapeHTML(c.name)}</span>${Icon('x',{size:14})}</button>`).join('')}</div><span style="flex:1"></span>${Button({label:'So sánh',size:'s',disabled:!enabled})}</aside>`;
}

export function Toast(message:string,undoLabel?:string):string {
  return `<div class="hn-toast" role="status" aria-live="polite"><span class="hn-toast__icon">${Icon('circle-check-big',{size:14})}</span><span>${escapeHTML(message)}</span>${undoLabel?` <button class="hn-button hn-button--ghost hn-button--s" type="button">${escapeHTML(undoLabel)}</button>`:''}</div>`;
}

export type AuthProvider='google'|'facebook'|'phone'|'email';
export function AuthButton(provider:AuthProvider,label:string):string {
  return `<button class="hn-auth-button" type="button" data-provider="${provider}"><span aria-hidden="true" data-provider-mark>${provider==='phone'?Icon('phone',{size:16}):provider==='email'?Icon('mail',{size:16}):''}</span><span>${escapeHTML(label)}</span></button>`;
}

export function BottomSheetFilter(content:string,resultCount:number):string {
  return `<section class="hn-bottom-sheet" role="dialog" aria-modal="true" aria-label="Bộ lọc"><div class="hn-bottom-sheet__handle" aria-hidden="true"></div>${content}<div style="position:sticky;bottom:0;padding-top:16px;background:var(--hn-bg-surface)">${Button({label:`Xem ${resultCount} kết quả`,type:'primary'})}</div></section>`;
}

export function NavDesktop(active:string):string {
  const links=[
    ['Học bổng','#/hoc-bong'],['Du học','#/du-hoc'],['Nghề nghiệp','#/nghe-nghiep'],['Tuyển sinh 2026','#/hoc-bong'],['Trắc nghiệm','#/trac-nghiem']
  ];
  return `<header class="hn-nav-desktop"><a href="#/" aria-label="Hướng Nghiệp">${Logo()}</a><nav>${links.map(([label,href])=>`<a class="hn-nav-link" href="${href}"${label===active?' aria-current="page"':''}>${escapeHTML(label)}</a>`).join(' &nbsp;&nbsp; ')}</nav><div class="hn-nav-actions"><a class="hn-nav-hotline" href="tel:0905247365">${Icon('phone',{size:16})}<span>0905 247 365</span></a>${Button({label:'Đăng nhập',type:'ghost',size:'s',attrs:'data-route="#/dang-nhap"'})}${Button({label:'Gói năm 199k',type:'spark',size:'s',attrs:'data-route="#/thanh-toan"'})}</div></header>`;
}
export function NavMobile():string {
  return `<header class="hn-nav-mobile"><a href="#/" aria-label="Hướng Nghiệp">${Logo('horizontal',0.8)}</a><div><a class="hn-touch44" href="#/hoc-bong" aria-label="Tìm kiếm">${Icon('search',{size:22})}</a><a class="hn-touch44" href="#/lo-trinh" aria-label="Đã lưu">${Icon('heart',{size:22})}</a><button class="hn-touch44" type="button" aria-label="Mở menu">${Icon('menu',{size:22})}</button></div></header>`;
}
export function Footer(updated?:string):string {
  return `<footer class="hn-footer"><div class="hn-footer__main hn-container">
    <div class="hn-footer__brand" aria-label="Hướng Nghiệp · BAIKA">${Logo('stacked',0.9)}</div>
    <nav class="hn-footer__column" aria-label="Khám phá"><p class="hn-eyebrow">KHÁM PHÁ</p><a href="#/hoc-bong">Học bổng</a><a href="#/du-hoc">Du học 32 nước</a><a href="#/nghe-nghiep">Nghề nghiệp &amp; mức lương</a><a href="#/hoc-bong">Tuyển sinh 2026</a><a href="#/trac-nghiem">Trắc nghiệm hướng nghiệp</a></nav>
    <nav class="hn-footer__column" aria-label="Hỗ trợ"><p class="hn-eyebrow">HỖ TRỢ</p><a href="#/">Câu hỏi thường gặp</a><a href="#/thanh-toan">Gói năm 199k</a><a href="#/">Chính sách hoàn tiền</a><a href="#/">Điều khoản sử dụng</a><a href="#/">Chính sách bảo mật</a></nav>
    <div class="hn-footer__column"><p class="hn-eyebrow">LIÊN HỆ</p><span>Hotline · Zalo · WhatsApp</span><span>LINE · WeChat: 0905 247 365</span><a href="mailto:baika.vn@gmail.com">baika.vn@gmail.com</a><span>Tầng 15, 72 Lê Thánh Tôn,</span><span>Phường Sài Gòn, TP. Hồ Chí Minh</span></div>
    <p class="hn-footer__note hn-note-hand">Hỏi gì cũng được,<br>anh chị trả lời trong ngày.</p>
  </div><div class="hn-footer__legal hn-container"><span>© 2026 Công ty Cổ phần Công nghệ BAIKA · MST 0319512450</span><span>Số liệu học bổng, học phí, lương là ước tính và có ngày cập nhật · <b id="hnUpd">${escapeHTML(updated||'—')}</b></span></div></footer>`;
}

export interface DoorPanelProps { width:number; height:number; rise?:number; tone?:'primary'|'peach'|'sky'; label?:string; }
export function DoorPanel(p:DoorPanelProps):string {
  const fill=p.tone==='peach'?'var(--hn-bg-peach)':p.tone==='sky'?'var(--hn-bg-sky)':'var(--hn-brand-primary)';
  return `<svg class="hn-brand-shape hn-brand-shape--door" width="${p.width}" height="${p.height}" viewBox="0 0 120 150" preserveAspectRatio="none" aria-hidden="true"><path d="M0 39C0 27 5.9 19.97 17.7 17.9L102.3 3.1C114.1 1.03 120 6 120 18V132C120 144 114 150 102 150H18C6 150 0 144 0 132V39Z" fill="${fill}"/></svg>`;
}
export function RisingPanel(width:number,height:number,rise=26):string {
  return `<svg class="hn-brand-shape hn-brand-shape--rising" width="${width}" height="${height}" viewBox="0 0 80 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 18C0 11.33 3.33 7.67 10 7L70 1C76.67 .33 80 3.33 80 10V22C80 28.67 76.67 32.33 70 33L10 39C3.33 39.67 0 36.67 0 30V18Z" fill="var(--hn-brand-primary)"/></svg>`;
}
export function Spark(size=18):string {
  const h=Math.round(size*.7142857); return `<svg class="hn-brand-shape hn-brand-shape--spark" width="${size}" height="${h}" viewBox="0 0 56 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 11.8C0 9.8 1 8.63 3 8.3L53 .5C55 .17 56 1 56 3V28.2C56 30.2 55 31.37 53 31.7L3 39.5C1 39.83 0 39 0 37V11.8Z" fill="var(--hn-brand-spark)"/></svg>`;
}

export interface TimelineDayRowProps { time:string; activity:string; position?:'middle'|'last'; tone?:'primary'|'spark'; }
export function TimelineDayRow({time,activity,position='middle',tone='primary'}:TimelineDayRowProps):string {
  return '<div class="hn-timeline-row" data-position="'+position+'" data-tone="'+tone+'"><strong class="hn-timeline-row__time">'+escapeHTML(time)+'</strong><img class="hn-timeline-row__dot" src="'+timelineDots[tone]+'" width="12" height="12" alt=""><span class="hn-timeline-row__activity">'+escapeHTML(activity)+'</span></div>';
}
export function SkillChip(label:string):string {
  return '<span class="hn-skill-chip">'+escapeHTML(label)+'</span>';
}
export function BenefitRow(label:string,icon:IconName):string {
  return '<li class="hn-benefit-row">'+Icon(icon,{size:18})+'<span>'+escapeHTML(label)+'</span></li>';
}
export function PricingFAQRow(answer:string,icon:IconName):string {
  return '<li class="hn-faq-row">'+Icon(icon,{size:18})+'<span>'+escapeHTML(answer)+'</span></li>';
}
export function OTPDigit(index:number):string {
  return '<input class="hn-otp-digit" inputmode="numeric" pattern="[0-9]" maxlength="1" autocomplete="'+(index===0?'one-time-code':'off')+'" aria-label="Số '+(index+1)+'">';
}
export function CheckboxCountRow(label:string,count?:string,checked=false):string {
  return '<label class="hn-checkbox-count-row"><span class="hn-checkbox">'+checkboxContent(label,checked)+'</span>'+(count!==undefined?'<small>'+escapeHTML(count)+'</small>':'')+'</label>';
}
export function NavTabItem(label:string,icon:IconName,href:string,active=false):string {
  return '<a class="hn-nav-tab" href="'+escapeHTML(href)+'"'+(active?' aria-current="page"':'')+'>'+Icon(icon,{size:22})+'<small>'+escapeHTML(label)+'</small>'+(active?'<span class="hn-nav-tab__marker" aria-hidden="true"></span>':'')+'</a>';
}
export function SummaryText(title:string,subtitle:string):string {
  return '<span class="hn-summary-text"><strong>'+escapeHTML(title)+'</strong><small>'+escapeHTML(subtitle)+'</small></span>';
}
export function ScholarshipInlineRow(title:string,subtitle:string,statusLabel:string,status:StatusKind,href:string):string {
  return '<a class="hn-scholarship-inline-row" href="'+escapeHTML(href)+'">'+SummaryText(title,subtitle)+StatusBadge(statusLabel,status)+'</a>';
}
export function MobileActionBar(value:string,detail:string,button:ButtonProps):string {
  return '<div class="hn-mobile-action-bar"><div class="hn-action-status"><strong>'+escapeHTML(value)+'</strong><small>'+escapeHTML(detail)+'</small></div>'+Button(button)+'</div>';
}
export function AccountSuccessItem(title:string,description:string):string {
  return '<div class="hn-success-row hn-account-success-item">'+SummaryText(title,description)+'</div>';
}
export function JourneyTaskRow(task:string,deadline:string,done=false):string {
  return '<label class="hn-journey-task-row"><input type="checkbox"'+(done?' checked':'')+'><span class="hn-journey-task-row__box" aria-hidden="true">'+Icon('clock',{size:16})+'</span><span class="hn-journey-task-row__task">'+escapeHTML(task)+'</span><small class="hn-journey-task-row__deadline">'+escapeHTML(deadline)+'</small></label>';
}

export function FormSectionHeading(title:string,step:'account'|'invoice'):string {
  return '<h2 class="hn-form-heading"><span class="hn-form-heading__marker" aria-hidden="true"><img src="'+formPanel+'" width="44" height="34" alt="">'+Icon(step==='account'?'user-round':'receipt-text',{size:18})+'</span><span>'+escapeHTML(title)+'</span></h2>';
}
function checkboxContent(label:string,checked:boolean):string {
  return `<input type="checkbox"${checked?' checked':''}/><span class="hn-checkbox__box">${Icon('check',{size:16})}</span><span>${escapeHTML(label)}</span>`;
}
