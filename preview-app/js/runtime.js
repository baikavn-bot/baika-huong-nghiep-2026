import { bindHomeInteractions, HomePage } from './home.js';
import { bindPageInteractions, renderRoute, ROUTES } from './pages.js';
import { hydrateIcons } from './icons/index.js';
const app = document.querySelector('#app');
const routeByHash = [
    [ROUTES['checkout-success'].hash, 'checkout-success'],
    [ROUTES['scholarship-detail'].hash, 'scholarship-detail'],
    [ROUTES['country-detail'].hash, 'country-detail'],
    [ROUTES['career-detail'].hash, 'career-detail'],
    [ROUTES.compare.hash, 'compare'],
    [ROUTES.scholarships.hash, 'scholarships'],
    [ROUTES['study-abroad'].hash, 'study-abroad'],
    [ROUTES.careers.hash, 'careers'],
    [ROUTES.quiz.hash, 'quiz'],
    [ROUTES['quiz-result'].hash, 'quiz-result'],
    [ROUTES.checkout.hash, 'checkout'],
    [ROUTES.login.hash, 'login'],
    [ROUTES.journey.hash, 'journey'],
];
function resolveRoute() {
    const hash = location.hash || '#/';
    return routeByHash.find(([h]) => hash === h)?.[1] || 'home';
}
function render() {
    if (!app)
        return;
    const key = resolveRoute();
    app.innerHTML = key === 'home' ? HomePage() : renderRoute(key);
    hydrateIcons(app);
    if (key === 'home')
        bindHomeInteractions(app);
    else
        bindPageInteractions(app, key);
    document.documentElement.dataset.route = key;
    document.title = `Hướng Nghiệp — ${key === 'home' ? 'Trang chủ' : key}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
}
window.addEventListener('hashchange', render);
if (!location.hash)
    history.replaceState(null, '', ROUTES.home.hash);
render();
