import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

import avatar from './static/avatar.svg';
import imageCamera from './static/camera.png';

Object.entries(Components).forEach(([name, template]) => {
    Handlebars.registerPartial(name, template);
})

interface Pages {
    MessengerPage: string;
    AuthPage: string;
    RegPage: string;
    ProfilePage: string;
    ChangeProfilePage: string;
    ChangePasswordPage: string;
    Page500: string;
    Page404: string;
}

const pages: { [key: string]: string }= {
    'messenger': Pages.MessengerPage,
    'auth': Pages.AuthPage,
    'reg': Pages.RegPage,
    'profile': Pages.ProfilePage,
    'change-profile': Pages.ChangeProfilePage,
    'change-password': Pages.ChangePasswordPage,
    '500': Pages.Page500,
    '404': Pages.Page404,
}

type HandlebarsTemplateFunction = (context: any) => string;

function navigate(page: string): void {
    const source: string = pages[page];
    const display: HandlebarsTemplateFunction = Handlebars.compile(source);
    const root: Element | null = document.querySelector('#root');

    const context = {
        avatar: avatar,
        imageCamera: imageCamera,
    }

    if (root) {
        root.innerHTML = display(context);
    } else {
        console.error('Root element not found');
    }
}

document.addEventListener("DOMContentLoaded", () => navigate('auth'));

document.addEventListener('click', (e: MouseEvent): void => {
    e.preventDefault();
    const target = e.target as Element;
    const page = target.getAttribute('page');

    if (page) {
        navigate(page);
    }
})
