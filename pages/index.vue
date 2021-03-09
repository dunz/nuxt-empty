<template>
    <div class="container">
        <div>
            <Logo />
            <Navigation />
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import Navigation from '~/components/Navigation.vue';

@Component({
    components: {Navigation},
    layout: 'test'
})
export default class Index extends Vue {
    async fetch () {
        console.log('fetch');
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log('await fetch 1000 seconds');
                resolve();
            }, 1000);
        });
    }

    created () {
        console.log('created');
    }

    mounted () {
        console.log('mounted');
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
