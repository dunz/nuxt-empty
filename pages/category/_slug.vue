<template>
  <div>
    <h1>slug</h1>
    <nuxt-link :to="localePath('index')">
      index
    </nuxt-link>
    <nuxt-link :to="localePath('about')">
      about
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class slug extends Vue {

}
</script>
