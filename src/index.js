import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

import avatar from './static/avatar.svg';
import imageCamera from './static/camera.png';

Object.entries(Components).forEach(([name, template]) => {
    Handlebars.registerPartial(name, template);
})

const pages = {
    'messenger': Pages.MessengerPage,
    'auth': Pages.AuthPage,
    'reg': Pages.RegPage,
    'profile': Pages.ProfilePage,
    '500': Pages.Page500,
    '404': Pages.Page404,
}

const context = {
    avatar: avatar,
    imageCamera: imageCamera,
}

function navigate(page) {
    const source = pages[page];
    const display = Handlebars.compile(source);
    const root = document.querySelector('#root')
    root.innerHTML = display(context);
}

document.addEventListener("DOMContentLoaded", () => navigate('auth'));

document.addEventListener('click', (e) => {
    e.preventDefault;

    const page = e.target.getAttribute('page');

    if (page) {
        navigate(page);
    }
})
