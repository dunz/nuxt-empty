import {Context} from '@nuxt/types';
import Vue from 'vue'

export default ({app}: Context, inject: any) => {
    console.log(process.server, process.client);
    inject('trans', (key: string, value: any) => {
        app.i18n.t(key, value);
    })
    // inject('trans', (key: VueI18n.Path, values?: VueI18n.Values) => i18nProvider.trans(key, values));

    // Vue.prototype.$trans = (message: string) => app.i18n.t(message)
}
