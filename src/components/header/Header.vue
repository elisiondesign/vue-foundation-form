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
    <profile class="cell medium-2 header__item">
      <template v-slot:label>
      </template>
      <template v-slot:content>
        Jméno Příjmení
      </template>
    </profile>
    <div class="cell medium-1">
      <fa-question-circle class="header__help"/>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/header";
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/header/Menu.vue';
import Profile from '@/components/header/Profile.vue';
import Wallet from '@/components/header/Wallet.vue';
import faQuestionCircle from '@/components/fa-icons/QuestionCircle.vue';

@Component({
  components: {
    MainMenu,
    Profile,
    Wallet,
    faQuestionCircle,
  },
})
export default class Header extends Vue {}
</script>
