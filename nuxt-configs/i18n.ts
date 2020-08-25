import {NuxtVueI18n} from 'nuxt-i18n/types';
import {DEFAULT_COVERAGES_SET, DEFAULT_LOCALE} from '../const/const';

export const i18n: NuxtVueI18n.Options.AllOptionsInterface = {
    locales: DEFAULT_COVERAGES_SET,
    defaultLocale: DEFAULT_LOCALE,
    strategy: 'prefix',
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'locales/',
    vueI18nLoader: true,
    vueI18n: {
        fallbackLocale: DEFAULT_LOCALE,
        silentTranslationWarn: true
    }
};
