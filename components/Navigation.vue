<template>
    <div>
        <h1 class="title">
            nuxt-empty1
        </h1>
        <nuxt-link :to="localePath('about', 'ko')">
            about
        </nuxt-link>
        <nuxt-link :to="localePath({name:'about'})">
            about
        </nuxt-link>
        <nuxt-link :to="localePath({name:'category-slug', params:{slug: 1}}, 'ko')">
            slug
        </nuxt-link>
        <nuxt-link :to="localeRoute({name:'category-slug', params:{slug: 1}}, 'ko')">
            localeRoute
        </nuxt-link>
        <!--      <a href="#" @click.prevent="$routerPush({name:'category-slug', params:{slug: 1}}, 'ko')">router push</a>-->
        <a href="#" @click.prevent="callRouterPush">router push</a>

        <nuxt-link :to="switchLocalePath('en')">
            English
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('ko')">
            Korean
        </nuxt-link>
        <button id="change-language">
            Change Language
        </button>
        <div class="links">
            <a
                href="https://nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="button--green"
            >
                Documentation
            </a>
            <a
                href="https://github.com/nuxt/nuxt.js"
                target="_blank"
                rel="noopener noreferrer"
                class="button--grey"
            >
                GitHub
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

@Component
export default class Navigation extends Vue {
    protected callRouterPush () {
        this.$routerReplace([{name: 'category-slug', params: {slug: '1'}}, 'ko'], () => {
            console.log('onComplete');
        });
    }
}
</script>
