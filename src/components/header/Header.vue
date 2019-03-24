<template>
  <header class="grid-x top-bar header">
    <div class="header__logo cell medium-1">logo</div>
    <main-menu class="cell medium-6 header__item" />
    <wallet class="cell medium-2 header__item">
      <template v-slot:label>
        Label itemu
      </template>
      <template v-slot:value>
        Value itemu
      </template>
    </wallet>
    <drop-down-item class="cell medium-2 header__item">
      <template v-slot:label>
        Label
      </template>
      <template v-slot:content>
        Value
      </template>
    </drop-down-item>
    <question-mark class="cell medium-1 header__help"/>
  </header>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/header";
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/header/Menu.vue';
import DropDownItem from '@/components/header/DropDownItem.vue';
import Wallet from '@/components/header/Wallet.vue';
import QuestionMark from '@/components/QuestionMark.vue';

@Component({
  components: {
    MainMenu,
    DropDownItem,
    Wallet,
    QuestionMark,
  },
})
export default class Header extends Vue {}
</script>
