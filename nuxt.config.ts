import {NuxtConfig} from '@nuxt/types';
import {i18n} from './nuxt-configs';

const config: NuxtConfig = {
    render: {
        bundleRenderer: {
            runInNewContext: false
        }
    },
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    mode: 'spa',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'server',
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        '@/plugins/router-inject.ts',
        '@/plugins/test.client.ts'
    ],
    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxt/typescript-build'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt/content
        '@nuxt/content',
        'nuxt-i18n'
        // ['nuxt-i18n', {
        //     parsePages: false,
        //     pages: {
        //         about: {
        //             en: '/about',
        //             ko: '/a-props'
        //         }
        //     }
        // }]
    ],
    i18n,
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    /*
    ** Content module configuration
    ** See https://content.nuxtjs.org/configuration
    */
    content: {},
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {},
    // messages: {
    //     server_error: 'Oh no! Server error',
    //     nuxtjs: 'Is this Nuxt.js?',
    //     back_to_home: 'Cmon, back home!',
    //     server_error_details: 'Uh uh :| Server errorrrrr',
    // }
};

export default config;
