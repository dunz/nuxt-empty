<i18n src="../locales/components/about.json"></i18n>

<template>
  <div>
    <h1>about</h1>
    {{ $t('desc') }}
    <nuxt-link :to="localePath('index')">
      index
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class about extends Vue {
  protected middleware () {
    // console.log('middleware', app.i18n.t('desc'));
  }

  protected mounted () {
    // console.log('mounted', this.$i18n);
    // console.log(this.$i18n)
    // console.log(this.$t('desc'))
    //
    // const $trans = this.$t.bind(this);
    // console.log($trans('desc'))
  }
}
</script>
