<template>
    <div>
        에러페이지
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

@Component
export default class error extends Vue {
    asyncData () {
        throw new Error(':(');
    }
}
</script>
