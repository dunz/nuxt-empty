<template>
  <div>
    <h1>about</h1>
    <nuxt-link :to="localePath('index')">
      index
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class about extends Vue {

}
</script>
