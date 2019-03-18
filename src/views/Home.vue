<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

<p class="panel">
  <strong class="show-for-small-only">This text is shown only on a small screen.</strong>
  <strong class="show-for-medium-up">This text is shown on medium screens and up.</strong>
  <strong class="show-for-medium-only">This text is shown only on a medium screen.</strong>
  <strong class="show-for-large-up">This text is shown on large screens and up.</strong>
  <strong class="show-for-large-only">This text is shown only on a large screen.</strong>
  <strong class="show-for-xlarge-up">This text is shown on xlarge screens and up.</strong>
  <strong class="show-for-xlarge-only">This text is shown only on an xlarge screen.</strong>
  <strong class="show-for-xxlarge-up">This text is shown on xxlarge screens and up.</strong>
</p>

    <div class="grid-x">
  <div class="cell">full width cell</div>
  <div class="cell">full width cell</div>
</div>
<div class="grid-x">
  <div class="cell small-6">6 cells</div>
  <div class="cell small-6">6 cells</div>
</div>
<div class="grid-x">
  <div class="cell medium-6 large-4">12/6/4 cells</div>
  <div class="cell medium-6 large-8">12/6/8 cells</div>
</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Home extends Vue {}
</script>

<style lang="scss">

</style>
