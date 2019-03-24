<template>
  <div class="label-value-item">
    <div class="label-value-item__icon">
      <font-awesome-icon :icon="wallet" />
    </div>
    <div class="label-value-item__text">
      <span class="label-value-item__label">
        <slot name="label" />
    </span>
      <span class="label-value-item__value">
        <slot
          name="value"
        />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/label-value-item";
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
  private wallet = faWallet;
}
</script>
