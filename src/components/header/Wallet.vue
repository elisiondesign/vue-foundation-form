<template>
  <div class="wallet">
    <div class="wallet__icon">
      <fa-wallet/>
    </div>
    <div class="wallet__text">
      <span class="wallet__label">
        <slot name="label" />
    </span>
      <span class="wallet__value">
        <slot
          name="value"
        />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/wallet";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import faWallet from '@/components/fa-icons/Wallet.vue';

@Component({
  components: {
    faWallet,
  },
})
export default class Wallet extends Vue {}
</script>
