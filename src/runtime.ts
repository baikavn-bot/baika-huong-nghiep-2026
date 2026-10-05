import { bindHomeInteractions, HomePage } from './home.js';
import { bindPageInteractions, renderRoute, ROUTES, type RouteKey } from './pages.js';
import { hydrateIcons } from './icons/index.js';

const app = document.querySelector<HTMLElement>('#app');
const routeByHash: Array<[string, RouteKey]> = [
  [ROUTES['checkout-success'].hash,'checkout-success'],
  [ROUTES['scholarship-detail'].hash,'scholarship-detail'],
  [ROUTES['country-detail'].hash,'country-detail'],
  [ROUTES['career-detail'].hash,'career-detail'],
  [ROUTES.compare.hash,'compare'], [ROUTES.scholarships.hash,'scholarships'],
  [ROUTES['study-abroad'].hash,'study-abroad'], [ROUTES.careers.hash,'careers'],
  [ROUTES.quiz.hash,'quiz'], [ROUTES['quiz-result'].hash,'quiz-result'],
  [ROUTES.checkout.hash,'checkout'], [ROUTES.login.hash,'login'], [ROUTES.journey.hash,'journey'],
];
function resolveRoute():RouteKey {
  return routeByHash.find(([hash])=>hash===(location.hash||'#/'))?.[1] || 'home';
}
let currentRoute:RouteKey|null=null;
let careerOverlay: {
  layer:HTMLElement; background:RouteKey; scrollY:number; focus:HTMLElement|null;
  backgroundNodes:Array<{node:HTMLElement;inert:boolean}>;
  bodyOverflow:string; htmlOverflow:string; bodyPadding:string; navigated:boolean;
}|null=null;

function renderPage(key:RouteKey) {
  if(!app) return;
  app.innerHTML=key==='home'?HomePage():renderRoute(key);
  hydrateIcons(app);
  if(key==='home') bindHomeInteractions(app); else bindPageInteractions(app,key);
  currentRoute=key;
  document.documentElement.dataset.route=key;
  document.title='Hướng Nghiệp — '+(key==='home'?'Trang chủ':key);
  window.scrollTo({top:0,behavior:'instant' as ScrollBehavior});
}
function openCareerOverlay() {
  if(!app||careerOverlay) return;
  const navigated=currentRoute!==null;
  if(currentRoute===null) renderPage('careers');
  const layer=document.createElement('div');
  layer.innerHTML=renderRoute('career-detail');
  const backgroundNodes=Array.from(app.children).filter((n):n is HTMLElement=>n instanceof HTMLElement).map(node=>({node,inert:node.inert}));
  careerOverlay={layer,background:currentRoute!,scrollY:window.scrollY,focus:document.activeElement instanceof HTMLElement?document.activeElement:null,backgroundNodes,bodyOverflow:document.body.style.overflow,htmlOverflow:document.documentElement.style.overflow,bodyPadding:document.body.style.paddingRight,navigated};
  const scrollbarWidth=window.innerWidth-document.documentElement.clientWidth;
  if(scrollbarWidth>0) document.body.style.paddingRight=(parseFloat(getComputedStyle(document.body).paddingRight)+scrollbarWidth)+'px';
  document.documentElement.classList.add('hn-career-open');
  document.body.style.overflow='hidden';
  document.documentElement.style.overflow='hidden';
  backgroundNodes.forEach(({node})=>node.inert=true);
  app.appendChild(layer);
  hydrateIcons(layer);
  bindPageInteractions(layer,'career-detail');
  document.documentElement.dataset.route='career-detail';
  document.title='Hướng Nghiệp — Chi tiết nghề nghiệp';
}
function removeCareerOverlay() {
  if(!careerOverlay) return null;
  const previous=careerOverlay;
  previous.layer.remove();
  document.documentElement.classList.remove('hn-career-open');
  previous.backgroundNodes.forEach(({node,inert})=>node.inert=inert);
  document.body.style.overflow=previous.bodyOverflow;
  document.documentElement.style.overflow=previous.htmlOverflow;
  document.body.style.paddingRight=previous.bodyPadding;
  careerOverlay=null;
  return previous;
}
function closeCareerOverlay() {
  if(!careerOverlay) return;
  if(careerOverlay.navigated) history.back();
  else {
    history.replaceState(null,'',ROUTES[careerOverlay.background].hash);
    render();
  }
}
function render() {
  if(!app) return;
  const key=resolveRoute();
  if(key==='career-detail'){openCareerOverlay();return;}
  const previous=removeCareerOverlay();
  if(previous&&key===previous.background) {
    document.documentElement.dataset.route=key;
    document.title='Hướng Nghiệp — '+(key==='home'?'Trang chủ':key);
    window.scrollTo({top:previous.scrollY,behavior:'instant' as ScrollBehavior});
    if(previous.focus?.isConnected) previous.focus.focus({preventScroll:true});
    return;
  }
  renderPage(key);
}
window.addEventListener('hn-close-career',closeCareerOverlay);
window.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&careerOverlay){event.preventDefault();closeCareerOverlay();}
});
window.addEventListener('hashchange',render);
if(!location.hash) history.replaceState(null,'',ROUTES.home.hash);
render();
