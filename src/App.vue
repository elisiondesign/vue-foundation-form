<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "src/assets/style/foundation-sites/settings";
@import "src/assets/style/foundation-sites/scss/foundation";
@include foundation-everything;

@include foundation-xy-grid-classes(
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
);

// body {
//   font-size: $titlebar-icon-spacing;
// }
</style>
