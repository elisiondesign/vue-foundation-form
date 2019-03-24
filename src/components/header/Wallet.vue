<template>
  <div class="wallet">
    <div class="wallet__icon">
      <font-awesome-icon :icon="icon" />
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Wallet extends Vue {
  private icon = faWallet;
}
</script>
