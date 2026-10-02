import {
  Button,
  ChipFilter,
  CountryPostcard,
  DeadlineTicket,
  Footer,
  JobCard,
  NavDesktop,
  NavMobile,
  PricingTicket,
  ScholarshipCard,
  SearchField,
  Spark,
  DoorPanel,
  RisingPanel,
} from './components/index.js';
import { hydrateIcons, Icon, type IconName } from './icons/index.js';

const pathIcons:Record<string,IconName[]>={'01':['timer','sparkles','save'],'02':['calendar-clock','file-text','bell-ring'],'03':['globe','badge-dollar-sign','refresh-cw']};
const stairPaths: Record<string,{viewW:number;viewH:number;path:string;fill:string}> = {
  '01': { viewW:282, viewH:260, fill:'var(--hn-brand-primary-soft)', path:'M0 48C0 33.33 7.3 25.33 21.9 24L260.1 2C274.7 .67 282 7.33 282 22V212C282 226.67 274.7 234.67 260.1 236L21.9 258C7.3 259.33 0 252.67 0 238V48Z' },
  '02': { viewW:282, viewH:330, fill:'var(--hn-brand-primary-soft)', path:'M0 55C0 40.33 7.3 32.13 21.9 30.4L260.1 2.6C274.7 .87 282 7.33 282 22V275C282 289.67 274.7 297.87 260.1 299.6L21.9 327.4C7.3 329.13 0 322.67 0 308V55Z' },
  '03': { viewW:282, viewH:400, fill:'var(--hn-brand-primary-soft)', path:'M0 62C0 47.33 7.27 38.97 21.8 36.9L260.2 3.1C274.73 1.03 282 7.33 282 22V338C282 352.67 274.73 361.03 260.2 363.1L21.8 396.9C7.27 398.97 0 392.67 0 378V62Z' },
  '04': { viewW:282, viewH:470, fill:'var(--hn-brand-primary)', path:'M0 69C0 54.33 7.23 45.8 21.7 43.4L260.3 3.6C274.77 1.2 282 7.33 282 22V401C282 415.67 274.77 424.2 260.3 426.6L21.7 466.4C7.23 468.8 0 462.67 0 448V69Z' },
};
function stairPanel(step:string):string {
  const p=stairPaths[step];
  return `<svg class="hn-stair__shape" viewBox="0 0 ${p.viewW} ${p.viewH}" preserveAspectRatio="none" aria-hidden="true"><path d="${p.path}" fill="${p.fill}"/></svg>`;
}


const deadlineTickets = [
  { date:'06/10', name:'Chevening 2027–2028', meta:'Anh · Thạc sĩ · Toàn phần', statusLabel:'Còn 6 ngày' },
  { date:'15/10', name:'Australia Awards', meta:'Úc · Thạc sĩ · Toàn phần', statusLabel:'Còn 15 ngày' },
  { date:'31/10', name:'MEXT Nhật Bản', meta:'Nhật Bản · Đại học · Toàn phần', statusLabel:'Còn 31 ngày' },
  { date:'09/12', name:'Erasmus Mundus', meta:'Châu Âu · Thạc sĩ · Toàn phần', statusLabel:'Còn 70 ngày' },
];

const scholarships = [
  {
    title:'Học bổng Chevening 2027–2028', provider:'Chính phủ Anh (FCDO) · 1 năm thạc sĩ tại Vương quốc Anh',
    eyebrow:'THẠC SĨ · TOÀN PHẦN', countryCode:'UK', valueText:'Học phí + sinh hoạt phí + vé máy bay',
    deadline:'Hạn 06/10/2026', statusLabel:'Còn 6 ngày', status:'soon' as const, access:'free' as const, href:'#/hoc-bong/chevening',
  },
  {
    title:'Australia Awards Scholarships', provider:'Chính phủ Úc · Chương trình sau đại học',
    eyebrow:'THẠC SĨ · TOÀN PHẦN', countryCode:'AU', valueText:'Học phí + sinh hoạt + vé máy bay + bảo hiểm',
    deadline:'Hạn 15/10/2026', statusLabel:'Còn 15 ngày', status:'open' as const, access:'free' as const, href:'#/hoc-bong/chevening',
  },
  {
    title:'Erasmus Mundus Joint Masters', provider:'Liên minh Châu Âu · Chương trình thạc sĩ liên quốc gia',
    eyebrow:'THẠC SĨ · TOÀN PHẦN', countryCode:'EU', valueText:'Học phí + trợ cấp sinh hoạt + di chuyển',
    deadline:'Hạn 09/12/2026', statusLabel:'Đang mở', status:'open' as const, access:'locked' as const,
  },
];

const countries = [
  { country:'Nhật Bản', code:'JP', cost:'15.000–25.000 USD/năm', lang:'Nhật, Anh', work:'28 giờ/tuần', count:'14 chương trình', newPolicy:true },
  { country:'Hàn Quốc', code:'KR', cost:'12.000–22.000 USD/năm', lang:'Hàn, Anh', work:'25 giờ/tuần', count:'11 chương trình', newPolicy:false, compare:true },
  { country:'Đức', code:'DE', cost:'11.000–18.000 USD/năm', lang:'Đức, Anh', work:'20 giờ/tuần', count:'9 chương trình', newPolicy:true, compare:true },
  { country:'Úc', code:'AU', cost:'28.000–46.000 USD/năm', lang:'Anh', work:'48 giờ/2 tuần', count:'18 chương trình', newPolicy:false },
];

const jobs = [
  { title:'Kỹ sư phần mềm', group:'Công nghệ thông tin', holland:'I · C · R', summary:'Thiết kế, viết và kiểm thử phần mềm. Làm việc cùng nhóm sản phẩm để biến yêu cầu thành tính năng chạy được.', salary:{ min:18,max:45,entryMin:12,entryMax:18,rangeText:'18 – 45 tr/tháng',note:'Mới ra trường 12–18 tr · 5 năm+ 35–60 tr' } },
  { title:'Thiết kế UI/UX', group:'Thiết kế & sản phẩm', holland:'A · I · S', summary:'Nghiên cứu người dùng, tổ chức luồng và tạo giao diện dễ hiểu cho sản phẩm số.', salary:{ min:15,max:38,entryMin:10,entryMax:15,rangeText:'15 – 38 tr/tháng',note:'Mới ra trường 10–15 tr · 5 năm+ 30–50 tr' } },
  { title:'Chuyên viên Marketing', group:'Kinh doanh & truyền thông', holland:'E · A · S', summary:'Lập kế hoạch chiến dịch, nghiên cứu khách hàng và đo hiệu quả tăng trưởng thương hiệu.', salary:{ min:12,max:32,entryMin:8,entryMax:12,rangeText:'12 – 32 tr/tháng',note:'Mới ra trường 8–12 tr · 5 năm+ 25–40 tr' } },
];

function pathCard(index:string,title:string,desc:string,bullets:string[],buttonLabel:string,buttonType:'primary'|'secondary'|'ghost'|'spark'='primary'){
  return `<article class="hn-path-card">
    <div class="hn-path-card__marker">${RisingPanel(72,52)}<strong>${index}</strong></div>
    <h3 class="hn-h3">${title}</h3>
    <p class="hn-body-m">${desc}</p>
    <ul class="hn-path-card__list">${bullets.map((x,i)=>`<li>${Icon(pathIcons[index][i],{size:18,className:'hn-path__check'})}<span>${x}</span></li>`).join('')}</ul>
    ${Button({label:buttonLabel,type:buttonType})}
  </article>`;
}

function sectionEyebrow(label:string){
  return `<div class="hn-home-eyebrow">${Spark(18)}<span class="hn-eyebrow">${label}</span></div>`;
}

function mobileTabBar(){
  return `<nav class="hn-mobile-tabbar" aria-label="Điều hướng chính trên mobile">
    <a aria-current="page" href="#top">${Icon('house',{size:22,className:'hn-mobile-tabbar__icon'})}<small>Trang chủ</small></a>
    <a href="#scholarships">${Icon('graduation-cap',{size:22,className:'hn-mobile-tabbar__icon'})}<small>Học bổng</small></a>
    <a href="#study-abroad">${Icon('plane',{size:22,className:'hn-mobile-tabbar__icon'})}<small>Du học</small></a>
    <a href="#careers">${Icon('briefcase-business',{size:22,className:'hn-mobile-tabbar__icon'})}<small>Nghề</small></a>
    <a href="#/lo-trinh">${Icon('user-round',{size:22,className:'hn-mobile-tabbar__icon'})}<small>Của tôi</small></a>
  </nav>`;
}

export function HomePage(): string {
  const updated=(window.HN_DATA && typeof window.HN_DATA==='object' && 'upd' in window.HN_DATA) ? String(window.HN_DATA.upd || '09/2026') : '09/2026';
  return `
    <div id="top" class="hn-home">
      ${NavDesktop('')}
      ${NavMobile()}

      <main>
        <section class="hn-home-hero">
          <div class="hn-home-hero__door" aria-hidden="true">${DoorPanel({width:520,height:700})}</div>
          <div class="hn-home-hero__step" aria-hidden="true">${RisingPanel(260,96)}</div>
          <span class="hn-home-hero__spark" aria-hidden="true">${Spark(120)}</span>
          <div class="hn-home-hero__content hn-container">
            <div class="hn-home-hero__copy">
              ${sectionEyebrow('HƯỚNG NGHIỆP · HỌC BỔNG · DU HỌC')}
              <h1 class="hn-display-xl">Mở cửa, thấy lối đi<br><em>của riêng bạn.</em></h1>
              <p class="hn-body-l">172 học bổng, 32 nước du học, 299 nghề kèm dải lương. Xem lướt miễn phí. Khi cần đi sâu: tiêu chí, hồ sơ mẫu, lộ trình 12 tháng, chỉ 199k một năm.</p>
              <div class="hn-home-hero__search">${SearchField()}</div>
              <div class="hn-home-hero__chips">
                ${ChipFilter({label:'Học bổng toàn phần',count:24})}
                ${ChipFilter({label:'Du học',count:32})}
                ${ChipFilter({label:'Nghề & mức lương',count:299})}
                ${ChipFilter({label:'Trắc nghiệm 8 phút'})}
              </div>
              <div class="hn-home-stats" aria-label="Dữ liệu hiện có">
                <div><strong>172</strong><span>học bổng</span></div>
                <div><strong>218</strong><span>trường đại học</span></div>
                <div><strong>32</strong><span>nước du học</span></div>
                <div><strong>299</strong><span>nghề có lương</span></div>
              </div>
            </div>
            <div class="hn-home-hero__story">
              <article class="hn-story-card">
                <span class="hn-eyebrow">MINH · LỚP 12 · ĐÀ NẴNG</span>
                <p class="hn-body-s">Mã Holland của Minh</p>
                <strong class="hn-story-card__code">I · A · S</strong>
                <hr>
                <p class="hn-body-s">Hợp với: Thiết kế UI/UX, Kiến trúc sư, Tâm lý học</p>
                <a href="#/lo-trinh"><span>Xem 3 ngành, 5 học bổng</span>${Icon('arrow-right',{size:16})}</a>
              </article>
              <span class="hn-note-hand hn-story-note">8 phút là biết mình hợp nghề gì</span>
              <div class="hn-home-hero__deadline">${DeadlineTicket(deadlineTickets[0])}</div>
              <span class="hn-note-hand hn-deadline-note">hạn gần nhất, đừng để lỡ</span>
            </div>
          </div>
        </section>

        <section class="hn-entry-section hn-section--surface">
          <div class="hn-container">
            ${sectionEyebrow('BẠN ĐANG Ở ĐÂU?')}
            <h2 class="hn-h1">Ba lối vào, chọn cái <span class="hn-marker">giống bạn</span> nhất</h2>
            <div class="hn-path-grid">
              ${pathCard('01','Chưa biết mình hợp ngành gì','Trả lời 36 câu, nhận mã Holland và danh sách nghề hợp tính cách, kèm dải lương thật.',['36 câu, khoảng 8 phút','Gợi ý 12 nghề và ngành học','Lưu kết quả vào lộ trình'],'Làm trắc nghiệm')}
              ${pathCard('02','Đã có ngành, cần học bổng','Lọc 172 học bổng theo bậc học, mức tài trợ, khu vực. Nhắc hạn trước 14 ngày.',['Hạn nộp cập nhật 09/2026','Tiêu chí, hồ sơ cần chuẩn bị','Nhắc hạn qua email'],'Tìm học bổng','secondary')}
              ${pathCard('03','Muốn du học, lo chi phí','Đặt 3 nước cạnh nhau: học phí, sinh hoạt phí, giờ làm thêm, visa ở lại làm việc.',['32 nước, 6 khu vực','Chi phí quy ra USD mỗi năm','Thay đổi chính sách 2025–2026'],'So sánh chi phí','secondary')}
            </div>
          </div>
        </section>

        <section class="hn-deadlines-section hn-section--canvas" id="scholarships">
          <div class="hn-container">
            ${sectionEyebrow('SẮP HẾT HẠN')}
            <div class="hn-section-title-row"><div><h2 class="hn-h1">4 học bổng đóng trong <span class="hn-marker">70 ngày</span></h2><p class="hn-body-m">Xếp theo ngày đóng. Bấm vào vé để xem điều kiện và hồ sơ cần chuẩn bị.</p></div><a class="hn-text-link" href="#/hoc-bong"><span>Xem tất cả</span>${Icon('arrow-right',{size:16})}</a></div>
            <div class="hn-deadline-row">${deadlineTickets.map(x=>DeadlineTicket(x)).join('')}</div>
            <div class="hn-reminder-row"><p class="hn-body-m">Bật nhắc hạn: email trước 14 ngày và 3 ngày.</p>${Button({label:'Bật nhắc hạn',size:'s'})}</div>
          </div>
        </section>

        <section class="hn-featured-section hn-section--sunken">
          <div class="hn-container">
            ${sectionEyebrow('HỌC BỔNG TOÀN PHẦN')}
            <div class="hn-section-title-row"><div><h2 class="hn-h1">Được trả gần như <span class="hn-marker">mọi thứ</span></h2><p class="hn-body-m">Một số suất nổi bật đang mở. Thẻ khoá vẫn cho xem tên, giá trị và hạn nộp.</p></div><a class="hn-text-link" href="#/hoc-bong"><span>Xem tất cả</span>${Icon('arrow-right',{size:16})}</a></div>
            <div class="hn-scholarship-grid">${scholarships.map(x=>ScholarshipCard(x)).join('')}</div>
            <div class="hn-lock-note"><span>Thẻ có ổ khoá vẫn cho xem tên, giá trị, hạn nộp.</span><span>Tiêu chí chi tiết và hồ sơ mẫu nằm trong gói năm.</span></div>
          </div>
        </section>

        <section class="hn-country-section hn-section--sky" id="study-abroad">
          <div class="hn-container">
            ${sectionEyebrow('DU HỌC · 32 NƯỚC')}
            <div class="hn-section-title-row"><div><h2 class="hn-h1">Bưu thiếp được mở <span class="hn-marker">nhiều nhất</span></h2><p class="hn-body-m">Đặt cạnh nhau học phí, sinh hoạt phí, giờ làm thêm và cơ hội ở lại sau tốt nghiệp.</p></div><a class="hn-text-link" href="#/du-hoc"><span>Xem 32 nước</span>${Icon('arrow-right',{size:16})}</a></div>
            <div class="hn-country-grid">${countries.map((x,i)=>`<div class="${i%2?'is-lower':''}">${CountryPostcard(x)}</div>`).join('')}</div>
            <div class="hn-country-actions">${Button({label:'So sánh 2 nước',attrs:'data-route="#/du-hoc/so-sanh"'})}<span class="hn-body-s">Đang so: Hàn Quốc, Đức</span></div>
          </div>
        </section>

        <section class="hn-career-section hn-section--surface" id="careers">
          <div class="hn-container hn-career-layout">
            <div class="hn-career-copy">
              ${sectionEyebrow('NGHỀ NGHIỆP · 299 NGHỀ')}
              <h2 class="hn-h1">Làm nghề đó, một ngày trôi qua thế nào?</h2>
              <p class="hn-body-m">Mỗi nghề có 6 nhiệm vụ chính, một ngày làm việc mẫu và dải lương thị trường. Lương là khoảng ước tính, không phải con số chính xác.</p>
              <div class="hn-career-chips">
                ${ChipFilter({label:'Công nghệ thông tin',size:'s'})}${ChipFilter({label:'Kinh tế',size:'s'})}${ChipFilter({label:'Thiết kế',size:'s'})}${ChipFilter({label:'Y tế',size:'s'})}${ChipFilter({label:'Giáo dục',size:'s'})}${ChipFilter({label:'Kỹ thuật',size:'s'})}
              </div>
              ${Button({label:'Xem 299 nghề',type:'secondary',attrs:'data-route="#/nghe-nghiep"'})}
              <span class="hn-note-hand hn-salary-note">lương khởi điểm là chấm cam nhé</span>
            </div>
            <div class="hn-job-masonry">
              <div>${JobCard(jobs[0])}${JobCard(jobs[1])}</div>
              <div class="hn-job-masonry__offset">${JobCard(jobs[2])}<aside class="hn-holland-callout hn-body-s">Kết quả trắc nghiệm của bạn sẽ đánh dấu nghề hợp mã Holland bằng tia cam.</aside></div>
            </div>
          </div>
        </section>

        <section class="hn-journey-section hn-section--canvas" id="journey">
          <div class="hn-container">
            <div class="hn-journey-head">
              <div>${sectionEyebrow('LỘ TRÌNH CỦA TÔI')}<h2 class="hn-h1">Bốn bậc, đi từng bậc một</h2><p class="hn-body-m">Hướng Nghiệp lưu tiến độ của bạn. Mỗi bậc mở ra khi bậc trước xong.</p></div>
              <span class="hn-note-hand">không cần vội</span>
            </div>
            <div class="hn-stair">
              <article style="--step-h:260px">${stairPanel('01')}<strong>01</strong><h3>Hiểu mình</h3><p>Trắc nghiệm Holland 36 câu. Biết mình hợp nhóm nghề nào.</p></article>
              <article style="--step-h:330px">${stairPanel('02')}<strong>02</strong><h3>Chọn ngành</h3><p>Đọc nhiệm vụ, lương, ngày làm việc của 12 nghề gợi ý.</p></article>
              <article style="--step-h:400px">${stairPanel('03')}<strong>03</strong><h3>Chọn nước, chọn trường</h3><p>So chi phí, visa, làm thêm. Chốt 3 nước hợp túi tiền.</p></article>
              <article style="--step-h:470px">${stairPanel('04')}<strong>04</strong><h3>Săn học bổng</h3><p>Lọc học bổng khớp hồ sơ, nhận nhắc hạn, chuẩn bị giấy tờ.</p><span class="hn-stair__spark" aria-hidden="true">${Spark(96)}</span></article>
            </div>
          </div>
        </section>

        <section class="hn-pricing-section hn-section--sunken">
          <div class="hn-container hn-pricing-layout">
            <div class="hn-pricing-copy">
              ${sectionEyebrow('GÓI NĂM')}
              <h2 class="hn-h1">Xem lướt miễn phí. Đi sâu với 199k một năm.</h2>
              <p class="hn-body-m">Không tự gia hạn. Không quảng cáo. Nếu chưa dùng tới phần trả phí, hoàn tiền trong 7 ngày.</p>
              <ul class="hn-pricing-faq">
                <li>${Icon('credit-card',{size:18,className:'hn-pricing-faq__icon'})}<span><strong>Thanh toán bằng gì?</strong> VNPay, MoMo, thẻ nội địa và quốc tế.</span></li>
                <li>${Icon('mail',{size:18,className:'hn-pricing-faq__icon'})}<span><strong>Tài khoản gửi về đâu?</strong> Email bạn đăng ký, trong 1 phút.</span></li>
                <li>${Icon('smartphone',{size:18,className:'hn-pricing-faq__icon'})}<span><strong>Dùng chung được không?</strong> Một tài khoản, tối đa 2 thiết bị.</span></li>
              </ul>
            </div>
            <div class="hn-pricing-cards"><div>${PricingTicket('free')}</div><div>${PricingTicket('year')}</div></div>
          </div>
        </section>

        <section class="hn-contact-section">
          <div class="hn-contact-door" aria-hidden="true">${DoorPanel({width:420,height:520})}</div>
          <div class="hn-container hn-contact-content">
            <h2 class="hn-h1">Còn băn khoăn? Hỏi anh chị tư vấn.</h2>
            <p class="hn-body-m">Hotline · Zalo · WhatsApp · LINE · WeChat</p>
            <strong class="hn-contact-phone">${Icon('phone',{size:26,className:'hn-contact-phone__icon'})}0905 247 365</strong>
            <div class="hn-contact-actions">${Button({label:'Nhắn Zalo'})}<a href="mailto:baika.vn@gmail.com">baika.vn@gmail.com</a></div>
          </div>
        </section>
      </main>
      ${Footer(updated)}
      ${mobileTabBar()}
    </div>`;
}

export function bindHomeInteractions(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-route]').forEach(el=>el.addEventListener('click',()=>{const h=el.dataset.route;if(h)location.hash=h;}));
  const pathRoutes=['#/trac-nghiem','#/hoc-bong','#/du-hoc'];
  root.querySelectorAll<HTMLElement>('.hn-path-card').forEach((card,i)=>card.querySelector('button')?.addEventListener('click',()=>{location.hash=pathRoutes[i]||'#/';}));
  root.querySelectorAll<HTMLElement>('.hn-deadline-ticket').forEach(t=>t.addEventListener('click',()=>{location.hash='#/hoc-bong/chevening';}));
  root.querySelectorAll<HTMLElement>('.hn-job-card .hn-button').forEach(b=>b.addEventListener('click',()=>{location.hash='#/nghe-nghiep/ui-ux';}));
  root.querySelector<HTMLElement>('.hn-pricing[data-plan="year"] .hn-button')?.addEventListener('click',()=>{location.hash='#/thanh-toan';});
  root.querySelectorAll<HTMLButtonElement>('.hn-chip').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const next=btn.getAttribute('aria-pressed')!=='true';
      btn.setAttribute('aria-pressed',String(next));
    });
  });

  const search=root.querySelector<HTMLFormElement>('.hn-search');
  search?.addEventListener('submit',(event)=>{
    event.preventDefault();
    const input=search.querySelector<HTMLInputElement>('input[name="q"]');
    if(!input?.value.trim()) return;
    location.hash=`#/hoc-bong`;
    sessionStorage.setItem('hn-search-q',input.value.trim());
  });

  root.querySelectorAll<HTMLButtonElement>('.hn-country-card button[aria-pressed]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const card=btn.closest<HTMLElement>('.hn-country-card');
      if(!card) return;
      const selected=card.getAttribute('aria-selected')==='true';
      card.setAttribute('aria-selected',String(!selected));
      btn.setAttribute('aria-pressed',String(!selected));
      btn.innerHTML=!selected
        ? `${Icon('check',{size:14,className:'hn-button__icon'})}<span>Đã chọn so sánh</span>`
        : `${Icon('plus',{size:14,className:'hn-button__icon'})}<span>Thêm vào so sánh</span>`;
      hydrateIcons();
    });
  });
}
