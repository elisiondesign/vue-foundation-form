<template>
  <div id="app">
    <app-title>Testovací zadání</app-title>
    <div class="page">
      <div class="grid-container">
        <h2>Formular</h2>
        <div class="form grid-x grid-margin-x">
          <h3 class="cell small-12">Formular</h3>
          <div class="cell small-12 text-center">
            Vzorovy button <br>
            Rozsireny label radio buttonu, ktery muze byt delsi
          </div>

          <input
            type="radio"
            name="gender"
            value="female"
          >Muz</input>
          <input
            type="radio"
            name="gender"
            value="female"
          >Zena</input>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppTitle from '@/components/Title.vue';

@Component({
  components: {
    AppTitle,
  },
})
export default class Home extends Vue {}
</script>
