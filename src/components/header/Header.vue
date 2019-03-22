<template>
  <header class="grid-x top-bar header">
    <div class="cell large-4">logo</div>
    <main-menu class="cell large-4" />
    <label-value-item class="cell large-2">
      <template v-slot:label>
        Label
      </template>

      <template v-slot:value>
        Value
      </template>
    </label-value-item>
    <drop-down-item class="cell large-2">
      <template v-slot:label>
        Label
      </template>

      <template v-slot:content>
        Value
      </template>
    </drop-down-item>
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
