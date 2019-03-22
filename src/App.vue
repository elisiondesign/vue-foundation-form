<template>
  <div id="app">
    <app-header />
    <router-view class="site-content" />
    <app-footer />
  </div>
</template>

<style lang="scss">
@include foundation-everything;
@import "src/assets/style/base";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/header/Header.vue';
import AppFooter from '@/components//footer/Footer.vue';

@Component({
  components: {
    AppHeader,
    AppFooter,
  },
})
export default class Home extends Vue {}
</script>
