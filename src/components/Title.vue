<template>
  <div>
    <h1 class="app-title text-center">
      <slot />
    </h1>
  </div>
</template>

<style lang="scss">
@import "src/assets/style/components/app-title";
</style>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Title extends Vue {}
</script>
