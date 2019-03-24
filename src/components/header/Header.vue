<template>
  <header class="grid-x top-bar header">
    <div class="header__logo cell medium-1">logo</div>
    <main-menu class="cell medium-6 header__item" />
    <label-value-item class="cell medium-2 header__item">
      <template v-slot:label>
        Label itemu
      </template>
      <template v-slot:value>
        Value itemu
      </template>
    </label-value-item>
    <drop-down-item class="cell medium-2 header__item">
      <template v-slot:label>
        Label
      </template>
      <template v-slot:content>
        Value
      </template>
    </drop-down-item>
    <div class="cell medium-1 header__help">?</div>
  </header>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/header";
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/header/Menu.vue';
import DropDownItem from '@/components/header/DropDownItem.vue';
import LabelValueItem from '@/components/header/LabelValueItem.vue';

@Component({
  components: {
    MainMenu,
    DropDownItem,
    LabelValueItem,
  },
})
export default class Header extends Vue {}
</script>
