<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "src/assets/style/foundation-sites/settings";
@import "src/assets/style/foundation-sites/scss/foundation";
@include foundation-everything;

// @include foundation-xy-grid-classes(
  /* options
  $base-grid: true,
  $margin-grid: true,
  $padding-grid: true,
  $block-grid: true,
  $collapse: true,
  $offset: true,
  $vertical-grid: true,
  $frame-grid: true
  */
// );

// body {
//   font-size: $titlebar-icon-spacing;
// }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/header/Header.vue';
import AppTitle from '@/components/Title.vue';

@Component({
  components: {
    AppHeader,
  },
})

export default class Home extends Vue {}
</script>
