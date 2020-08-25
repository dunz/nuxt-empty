import {Context} from '@nuxt/types';

export default (context: Context) => {
    // const button = document.createElement('button');
    // const text = document.createTextNode('asdf');
    // button.append(text);
    // document.querySelector('.layout').append(button);
    // console.log(document.querySelector('.layout'));

    // redirect('http://www.naver.com');
    // console.log(localePath('/', 'en'));
    // // redirect(localePath('/', 'en'));
    // redirect('/en/about');
    // console.log('redirect plugin');
    // redirect('/en');

    console.log('client plugin 몇번 실행될까?', context.app.i18n.locale);
    // router.afterEach(() => {
    // return redirect('/en');

    // console.log(1);
    // const button = document.createElement('button');
    // const text = document.createTextNode('asdf11111111');
    // document.querySelector('.layout').append(button);
    // console.log(document.querySelector('.layout'));

    // const button = document.getElementById('change-language');
    // button.addEventListener('click', () => {
    //     // redirect('/en');
    //     // location.replace('http://localhost:3000/en');
    // })
    // });

    // console.log('test', process.server, process.client, document.querySelector('.layout'));
    // document.querySelector('.layout').insertAdjacentHTML('beforeend', '<button>asdf</button>');
}
