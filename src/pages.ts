import careerResponsibilityPanel from './components/assets/career-responsibility.svg?url';
import careerRange from './components/assets/career-range.svg?url';
import careerEntryDot from './components/assets/career-entry.svg?url';
import { Logo } from './brand/index.js';
import {
  SummaryText, TimelineDayRow, SkillChip, OTPDigit, CheckboxCountRow, NavTabItem, ScholarshipInlineRow, MobileActionBar, AccountSuccessItem, JourneyTaskRow, FormSectionHeading,
  AuthButton,
  BottomSheetFilter,
  Button,
  Checkbox,
  ChipFilter,
  CompareBar,
  CountryPostcard,
  DeadlineTicket,
  DoorPanel,
  Footer,
  JobCard,
  JourneyStep,
  NavDesktop,
  NavMobile,
  PaywallLock,
  QuizOption,
  RisingPanel,
  SalaryRange,
  ScholarshipCard,
  SearchField,
  Select,
  Spark,
  StatusBadge,
  Toast,
} from './components/index.js';
import { hydrateIcons, Icon } from './icons/index.js';

export type RouteKey =
  | 'home'
  | 'scholarships'
  | 'scholarship-detail'
  | 'study-abroad'
  | 'country-detail'
  | 'compare'
  | 'careers'
  | 'career-detail'
  | 'quiz'
  | 'quiz-result'
  | 'checkout'
  | 'checkout-success'
  | 'login'
  | 'journey';

interface RouteDef { key: RouteKey; hash: string; }

export const ROUTES: Record<RouteKey, RouteDef> = {
  home: { key: 'home', hash: '#/' },
  scholarships: { key: 'scholarships', hash: '#/hoc-bong' },
  'scholarship-detail': { key: 'scholarship-detail', hash: '#/hoc-bong/chevening' },
  'study-abroad': { key: 'study-abroad', hash: '#/du-hoc' },
  'country-detail': { key: 'country-detail', hash: '#/du-hoc/nhat-ban' },
  compare: { key: 'compare', hash: '#/du-hoc/so-sanh' },
  careers: { key: 'careers', hash: '#/nghe-nghiep' },
  'career-detail': { key: 'career-detail', hash: '#/nghe-nghiep/ui-ux' },
  quiz: { key: 'quiz', hash: '#/trac-nghiem' },
  'quiz-result': { key: 'quiz-result', hash: '#/ket-qua' },
  checkout: { key: 'checkout', hash: '#/thanh-toan' },
  'checkout-success': { key: 'checkout-success', hash: '#/thanh-toan/thanh-cong' },
  login: { key: 'login', hash: '#/dang-nhap' },
  journey: { key: 'journey', hash: '#/lo-trinh' },
};

const scholarshipData = [
  { title:'Học bổng Chevening 2027–2028', provider:'Chính phủ Anh (FCDO) · 1 năm thạc sĩ tại Vương quốc Anh', eyebrow:'THẠC SĨ · TOÀN PHẦN', countryCode:'UK', valueText:'Học phí + sinh hoạt phí + vé máy bay', deadline:'06/10/2026', statusLabel:'Còn 6 ngày', status:'soon' as const, access:'free' as const, href:ROUTES['scholarship-detail'].hash },
  { title:'Australia Awards Scholarships', provider:'Chính phủ Úc · Chương trình sau đại học', eyebrow:'THẠC SĨ · TOÀN PHẦN', countryCode:'AU', valueText:'Học phí + sinh hoạt + vé máy bay + bảo hiểm', deadline:'15/10/2026', statusLabel:'Còn 15 ngày', status:'open' as const, access:'free' as const, href:ROUTES['scholarship-detail'].hash },
  { title:'Erasmus Mundus Joint Masters', provider:'Liên minh Châu Âu · Chương trình thạc sĩ liên quốc gia', eyebrow:'THẠC SĨ · TOÀN PHẦN', countryCode:'EU', valueText:'Học phí + trợ cấp sinh hoạt + di chuyển', deadline:'09/12/2026', statusLabel:'Đang mở', status:'open' as const, access:'locked' as const },
  { title:'MEXT Embassy Recommendation', provider:'Chính phủ Nhật Bản · Đại học, thạc sĩ, tiến sĩ', eyebrow:'ĐA BẬC · TOÀN PHẦN', countryCode:'JP', valueText:'Học phí + trợ cấp + vé máy bay', deadline:'31/10/2026', statusLabel:'Còn 31 ngày', status:'open' as const, access:'free' as const, href:ROUTES['scholarship-detail'].hash },
  { title:'Gates Cambridge Scholarship', provider:'University of Cambridge · Sau đại học', eyebrow:'THẠC SĨ · TIẾN SĨ', countryCode:'UK', valueText:'Toàn bộ chi phí học và sinh hoạt', deadline:'02/12/2026', statusLabel:'Còn 63 ngày', status:'open' as const, access:'locked' as const },
  { title:'Knight-Hennessy Scholars', provider:'Stanford University · Sau đại học', eyebrow:'THẠC SĨ · TIẾN SĨ', countryCode:'US', valueText:'Học phí + sinh hoạt + travel stipend', deadline:'08/10/2026', statusLabel:'Còn 8 ngày', status:'soon' as const, access:'free' as const, href:ROUTES['scholarship-detail'].hash },
];

const countries = [
  { country:'Đức', code:'DE', cost:'12.000–18.000 USD/năm', lang:'Đức, Anh', work:'20 giờ/tuần', count:'9 chương trình', newPolicy:true },
  { country:'Nhật Bản', code:'JP', cost:'12.000–22.000 USD/năm', lang:'Nhật, Anh', work:'28 giờ/tuần', count:'8 chương trình', newPolicy:true },
  { country:'Canada', code:'CA', cost:'25.000–45.000 USD/năm', lang:'Anh, Pháp', work:'24 giờ/tuần', count:'7 chương trình', newPolicy:true },
  { country:'Hàn Quốc', code:'KR', cost:'12.000–22.000 USD/năm', lang:'Hàn, Anh', work:'25 giờ/tuần', count:'11 chương trình' },
  { country:'Úc', code:'AU', cost:'28.000–46.000 USD/năm', lang:'Anh', work:'48 giờ/2 tuần', count:'18 chương trình' },
  { country:'Pháp', code:'FR', cost:'14.000–24.000 USD/năm', lang:'Pháp, Anh', work:'964 giờ/năm', count:'10 chương trình' },
  { country:'Hà Lan', code:'NL', cost:'24.000–42.000 USD/năm', lang:'Anh, Hà Lan', work:'16 giờ/tuần', count:'8 chương trình' },
  { country:'Hoa Kỳ', code:'US', cost:'35.000–85.000 USD/năm', lang:'Anh', work:'20 giờ/tuần', count:'22 chương trình' },
];

const jobs = [
  { title:'Thiết kế UI/UX', group:'Thiết kế & sản phẩm', holland:'A · I', summary:'Thiết kế cách app, web trông ra sao và dùng có dễ không.', salary:{ min:15,max:38,entryMin:10,entryMax:15,rangeText:'15 – 38 tr/tháng',note:'Mới ra trường 10–15 tr · 5 năm+ 30–50 tr' } },
  { title:'Lập trình viên front-end', group:'Công nghệ thông tin', holland:'I · A', summary:'Biến thiết kế thành giao diện chạy thật trên trình duyệt, tối ưu tốc độ và trải nghiệm.', salary:{ min:18,max:45,entryMin:12,entryMax:18,rangeText:'18 – 45 tr/tháng',note:'Mới ra trường 12–18 tr · 5 năm+ 35–60 tr' } },
  { title:'Kiến trúc sư', group:'Kiến trúc & xây dựng', holland:'A · I · R', summary:'Thiết kế không gian, cân bằng thẩm mỹ, kỹ thuật và nhu cầu sử dụng thực tế.', salary:{ min:14,max:36,entryMin:9,entryMax:14,rangeText:'14 – 36 tr/tháng',note:'Mới ra trường 9–14 tr · 5 năm+ 28–45 tr' } },
  { title:'Nghiên cứu UX', group:'Sản phẩm & nghiên cứu', holland:'I · S', summary:'Quan sát, phỏng vấn và thử nghiệm để hiểu vì sao người dùng hành động như vậy.', salary:{ min:16,max:40,entryMin:11,entryMax:16,rangeText:'16 – 40 tr/tháng',note:'Mới ra trường 11–16 tr · 5 năm+ 30–50 tr' } },
  { title:'Tâm lý học', group:'Sức khoẻ & xã hội', holland:'I · S · A', summary:'Đánh giá, hỗ trợ và nghiên cứu hành vi, cảm xúc và sức khoẻ tinh thần.', salary:{ min:10,max:30,entryMin:7,entryMax:10,rangeText:'10 – 30 tr/tháng',note:'Mới ra trường 7–10 tr · chuyên sâu 20–40 tr' } },
  { title:'Thiết kế đồ hoạ', group:'Thiết kế & truyền thông', holland:'A · I', summary:'Tạo hệ thống hình ảnh, ấn phẩm và nội dung trực quan phục vụ truyền thông.', salary:{ min:12,max:32,entryMin:8,entryMax:12,rangeText:'12 – 32 tr/tháng',note:'Mới ra trường 8–12 tr · 5 năm+ 25–40 tr' } },
];

const updated = () => (window.HN_DATA && typeof window.HN_DATA === 'object' && 'upd' in window.HN_DATA) ? String(window.HN_DATA.upd || '09/2026') : '09/2026';

function breadcrumb(parts:string[]):string {
  return `<nav class="hn-breadcrumb" aria-label="Breadcrumb">${parts.map((p,i)=>i===parts.length-1?`<span aria-current="page">${p}</span>`:`<a href="${i===0?ROUTES.home.hash:'#'}">${p}</a><span aria-hidden="true">/</span>`).join('')}</nav>`;
}

function mobileTab(active:'home'|'scholarships'|'study'|'career'|'mine'):string {
  const items=[
    ['home','house','Trang chủ',ROUTES.home.hash],
    ['scholarships','graduation-cap','Học bổng',ROUTES.scholarships.hash],
    ['study','plane','Du học',ROUTES['study-abroad'].hash],
    ['career','briefcase-business','Nghề',ROUTES.careers.hash],
    ['mine','user-round','Của tôi',ROUTES.journey.hash],
  ] as const;
  return `<nav class="hn-mobile-tabbar" aria-label="Điều hướng chính">${items.map(([key,icon,label,href])=>NavTabItem(label,icon,href,key===active)).join('')}</nav>`;
}

function mobileDetailHeader(title:string):string {
  return `<header class="hn-detail-mobile-header"><button type="button" class="hn-touch44" data-back aria-label="Quay lại">${Icon('arrow-left',{size:22})}</button><strong>${title}</strong><span></span><button type="button" class="hn-touch44" data-save aria-label="Lưu">${Icon('bookmark',{size:20})}</button><button type="button" class="hn-touch44" data-share aria-label="Chia sẻ">${Icon('share-2',{size:20})}</button></header>`;
}

function pageHero(crumb:string[], eyebrow:string, title:string, italic:string, desc:string):string {
  return `<section class="hn-page-hero"><div class="hn-container">${breadcrumb(crumb)}<div class="hn-page-hero__eyebrow">${eyebrow}</div><h1 class="hn-display-l">${title} <em>${italic}</em></h1><p class="hn-body-l">${desc}</p></div></section>`;
}

function directoryHero(kind:'scholarship'|'career'):string {
  const scholarship=kind==='scholarship';
  const title=scholarship?'172 học bổng,':'299 nghề,';
  const italic=scholarship?'lọc đúng hồ sơ bạn':'mỗi nghề một ngày thật';
  const desc=scholarship?'Việt Nam và 30 nước. Mỗi học bổng ghi ngày cập nhật và nguồn chính thức.':'6 nhiệm vụ chính, một ngày làm việc mẫu, ngành học nên chọn và dải lương thị trường.';
  const crumb=scholarship?['Trang chủ','Học bổng']:['Trang chủ','Nghề nghiệp'];
  const placeholder=scholarship?'thạc sĩ toàn phần':'Tìm nghề: điều dưỡng, lập trình, kế toán…';
  return `<section class="hn-directory-hero hn-directory-hero--${kind}"><div class="hn-container"><div class="hn-directory-hero__content">${breadcrumb(crumb)}<h1><strong>${title}</strong><em>${italic}</em></h1><p class="hn-body-l">${desc}</p>${SearchField(placeholder)}</div><div class="hn-directory-hero__decor" aria-hidden="true">${DoorPanel({width:260,height:360})}<span class="hn-directory-hero__spark">${Spark(72)}</span></div></div></section>`;
}

function checkboxGroup(title:string, items:Array<[string,string?,boolean?]>):string {
  return `<fieldset class="hn-filter-group"><legend>${title}</legend>${items.map(([label,count,checked])=>CheckboxCountRow(label,count,checked)).join('')}</fieldset>`;
}

function scholarshipFilters():string {
  return `<div class="hn-filter-panel"><div class="hn-filter-panel__head"><strong>Bộ lọc</strong><button type="button" data-clear-filters>Xoá lọc</button></div>
    ${checkboxGroup('Bậc học',[['THPT','10'],['Đại học','101'],['Thạc sĩ','96',true],['Tiến sĩ','60'],['Học nghề','6']])}
    ${checkboxGroup('Mức tài trợ',[['Toàn phần','95',true],['Bán phần','59'],['Hỗ trợ khác','18']])}
    ${checkboxGroup('Khu vực',[['Việt Nam','44'],['Châu Âu','43'],['Châu Á','27'],['Châu Mỹ','24'],['Úc, New Zealand','17'],['Đông Nam Á','15']])}
    <div class="hn-filter-group hn-filter-group--deadline"><legend>Hạn nộp</legend><div class="hn-filter-chip-row">${`<span class="hn-chip hn-chip--s"><span>Còn mở</span>${Icon('x',{size:14})}</span>`}${ChipFilter({label:'≤ 30 ngày',size:'s'})}${ChipFilter({label:'Xét liên tục',size:'s'})}</div></div>
    <button class="hn-save-filter" type="button" data-save-filter>${Icon('bell-ring',{size:18})}<span><strong>Lưu bộ lọc này</strong><small>Có học bổng mới khớp, bạn nhận email ngay.</small></span></button>
  </div>`;
}

export function ScholarshipsPage():string {
  return `<div class="hn-page hn-page--scholarships">
    ${NavDesktop('Học bổng')}${NavMobile()}
    ${directoryHero('scholarship')}
    <main class="hn-container hn-list-layout">
      <aside class="hn-list-sidebar">${scholarshipFilters()}</aside>
      <section class="hn-list-main">
        <div class="hn-list-toolbar">
          <button class="hn-filter-trigger" type="button" data-open-filter>${Icon('sliders-horizontal',{size:16})}<span>Lọc · 3</span></button>
          <div class="hn-active-filters">${`<span class="hn-chip hn-chip--s"><span>Thạc sĩ</span>${Icon('x',{size:14})}</span>`}${`<span class="hn-chip hn-chip--s"><span>Toàn phần</span>${Icon('x',{size:14})}</span>`}${`<span class="hn-chip hn-chip--s"><span>Còn mở</span>${Icon('x',{size:14})}</span>`}</div>
          <strong>58 <span>học bổng khớp</span></strong>${Select('Hạn gần nhất',['Hạn gần nhất','Giá trị cao nhất','Mới cập nhật'])}
        </div>
        <div class="hn-scholarship-results">${scholarshipData.map(x=>ScholarshipCard(x)).join('')}</div>
        <aside class="hn-inline-prompt"><div><strong>Chưa chắc học ngành gì mới săn học bổng?</strong><p>Làm trắc nghiệm 8 phút. Kết quả tự lọc học bổng theo nhóm ngành hợp bạn.</p></div>${Button({label:'Làm trắc nghiệm',attrs:`data-route="${ROUTES.quiz.hash}"`})}<span class="hn-note-hand">thử đi, nhanh lắm</span></aside>
        <div class="hn-load-more"><span>Đang xem 6 / 58</span>${Button({label:'Xem thêm 6 học bổng',type:'secondary',icon:false})}</div>
      </section>
    </main>
    ${Footer(updated())}${mobileTab('scholarships')}
    <div data-filter-sheet hidden>${BottomSheetFilter(`<h2 class="hn-h3">Bộ lọc</h2>${scholarshipFilters()}`,58)}</div>
  </div>`;
}

function detailFacts():string {
  const facts=[['HẠN NỘP','06/10/2026 · 18:00'],['GIÁ TRỊ','Học phí, sinh hoạt phí, vé máy bay, phí visa'],['THỜI GIAN HỌC','1 năm thạc sĩ, nhập học 09/2027'],['CAM KẾT','Về Việt Nam ít nhất 2 năm sau khi học']];
  return `<div class="hn-door-facts"><div class="hn-door-facts__shape" aria-hidden="true">${DoorPanel({width:440,height:540})}</div><div class="hn-door-facts__content">${facts.map(([k,v])=>`<section><span class="hn-eyebrow">${k}</span><strong>${v}</strong></section>`).join('')}</div></div>`;
}

function conditions():string {
  const c=['Có bằng đại học đủ điều kiện học thạc sĩ ở Anh','Ít nhất 2 năm kinh nghiệm làm việc (2.800 giờ)','Nộp vào 3 khoá thạc sĩ khác nhau tại Anh','Có thư mời vô điều kiện trước 08/07/2027','Về Việt Nam ít nhất 2 năm sau khi học'];
  return `<ul class="hn-check-list">${c.map(x=>`<li>${Icon('check',{size:16})}<span>${x}</span></li>`).join('')}</ul>`;
}

export function ScholarshipDetailPage():string {
  return `<div class="hn-page hn-page--detail">
    ${NavDesktop('Học bổng')}${mobileDetailHeader('Học bổng')}
    <main>
      <section class="hn-scholarship-detail-hero"><div class="hn-container hn-detail-hero-grid">
        <div class="hn-detail-hero-copy">${breadcrumb(['Trang chủ','Học bổng','Anh'])}<div class="hn-detail-badges"><span class="hn-stamp">UK</span>${StatusBadge('Còn 6 ngày','soon')}${StatusBadge('Toàn phần','open')}</div><div class="hn-detail-eyebrow"><span>${Spark(16)}</span><p class="hn-eyebrow">THẠC SĨ 1 NĂM · TOÀN PHẦN · VƯƠNG QUỐC ANH</p></div><h1 class="hn-display-l">Học bổng Chevening 2027–2028</h1><p class="hn-body-l">Bộ Ngoại giao Anh (FCDO) tài trợ cho người có tố chất lãnh đạo, đã đi làm ít nhất 2 năm, muốn học thạc sĩ 1 năm tại Anh rồi về Việt Nam đóng góp.</p><div class="hn-detail-actions">${Button({label:'Kiểm tra điều kiện',attrs:'data-scroll-conditions'})}<button data-save>${Icon('bookmark',{size:18})}<span>Lưu</span></button><button data-share>${Icon('share-2',{size:18})}<span>Gửi cho bạn bè</span></button></div><p class="hn-caption">Cập nhật 09/2026 · Nguồn: chevening.org (lịch chu kỳ 2027/28, điều kiện ứng tuyển)</p></div>
        <div class="hn-detail-hero-facts">${detailFacts()}<span class="hn-directory-hero__spark">${Spark(100)}</span></div><span class="hn-note-hand hn-detail-note">hạn tính theo giờ VN,<br>đừng chờ phút chót</span>
      </div></section>
      <section class="hn-detail-body hn-container"><div class="hn-detail-main">
          <section class="hn-detail-section" id="conditions"><p class="hn-eyebrow">ĐIỀU KIỆN CHÍNH</p><h2 class="hn-h2">Ai nộp được?</h2>${conditions()}<p class="hn-body-s">Tự kiểm tra nhanh: bạn đạt mấy / 5 điều kiện?</p></section>
          <section class="hn-detail-section"><p class="hn-eyebrow">HỒ SƠ · 4 NHÓM GIẤY TỜ</p><h2 class="hn-h2">Hồ sơ cần chuẩn bị</h2>${PaywallLock('Mở hồ sơ mẫu và checklist','Gói năm mở checklist chi tiết, mẫu CV, thư giới thiệu và timeline chuẩn bị theo tuần.')}</section>
          <section class="hn-detail-section"><p class="hn-eyebrow">LỊCH</p><h2 class="hn-h2">Mốc thời gian chu kỳ 2027/28</h2><div class="hn-journey-list">${JourneyStep('Mở đơn','06/08/2026','done')}${JourneyStep('Hạn nộp','06/10/2026 · 18:00','current')}${JourneyStep('Phỏng vấn','02–04/2027','next')}${JourneyStep('Nhập học','09/2027','next')}</div></section>
        </div><aside class="hn-detail-aside">${DeadlineTicket({date:'06/10',name:'Chevening 2027–2028',meta:'Anh · Toàn phần',statusLabel:'Còn 6 ngày'})}<div class="hn-reminder-card"><h3>Nhắc tôi trước hạn</h3><p>Email lúc còn 14 ngày và 3 ngày. Tắt bất cứ lúc nào.</p>${Button({label:'Bật nhắc hạn',attrs:'data-reminder'})}</div><div class="hn-similar-card"><h3>Học bổng tương tự</h3>${[['Gates Cambridge','Anh · Thạc sĩ, Tiến sĩ','Còn mở'],['Knight-Hennessy','Hoa Kỳ · Stanford','Còn 8 ngày'],['Erasmus Mundus','Châu Âu · 2–3 nước','Xét liên tục']].map(([a,b,c])=>`<div>${SummaryText(a,b)}${StatusBadge(c,c.includes('8')?'soon':c.includes('liên')?'rolling':'open')}</div>`).join('')}</div><a class="hn-source-link" href="https://chevening.org/scholarships" target="_blank" rel="noreferrer">${Icon('external-link',{size:16})}<span>chevening.org/scholarships</span></a></aside></section>
      ${MobileActionBar('06/10 · 18:00','Còn 6 ngày',{label:'Bật nhắc hạn',attrs:'data-reminder'})}
    </main>${Footer(updated())}</div>`;
}

function costLadder():string {
  const rows=[['$','Dưới 15.000 USD','PH · RU · HU · MY · TH'],['$$','15.000–30.000 USD','JP · KR · DE · FR · IT'],['$$$','25.000–55.000 USD','AU · CA · NL · SG · NZ'],['$$$$','35.000–85.000 USD','US · UK · CH']];
  return `<div class="hn-cost-ladder">${rows.map((r,i)=>`<div class="hn-cost-step" style="--i:${i}"><strong>${r[0]}</strong><span>${r[1]}</span><small>${r[2]}</small></div>`).join('')}</div>`;
}

export function StudyAbroadPage():string {
  return `<div class="hn-page hn-page--study">
    ${NavDesktop('Du học')}${NavMobile()}
    <main>
      <section class="hn-study-hero"><div class="hn-container">${breadcrumb(['Trang chủ','Du học'])}<p class="hn-eyebrow">DU HỌC · 32 NƯỚC · CẬP NHẬT 09/2026</p><div class="hn-study-hero__grid"><div><h1 class="hn-display-l">32 nước,<br><em>đặt cạnh nhau</em><br>rồi hãy chọn.</h1><p class="hn-body-l">Chi phí là tổng học phí và sinh hoạt phí một năm, quy ra USD. Mỗi nước ghi rõ giờ làm thêm, visa ở lại làm việc và thay đổi chính sách 2025–2026.</p></div>${costLadder()}</div><span class="hn-note-hand">Đức gần như miễn học phí,<br>nhưng cần tài khoản phong toả</span></div></section>
      <section class="hn-study-controls"><div class="hn-container hn-study-controls__inner"><div class="hn-study-controls__regions">${ChipFilter({label:'Tất cả',count:32,selected:true})}${ChipFilter({label:'Đông Nam Á',count:4})}${ChipFilter({label:'Châu Á',count:5})}${ChipFilter({label:'Châu Âu',count:18})}${ChipFilter({label:'Châu Mỹ',count:2})}${ChipFilter({label:'Úc, New Zealand',count:2})}${ChipFilter({label:'Trung Đông',count:1})}</div><div class="hn-study-controls__cost"><span>Chi phí:</span>${ChipFilter({label:'$ Dưới 15.000',size:'s'})}${ChipFilter({label:'$$ 15–30.000',selected:true,size:'s'})}${ChipFilter({label:'$$$ 30–45.000',size:'s'})}${ChipFilter({label:'$$$$ Trên 45.000',size:'s'})}${Checkbox('Học bằng tiếng Anh',false)}<span class="hn-control-spacer"></span>${Select('Nhiều học bổng nhất',['Nhiều học bổng nhất','Chi phí thấp nhất','Cập nhật mới nhất'])}</div></div></section>
      <section class="hn-container hn-country-grid" data-country-grid>${countries.map(c=>CountryPostcard(c)).join('')}</section>
      <div class="hn-compare-dock" hidden>${CompareBar(0)}<span class="hn-note-hand">thanh này dính ở đáy màn hình khi đã chọn ≥ 1 nước</span></div>
    </main>
    ${Footer(updated())}${mobileTab('study')}
  </div>`;
}

function compareTable():string {
  const rows=[
    ['Học phí',['Trường công gần như miễn phí; phí học kỳ 150–400 EUR','Quốc lập khoảng 3.500 USD; tư thục 6.000–10.000 USD','Đại học 15.000–30.000 USD'],0],
    ['Sinh hoạt phí',['12.000–15.000 USD','7.000–12.000 USD','15.000–20.000 USD'],1],
    ['Ngôn ngữ đầu vào',['TestDaF 4x4 hoặc DSH-2; chương trình tiếng Anh IELTS 6.0–6.5','JLPT N2–N1 hoặc EJU; chương trình tiếng Anh IELTS 6.0+','IELTS 6.0–6.5'],-1],
    ['Làm thêm',['140 ngày trọn/năm hoặc 20 giờ/tuần','Tối đa 28 giờ/tuần','Tối đa 24 giờ/tuần ngoài trường'],1],
    ['Ở lại làm việc',['Tìm việc tối đa 18 tháng','Chuyển visa lao động khi có việc; tìm việc tối đa 1 năm','PGWP tối đa 3 năm'],2],
    ['Kỳ nhập học',['Tháng 4, tháng 10','Tháng 4, 10','Tháng 9, 1'],-1],
    ['Học bổng trên Hướng Nghiệp',['9 chương trình','8 chương trình','7 chương trình'],0],
    ['Thay đổi 2025–2026',['Tài khoản phong toả 11.904 EUR/năm','Từ 01/10/2026 phí gia hạn lưu trú tăng mạnh','Mức chứng minh tài chính tăng từ 09/2026'],-1],
    ['Cần cân nhắc',['Cần tiếng Đức tốt để đi làm; chờ hẹn APS, visa lâu','Làm quá 28 giờ/tuần có thể bị từ chối gia hạn','Lên thường trú từ PGWP cạnh tranh hơn'],-1],
  ];
  return `<div class="hn-compare-table"><div class="hn-compare-row hn-compare-head"><strong></strong><section><span class="hn-stamp">DE</span><h3>Đức</h3><p>$$ 12.000–18.000 USD/năm</p></section><section><span class="hn-stamp">JP</span><h3>Nhật Bản</h3><p>$$ 12.000–22.000 USD/năm</p></section><section><span class="hn-stamp">CA</span><h3>Canada</h3><p>$$$ 25.000–45.000 USD/năm</p></section></div>${rows.map(([label,vals,best])=>`<div class="hn-compare-row"><strong>${label}</strong>${(vals as string[]).map((v,i)=>`<section class="${i===best?'is-best':''}">${i===best?'<span class="hn-caption">Điểm mạnh</span>':''}<p>${v}</p></section>`).join('')}</div>`).join('')}</div>`;
}

export function ComparePage():string {
  return `<div class="hn-overlay-page"><div class="hn-scrim" data-close-overlay></div><section class="hn-modal hn-compare-modal" role="dialog" aria-modal="true" aria-labelledby="compare-title"><header><div><h1 id="compare-title" class="hn-h2">So sánh 3 nước</h1><p class="hn-caption">Cập nhật 09/2026</p></div><button class="hn-touch44" type="button" data-close-overlay aria-label="Đóng">${Icon('x',{size:22})}</button></header>${compareTable()}<footer><p class="hn-body-s">Số liệu ước tính. Chính sách thị thực đổi thường xuyên, luôn kiểm tra trang cơ quan di trú.</p>${Button({label:'Xem chi tiết Nhật Bản',attrs:`data-route="${ROUTES['country-detail'].hash}"`})}</footer><span class="hn-note-hand hn-compare-note">ô xanh = điểm mạnh<br>nhất trong 3 nước</span></section></div>`;
}

export function CountryDetailPage():string {
  const scholarshipRows=[['MEXT diện Đại sứ quán','Đại học, thạc sĩ, tiến sĩ','Còn mở'],['MEXT diện trường đề cử','Đại học, thạc sĩ, tiến sĩ','Theo trường'],['Ajinomoto cho sinh viên ASEAN','Thạc sĩ','Còn 19 ngày']];
  const facts=[['Học phí','Quốc lập khoảng 3.500 USD; tư thục 6.000–10.000 USD'],['Sinh hoạt phí','7.000–12.000 USD'],['Ngôn ngữ','JLPT N2–N1 hoặc EJU; tiếng Anh IELTS 6.0+'],['Làm thêm','Tối đa 28 giờ/tuần khi có giấy phép'],['Ở lại làm việc','Chuyển visa lao động khi có việc; tìm việc tối đa 1 năm'],['Nhập học','Tháng 4, 10 (trường tiếng: 1, 4, 7, 10)']];
  return `<div class="hn-page hn-page--country-detail">${NavDesktop('Du học')}${mobileDetailHeader('Du học')}<main>
    <section class="hn-country-detail-cover"><div class="hn-container"><div><span class="hn-stamp">JP</span><span class="hn-eyebrow">NHẬT BẢN</span><h1 class="hn-display-l">Nhật Bản</h1><p class="hn-data-bold">$$ · 12.000–22.000 USD/năm</p></div><span class="hn-country-detail__door" aria-hidden="true">${DoorPanel({width:380,height:480})}${Spark(72)}</span></div></section>
    <section class="hn-policy-alert"><div class="hn-container"><strong>CHÍNH SÁCH MỚI · 01/10/2026</strong><p>Phí gia hạn, đổi tư cách lưu trú tăng mạnh: 33.000 yên cho thời hạn 1 năm, cao hơn với thời hạn dài.</p></div></section>
    <section class="hn-country-facts hn-container">${facts.map(([k,v])=>`<div><strong>${k}</strong><p>${v}</p></div>`).join('')}</section>
    <section class="hn-container hn-caution"><h2 class="hn-h3">Cần cân nhắc</h2><p>Làm thêm quá 28 giờ/tuần có thể bị từ chối gia hạn. Nên học tiếng trước khi đi.</p></section>
    <section class="hn-container hn-country-scholarships"><h2 class="hn-h2">Học bổng tại Nhật (8)</h2>${scholarshipRows.map(([a,b,c])=>ScholarshipInlineRow(a,b,c,c.includes('19')?'soon':'open',ROUTES['scholarship-detail'].hash)).join('')}</section>
    <section class="hn-container hn-country-paywall">${PaywallLock('Visa, tài chính và checklist hồ sơ','Mở quy trình chứng minh tài chính, hồ sơ COE, timeline visa và nguồn chính thức.')}</section>
    ${MobileActionBar('$ · 12–22k USD','8 học bổng đang theo dõi',{label:'Thêm vào so sánh',attrs:`data-route="${ROUTES['study-abroad'].hash}"`})}
  </main>${Footer(updated())}</div>`;
}

function careerFilters():string {
  return `<div class="hn-filter-panel hn-career-filter"><section><strong>Mã Holland</strong><p class="hn-caption">Chọn 1–3 chữ. Đã lấy từ kết quả trắc nghiệm của bạn.</p><div class="hn-holland-chips">${[['R · Kỹ thuật',false],['I · Nghiên cứu',true],['A · Nghệ thuật',true],['S · Xã hội',false],['E · Quản lý',false],['C · Nghiệp vụ',false]].map(([x,on])=>ChipFilter({label:String(x),selected:Boolean(on),size:'s'})).join('')}</div></section>
    ${checkboxGroup('Nhóm ngành',[['Công nghệ thông tin','46',true],['Sáng tạo, thiết kế','22',true],['Kiến trúc, xây dựng','19'],['Y tế','31'],['Kinh doanh','38'],['Giáo dục','17']])}
    <label class="hn-range-label"><span>Lương khởi điểm từ</span><input type="range" min="0" max="30" value="8"><strong>8 triệu/tháng trở lên</strong></label></div>`;
}

export function CareersPage():string {
  return `<div class="hn-page hn-page--careers">${NavDesktop('Nghề nghiệp')}${NavMobile()}${directoryHero('career')}<main class="hn-container hn-list-layout"><aside class="hn-list-sidebar">${careerFilters()}</aside><section class="hn-list-main"><div class="hn-career-filter-banner"><strong>I · A</strong><div><h2>Đang lọc theo mã Holland của bạn</h2><p>Kết quả trắc nghiệm ngày 28/09/2026 · I · A · S</p></div>${Button({label:'Làm lại',type:'ghost',size:'s'})}</div><div class="hn-list-toolbar hn-list-toolbar--career"><button class="hn-filter-trigger" type="button" data-open-filter>${Icon('sliders-horizontal',{size:16})}<span>Lọc nghề</span></button><strong>24 <span>nghề khớp</span></strong><span class="hn-control-spacer"></span>${Select('Phù hợp nhất',['Phù hợp nhất','Lương cao nhất','Tên A–Z'])}</div><div class="hn-job-results">${jobs.map((x,i)=>`<div data-job-card="${i}">${JobCard(x)}</div>`).join('')}</div>${Button({label:'Xem thêm 6 nghề',type:'secondary',icon:false})}</section></main>${Footer(updated())}${mobileTab('career')}<div data-filter-sheet hidden>${BottomSheetFilter(`<h2 class="hn-h3">Lọc nghề</h2>${careerFilters()}`,24)}</div></div>`;
}

export function CareerDetailPage():string {
  const tasks=['Phỏng vấn người dùng để hiểu họ cần gì','Vẽ luồng thao tác, khung trang (wireframe)','Thiết kế giao diện chi tiết trên Figma','Làm bản mẫu bấm thử được (prototype)','Cho người dùng thử, ghi lại chỗ họ lúng túng','Bàn giao thiết kế cho lập trình viên, theo đến khi xong'];
  const day=[['9:00','Xem lại ghi chú 5 buổi thử nghiệm người dùng'],['10:00','Vẽ lại luồng đặt hàng cho bớt 2 bước'],['14:00','Trình bày phương án với quản lý sản phẩm'],['16:00','Bàn giao file Figma, giải thích cho lập trình viên']];
  return `<div class="hn-overlay-page hn-career-overlay"><div class="hn-scrim" data-close-overlay></div><aside class="hn-drawer" role="dialog" aria-modal="true" aria-labelledby="job-title"><header><div><span class="hn-eyebrow">Công nghệ thông tin</span><span class="hn-stamp">A · I</span></div><button class="hn-touch44" data-close-overlay aria-label="Đóng">${Icon('x',{size:20})}</button></header><h1 id="job-title" class="hn-h1">Thiết kế UI/UX</h1><p class="hn-accent-m">UI/UX Designer</p><p class="hn-body-l">Thiết kế cách app, web trông ra sao và dùng có dễ không.</p><section><div class="hn-career-salary"><div><small class="hn-caption">Lương thị trường</small><strong class="hn-data-bold">8 – 35 tr/tháng</strong></div><div class="hn-career-salary__track"><img src="${careerRange}" width="126" height="24" alt=""></div><div class="hn-career-salary__ticks"><span>0</span><span>20</span><span>40</span><span>60</span><span>80+ tr</span></div><p><img src="${careerEntryDot}" width="8" height="8" alt="">Mới ra trường 8–14 tr · 5 năm+ 18–35 tr</p></div></section><section><h2 class="hn-h3">6 việc chính</h2><ol class="hn-task-list">${tasks.map((x,i)=>`<li><strong><img src="${careerResponsibilityPanel}" width="40" height="30" alt=""><span>${String(i+1).padStart(2,'0')}</span></strong><span>${x}</span></li>`).join('')}</ol></section><section><h2 class="hn-h3">Một ngày làm việc</h2><div class="hn-day-timeline">${day.map(([t,x],i)=>TimelineDayRow({time:t,activity:x,position:i===day.length-1?'last':'middle',tone:i===1?'spark':'primary'})).join('')}</div></section><section><h2 class="hn-h3">Kỹ năng cần có</h2><div class="hn-skill-pills">${['Figma thành thạo','Hiểu tâm lý người dùng','Trình bày, bảo vệ ý tưởng','Hiểu cơ bản cách lập trình vận hành'].map(SkillChip).join('')}</div></section><aside class="hn-real-talk"><strong>Lời thật</strong><p>Thiết kế đẹp chưa đủ, phải chứng minh được người dùng thao tác dễ hơn. Bị sửa nhiều vòng là bình thường.</p></aside><section class="hn-career-paywall"><div class="hn-career-paywall__preview" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="hn-career-paywall__body"><span>${Icon('lock-keyhole',{size:22})}</span><div><h3>Ngành học, khối thi, lộ trình thăng tiến</h3><p>3 ngành nên học (Thiết kế đồ hoạ, Công nghệ đa phương tiện, Tâm lý học) kèm khối xét tuyển, nơi làm việc và lộ trình từ thực tập đến trưởng nhóm.</p></div></div><div class="hn-career-paywall__actions">${Button({label:'Mở khoá 199k/năm',type:'spark',attrs:'data-route="#/thanh-toan"'})}<small class="hn-caption">≈ 16.600đ/tháng · hoàn tiền trong 7 ngày</small></div></section><div class="hn-career-detail-actions">${Button({label:'Xem học bổng ngành Thiết kế',attrs:'data-route="#/hoc-bong"'})}${Button({label:'Lưu nghề',type:'secondary',attrs:'data-save'})}</div></aside></div>`;
}

export function QuizPage():string {
  const options=[['A','Rất muốn thử ngay'],['B','Cũng được, nếu có người hướng dẫn'],['C','Không hứng thú lắm'],['D','Không thích']];
  return `<div class="hn-quiz-page"><header class="hn-quiz-mobile-header"><a class="hn-touch44" href="${ROUTES.home.hash}" aria-label="Quay lại">${Icon('arrow-left',{size:22})}</a><strong>Trắc nghiệm</strong><span>Câu 14 / 36</span></header><header class="hn-quiz-bar"><a href="${ROUTES.home.hash}" aria-label="Hướng Nghiệp">${Logo()}</a><strong>Trắc nghiệm Holland</strong><span>Câu 14 / 36 · còn khoảng 4 phút</span><button data-route="${ROUTES.home.hash}">Lưu và thoát</button></header><main class="hn-quiz-layout"><section class="hn-quiz-number"><span class="hn-quiz-number__door" aria-hidden="true">${DoorPanel({width:400,height:700})}</span><span class="hn-quiz-number__spark" aria-hidden="true">${Spark(110)}</span><strong>14</strong><small>/ 36</small><span class="hn-note-hand">không có đáp án đúng sai,<br>chọn theo cảm giác đầu tiên</span></section><section class="hn-quiz-question"><p class="hn-eyebrow">BẠN THẤY VIỆC NÀY THẾ NÀO?</p><h1 class="hn-h1">Vẽ lại bố cục một trang web cho dễ nhìn, dễ bấm hơn</h1><div class="hn-quiz-options" role="radiogroup" aria-label="Mức độ yêu thích">${options.map(([l,a])=>QuizOption(a,l,false,'q14')).join('')}</div><div class="hn-quiz-actions">${Button({label:'Câu trước',type:'secondary',icon:'arrow-right',attrs:'data-quiz-prev'})}<span class="hn-body-s">Phím A–D để chọn, Enter để tiếp</span>${Button({label:'Câu tiếp',attrs:'data-quiz-next'})}</div></section></main></div>`;
}

function scoreBar(letter:string,score:number,label:string,active=false):string {
  return `<div class="hn-score-col${active?' is-active':''}" style="--score:${score}"><div class="hn-score-col__bar"><strong>${letter}</strong><span>${score}/30</span></div><small>${label}</small></div>`;
}

export function QuizResultPage():string {
  return `<div class="hn-page hn-page--result">${NavDesktop('Trắc nghiệm')}${NavMobile()}<main><section class="hn-result-hero"><div class="hn-container"><p class="hn-eyebrow">KẾT QUẢ CỦA MINH · 28/09/2026</p><div class="hn-result-grid"><div><strong class="hn-result-code">I · A · S</strong><h1 class="hn-display-l">Bạn là người<br><em>tò mò và giàu tưởng tượng.</em></h1><p class="hn-body-l">Nghiên cứu (I) và Nghệ thuật (A) nổi trội, kèm Xã hội (S). Bạn hợp việc cần tìm hiểu sâu rồi làm ra thứ mới, có người dùng thật.</p></div><div class="hn-score-chart">${scoreBar('R',8,'Kỹ thuật')}${scoreBar('I',27,'Nghiên cứu',true)}${scoreBar('A',25,'Nghệ thuật',true)}${scoreBar('S',19,'Xã hội',true)}${scoreBar('E',11,'Quản lý')}${scoreBar('C',9,'Nghiệp vụ')}</div></div><span class="hn-note-hand">3 cột xanh = mã của bạn</span></div></section><section class="hn-section hn-section--surface"><div class="hn-container"><p class="hn-eyebrow">BƯỚC 2 · CHỌN NGÀNH</p><h2 class="hn-h1">12 nghề hợp mã I · A · S</h2><div class="hn-result-jobs">${jobs.slice(0,3).map((j,i)=>`<div data-job-card="${i}">${JobCard(j)}</div>`).join('')}</div></div></section><section class="hn-section hn-section--sunken"><div class="hn-container"><p class="hn-eyebrow">NGÀNH HỌC NÊN XEM</p><h2 class="hn-h1">Ngành và khối xét tuyển gợi ý</h2><div class="hn-major-grid">${[['Thiết kế đồ hoạ','Khối H00, V00'],['Công nghệ đa phương tiện','Khối A00, A01, D01'],['Tâm lý học','Khối B00, C00, D01'],['Kiến trúc','Khối V00, V01'],['Khoa học máy tính','Khối A00, A01']].map(([a,b])=>`<article><strong>${a}</strong><span>${b}</span></article>`).join('')}</div></div></section><section class="hn-next-step"><div class="hn-container">${Button({label:'Lưu vào Lộ trình của tôi',attrs:`data-route="${ROUTES.journey.hash}"`})}${Button({label:'Gửi kết quả cho bố mẹ',type:'secondary'})}${Button({label:'Xem học bổng nhóm ngành này',type:'ghost',attrs:`data-route="${ROUTES.scholarships.hash}"`})}<span class="hn-note-hand">bước 1/4 xong rồi!</span></div></section></main>${Footer(updated())}${mobileTab('mine')}</div>`;
}

export function CheckoutPage():string {
  const methods=[['VNPay QR','Quét mã bằng app ngân hàng'],['Ví MoMo','Mở app MoMo để xác nhận'],['Thẻ ATM nội địa','Napas, có Internet Banking'],['Thẻ quốc tế','Visa, Mastercard, JCB']];
  return `<div class="hn-checkout-page"><header class="hn-checkout-header"><a href="${ROUTES.home.hash}" aria-label="Hướng Nghiệp">${Logo()}</a><span>${Icon('shield-check',{size:16})} Thanh toán an toàn</span><a href="tel:0905247365">${Icon('phone',{size:16})} 0905 247 365</a></header><main class="hn-checkout-layout"><section class="hn-checkout-form"><h1 class="hn-h1">Mở khoá gói năm</h1><section class="hn-checkout-step hn-checkout-step--heading"><div>${FormSectionHeading('Tài khoản','account')}<div class="hn-account-row">${Icon('user-round',{size:18})}<strong>minh.hs2008@gmail.com</strong><button>Đổi email</button></div><p class="hn-checkout-mail">${Icon('mail',{size:18})}Mật khẩu và hướng dẫn đăng nhập gửi về email này sau khi thanh toán.</p></div></section><section class="hn-checkout-step"><span class="hn-step-number">02</span><div><h2 class="hn-h3">Phương thức thanh toán</h2><div class="hn-payment-methods">${methods.map(([a,b],i)=>`<label><input type="radio" name="payment"${i===0?' checked':''}>${SummaryText(a,b)}</label>`).join('')}</div><div class="hn-qr-panel"><div class="hn-qr-placeholder" aria-label="Mã QR mô phỏng"></div><div><strong>Quét mã để trả 199.000đ</strong><p>Nội dung chuyển khoản tự điền: HN 2026 MINH. Mã hết hạn sau <span data-countdown>14:59</span>.</p><small>Chưa thấy xác nhận sau 5 phút? Gọi 0905 247 365.</small></div></div></div></section><section class="hn-checkout-step hn-checkout-step--heading"><div>${FormSectionHeading('Hoá đơn (không bắt buộc)','invoice')}<p>Cần hoá đơn cho công ty? Điền mã số thuế và tên đơn vị, hoá đơn gửi qua email trong 3 ngày làm việc.</p><label class="hn-field"><span>Mã số thuế</span><span class="hn-field__with-icon">${Icon('receipt-text',{size:18})}<input placeholder="0319512450"></span></label><label class="hn-field"><span>Tên đơn vị</span><input placeholder="Công ty Cổ phần Công nghệ BAIKA"></label></div></section></section><aside class="hn-order-summary"><p class="hn-eyebrow">GÓI NĂM HƯỚNG NGHIỆP</p><h2>199.000đ <small>/ năm</small></h2><p>Hiệu lực 30/09/2026 – 30/09/2027. Không tự gia hạn.</p><ul>${['Tiêu chí, hồ sơ mẫu 172 học bổng','Visa, chứng minh tài chính 32 nước','Nhiệm vụ đủ 299 nghề','Lộ trình 12 tháng, nhắc hạn qua email'].map(x=>`<li>${Icon('check',{size:18})}<span>${x}</span></li>`).join('')}</ul><label class="hn-coupon"><input placeholder="Mã giảm giá"><button>Áp dụng</button></label><div class="hn-total"><span>Tổng thanh toán</span><strong>199.000đ</strong></div>${Button({label:'Tôi đã thanh toán',type:'spark',attrs:`data-route="${ROUTES['checkout-success'].hash}"`})}<p class="hn-caption">Chưa dùng tới phần trả phí, hoàn tiền trong 7 ngày. Thanh toán nghĩa là bạn đồng ý Điều khoản sử dụng của Công ty CP Công nghệ BAIKA.</p><span class="hn-note-hand">tài khoản về email<br>trong 1 phút</span></aside></main></div>`;
}

export function CheckoutSuccessPage():string {
  return `<div class="hn-center-overlay"><section class="hn-success-card" role="dialog" aria-modal="true"><div class="hn-success-icon">${Icon('circle-check-big',{size:28})}</div><h1 class="hn-h2">Xong rồi, cửa đã mở!</h1><p>Tài khoản gói năm đã gửi về <strong>minh.hs2008@gmail.com</strong>. Hạn dùng đến 30/09/2027.</p>${[['Mật khẩu tạm','Đổi ngay ở lần đăng nhập đầu'],['Nhắc hạn học bổng','Đã bật cho 3 học bổng bạn lưu'],['Lộ trình của tôi','Bước 1/4 đã xong: trắc nghiệm']].map(([a,b])=>AccountSuccessItem(a,b)).join('')}${Button({label:'Vào lộ trình của tôi',attrs:`data-route="${ROUTES.journey.hash}"`})}</section></div>`;
}

export function LoginPage():string {
  return `<div class="hn-overlay-page"><div class="hn-scrim" data-close-overlay></div><section class="hn-modal hn-login-modal" data-login-view="providers" role="dialog" aria-modal="true" aria-labelledby="login-title"><button class="hn-modal-close" data-close-overlay aria-label="Đóng">${Icon('x',{size:22})}</button><div class="hn-login-logo">${Logo('stacked',0.62)}</div><h1 id="login-title" class="hn-h2">Đăng nhập để lưu lộ trình</h1><p>Lần đầu đăng nhập sẽ tự tạo tài khoản miễn phí. Không cần mật khẩu.</p><div class="hn-auth-stack">${AuthButton('google','Tiếp tục với Google')}${AuthButton('facebook','Tiếp tục với Facebook')}${AuthButton('phone','Tiếp tục với số điện thoại')}${AuthButton('email','Tiếp tục với email')}</div><p class="hn-caption">Tiếp tục nghĩa là bạn đồng ý Điều khoản sử dụng và Chính sách bảo mật của BAIKA.</p></section><section class="hn-modal hn-otp-modal" data-login-view="otp" hidden role="dialog" aria-modal="true" aria-labelledby="otp-title"><button class="hn-back-inline" data-login-back>${Icon('arrow-left',{size:18})}<span>Đổi số điện thoại</span></button><h2 id="otp-title" class="hn-h2">Nhập mã 6 số</h2><p>Đã gửi tin nhắn tới 0905 ••• 365. Mã có hiệu lực 5 phút.</p><div class="hn-otp-inputs">${Array.from({length:6},(_,i)=>OTPDigit(i)).join('')}</div><div class="hn-otp-footer"><span>Gửi lại mã sau</span><strong>00:42</strong></div>${Button({label:'Xác nhận',attrs:`data-route="${ROUTES.journey.hash}"`})}<span class="hn-note-hand">mã tự điền trên điện thoại<br>nếu trình duyệt hỗ trợ</span></section></div>`;
}

export function JourneyPage():string {
  const deadlines=[{date:'06/10',name:'Chevening 2027–2028',meta:'Anh · Toàn phần',statusLabel:'Còn 6 ngày'},{date:'15/10',name:'Australia Awards',meta:'Úc · Toàn phần',statusLabel:'Còn 15 ngày'},{date:'09/12',name:'Erasmus Mundus',meta:'Châu Âu',statusLabel:'Còn 70 ngày',status:'open' as const}];
  return `<div class="hn-page hn-page--journey">${NavDesktop('')}${NavMobile()}<main><section class="hn-journey-hero"><div class="hn-container"><p class="hn-eyebrow">LỘ TRÌNH CỦA TÔI · CẬP NHẬT 30/09/2026</p><h1 class="hn-display-l">Chào Minh,<br><em>bậc 2 đang chờ bạn.</em></h1><p class="hn-body-l">Bạn đã biết mình hợp nhóm I · A · S. Tuần này đọc kỹ 3 nghề gợi ý rồi chọn 1 ngành để đi tiếp.</p><strong class="hn-progress-badge"><span aria-hidden="true">${RisingPanel(110,82)}</span><b>1/4</b></strong></div></section><section class="hn-container hn-journey-dashboard"><div class="hn-roadmap-card"><h2 class="hn-h2">4 bậc của bạn</h2><div class="hn-journey-list hn-journey-list--large">${JourneyStep('Hiểu mình','Trắc nghiệm Holland · I · A · S','done')}${JourneyStep('Chọn nghề & ngành','Đọc 3 nghề, chọn 1 ngành','current')}${JourneyStep('Chọn trường & học bổng','So sánh lựa chọn, lưu hạn','next')}${JourneyStep('Chuẩn bị hồ sơ','Lộ trình 12 tháng','next')}</div></div><div class="hn-journey-right"><div class="hn-week-card"><header><h2 class="hn-h3">Việc tuần này</h2><strong>2 / 4 xong</strong></header>${[['Làm trắc nghiệm Holland','hạn 28/09',true],['Đọc nghề Thiết kế UI/UX','hạn 29/09',true],['Đọc nghề Lập trình viên front-end','hạn 02/10',false],['Chọn 1 ngành, lưu vào lộ trình','hạn 04/10',false]].map(([a,b,done])=>JourneyTaskRow(String(a),String(b),Boolean(done))).join('')}${Button({label:'Mở nghề gợi ý',type:'secondary',attrs:`data-route="${ROUTES.careers.hash}"`})}</div><section class="hn-saved-deadlines"><h2 class="hn-h2">Học bổng đã lưu · nhắc hạn đang bật</h2><div>${deadlines.map(d=>DeadlineTicket(d)).join('')}</div><span class="hn-note-hand">Chevening cần 2 năm đi làm,<br>ghi chú lại cho kế hoạch sau nhé</span></section></div></section></main>${Footer(updated())}${mobileTab('mine')}</div>`;
}

export function renderRoute(key:RouteKey):string {
  switch(key){
    case 'scholarships': return ScholarshipsPage();
    case 'scholarship-detail': return ScholarshipDetailPage();
    case 'study-abroad': return StudyAbroadPage();
    case 'country-detail': return CountryDetailPage();
    case 'compare': return ComparePage();
    case 'careers': return CareersPage();
    case 'career-detail': return CareerDetailPage();
    case 'quiz': return QuizPage();
    case 'quiz-result': return QuizResultPage();
    case 'checkout': return CheckoutPage();
    case 'checkout-success': return CheckoutSuccessPage();
    case 'login': return LoginPage();
    case 'journey': return JourneyPage();
    default: return '';
  }
}

function go(hash:string){
  if(location.hash===hash){ window.dispatchEvent(new HashChangeEvent('hashchange')); }
  else location.hash=hash;
}

function toast(message:string,undo?:string){
  document.querySelector('.hn-toast')?.remove();
  const host=document.createElement('div');
  host.innerHTML=Toast(message,undo);
  const node=host.firstElementChild as HTMLElement|null;
  if(node){ document.body.appendChild(node); window.setTimeout(()=>node.remove(),4000); }
}

function trapFocus(container:HTMLElement){
  const selector='button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])';
  const items=Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(x=>!x.hasAttribute('disabled')&&!x.hidden);
  items[0]?.focus();
  container.addEventListener('keydown',e=>{
    if(e.key!=='Tab'||items.length<2) return;
    const first=items[0],last=items[items.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  });
}

export function bindPageInteractions(root:HTMLElement,key:RouteKey):void {
  root.querySelectorAll<HTMLElement>('[data-route]').forEach(el=>el.addEventListener('click',()=>go(el.dataset.route||ROUTES.home.hash)));
  root.querySelectorAll<HTMLElement>('[data-back]').forEach(el=>el.addEventListener('click',()=>key==='career-detail'?window.dispatchEvent(new Event('hn-close-career')):history.back()));
  root.querySelectorAll<HTMLElement>('[data-close-overlay]').forEach(el=>el.addEventListener('click',()=>history.back()));
  root.querySelectorAll<HTMLElement>('[data-save]').forEach(el=>el.addEventListener('click',()=>toast('Đã lưu','Hoàn tác')));
  root.querySelectorAll<HTMLElement>('[data-share]').forEach(el=>el.addEventListener('click',async()=>{try{if(navigator.share) await navigator.share({title:document.title,url:location.href});else await navigator.clipboard.writeText(location.href);toast('Đã sao chép liên kết');}catch{}}));
  root.querySelectorAll<HTMLElement>('[data-reminder]').forEach(el=>el.addEventListener('click',()=>toast('Đã bật nhắc hạn qua email')));
  root.querySelectorAll<HTMLElement>('[data-save-filter]').forEach(el=>el.addEventListener('click',()=>toast('Đã lưu bộ lọc')));

  const sheetHost=root.querySelector<HTMLElement>('[data-filter-sheet]');
  root.querySelectorAll<HTMLElement>('[data-open-filter]').forEach(el=>el.addEventListener('click',()=>{if(sheetHost){sheetHost.hidden=false; const sheet=sheetHost.querySelector<HTMLElement>('.hn-bottom-sheet'); if(sheet) trapFocus(sheet);}}));
  sheetHost?.addEventListener('click',e=>{if((e.target as HTMLElement).closest('.hn-button--primary')) sheetHost.hidden=true;});

  if(key==='study-abroad'){
    const grid=root.querySelector<HTMLElement>('[data-country-grid]');
    const dock=root.querySelector<HTMLElement>('.hn-compare-dock');
    const cards=Array.from(grid?.querySelectorAll<HTMLElement>('.hn-country-card')||[]);
    const update=()=>{
      const selected=cards.flatMap((c,id)=>c.getAttribute('aria-selected')==='true'?[{id,name:c.querySelector('h3')?.textContent||''}]:[]);
      if(dock){
        dock.hidden=selected.length===0;
        const bar=dock.querySelector('.hn-compare-bar');
        if(bar) bar.outerHTML=CompareBar(selected.length,selected);
        dock.querySelector<HTMLButtonElement>('.hn-button')?.addEventListener('click',()=>go(ROUTES.compare.hash));
        dock.querySelectorAll<HTMLButtonElement>('[data-remove-country]').forEach(b=>b.addEventListener('click',()=>{const c=cards[Number(b.dataset.removeCountry)];c.setAttribute('aria-selected','false');paint(c);update();}));
      }
    };
    const paint=(card:HTMLElement)=>{const on=card.getAttribute('aria-selected')==='true';const b=card.querySelector('button');if(b){b.setAttribute('aria-pressed',String(on));b.innerHTML=`${Icon(on?'check':'plus',{size:14})}<span>${on?'Đã chọn so sánh':'Thêm vào so sánh'}</span>`;}};
    cards.forEach((card,i)=>{
      card.querySelector('button')?.addEventListener('click',()=>{
        const on=card.getAttribute('aria-selected')==='true';
        if(!on&&cards.filter(c=>c.getAttribute('aria-selected')==='true').length>=3){toast('Chỉ so sánh tối đa 3 nước');return;}
        card.setAttribute('aria-selected',String(!on));paint(card);update();
      });
      card.querySelector('h3')?.addEventListener('click',()=>{if(i===1)go(ROUTES['country-detail'].hash);});
      const cost=card.querySelector('a');if(cost&&i===1)cost.setAttribute('href',ROUTES['country-detail'].hash);
    });
    update();
  }

  if(key==='careers'||key==='quiz-result'){
    root.querySelectorAll<HTMLElement>('[data-job-card]').forEach(el=>el.addEventListener('click',e=>{if((e.target as HTMLElement).closest('button,a')) return; go(ROUTES['career-detail'].hash);}));
    root.querySelectorAll<HTMLElement>('[data-job-card] .hn-button').forEach(el=>el.addEventListener('click',()=>go(ROUTES['career-detail'].hash)));
  }

  if(key==='scholarships'){
    root.querySelectorAll<HTMLElement>('.hn-scholarship-card').forEach(card=>card.addEventListener('click',e=>{if((e.target as HTMLElement).closest('a,button')) return; const a=card.querySelector<HTMLAnchorElement>('a'); if(a) go(a.getAttribute('href')||ROUTES['scholarship-detail'].hash);}));
  }

  if(key==='quiz'){
    const opts=Array.from(root.querySelectorAll<HTMLElement>('.hn-quiz-option'));
    let chosen=-1;
    const choose=(index:number)=>{opts.forEach((o,i)=>{o.setAttribute('aria-checked',String(i===index)); const input=o.querySelector<HTMLInputElement>('input'); if(input) input.checked=i===index;});chosen=index;sessionStorage.setItem('hn-quiz-q14',String(index));};
    opts.forEach((o,i)=>{o.addEventListener('click',()=>choose(i));o.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();choose(i);}});});
    const saved=Number(sessionStorage.getItem('hn-quiz-q14')); if(Number.isInteger(saved)&&saved>=0&&saved<opts.length) choose(saved);
    const next=()=>{if(chosen<0){toast('Chọn một phương án trước');return;} go(ROUTES['quiz-result'].hash);};
    root.querySelector('[data-quiz-next]')?.addEventListener('click',next);
    document.addEventListener('keydown',e=>{const map:{[k:string]:number}={a:0,b:1,c:2,d:3}; if(map[e.key.toLowerCase()]!==undefined) choose(map[e.key.toLowerCase()]); else if(e.key==='Enter') next();},{once:false});
  }

  if(key==='login'){
    const provider=root.querySelector<HTMLElement>('[data-login-view="providers"]');
    const otp=root.querySelector<HTMLElement>('[data-login-view="otp"]');
    root.querySelector('[data-provider="phone"]')?.addEventListener('click',()=>{if(provider&&otp){provider.hidden=true;otp.hidden=false;trapFocus(otp);}});
    root.querySelector('[data-login-back]')?.addEventListener('click',()=>{if(provider&&otp){otp.hidden=true;provider.hidden=false;trapFocus(provider);}});
    root.querySelectorAll<HTMLInputElement>('.hn-otp-inputs input').forEach((input,i,arr)=>input.addEventListener('input',()=>{if(input.value&&arr[i+1])arr[i+1].focus();}));
  }

  if(key==='career-detail'){
    const modal=root.querySelector<HTMLElement>('[role="dialog"]');
    if(modal) trapFocus(modal);
  }
  if(['compare','login','checkout-success'].includes(key)){
    const modal=root.querySelector<HTMLElement>('[role="dialog"]'); if(modal) trapFocus(modal);
    const onEsc=(e:KeyboardEvent)=>{if(e.key==='Escape'){window.removeEventListener('keydown',onEsc);history.back();}}; window.addEventListener('keydown',onEsc);
  }

  if(key==='checkout'){
    const countdown=root.querySelector<HTMLElement>('[data-countdown]'); let secs=14*60+59;
    if(countdown){const id=window.setInterval(()=>{secs--; if(secs<0){window.clearInterval(id);countdown.textContent='Hết hạn';return;}countdown.textContent=`${String(Math.floor(secs/60)).padStart(2,'0')}:${String(secs%60).padStart(2,'0')}`;},1000);}
  }
}
