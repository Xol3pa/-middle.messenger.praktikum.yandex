import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';


Object.entries(Components).forEach(([name, template]) => {
    Handlebars.registerPartial(name, template);
})

const pages = {
    'messenger': Pages.MessengerPage,
    'auth': Pages.AuthPage,
    'reg': Pages.RegPage,
}

function navigate(page) {
    const source = pages[page];
    const display = Handlebars.compile(source);
    const root = document.querySelector('#root')
    root.innerHTML = display();
}

document.addEventListener("DOMContentLoaded", () => navigate('auth'));

document.addEventListener('click', (e) => {
    e.preventDefault;

    const page = e.target.getAttribute('page');

    if (page) {
        navigate(page);
    }
})