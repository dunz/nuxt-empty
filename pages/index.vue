<template>
  <div class="container">
    <div>
      <Logo />
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
      <a href="#" @click.prevent="$router.push(localeRoute({name:'category-slug', params:{slug: 1}}, 'ko'))">router push</a>

      <nuxt-link :to="switchLocalePath('en')">
        English
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('ko')">
        Korean
      </nuxt-link>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  middleware () {
    // const localePath = app.localePath('index');
    // console.log(app.localePath({ name: 'category-slug', params: { slug: 1 } }, 'ko'))
    // console.log(app.localeRoute({ name: 'category-slug', params: { slug: 1 } }, 'ko'))
    // console.log('app.localeRoute', app.localeRoute());

    // const switchLocalePath = app.switchLocalePath('ko');
    // console.log('switchLocalePath', switchLocalePath)
    // redirect(switchLocalePath)
  }
})
export default class Index extends Vue {
  // protected asyncData({app}) {
  //   app.switchLocalePath('ko');
  // }
  protected mounted () {
    // console.log('mounted', this.$i18n);
  }
}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
