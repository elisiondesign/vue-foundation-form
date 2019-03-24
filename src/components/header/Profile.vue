<template>
  <div class="profile">
    <fa-user-alt class="profile__icon"/>
    <div class="profile__text">
      <span>
        <slot name="label" />
      </span>
      <div name="drop-down-content">
        <slot name="content" />
      </div>
    </div>
    <fa-chevron-down/>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/profile";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import faUserAlt from '@/components/fa-icons/UserAlt.vue';
import faChevronDown from '@/components/fa-icons/ChevronDown.vue';

@Component({
  components: {
    faChevronDown,
    faUserAlt,
  },
})
export default class Wallet extends Vue {}
</script>
