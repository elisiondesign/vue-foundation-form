<template>
  <div class="profile">
    <font-awesome-icon :icon="icon" class="profile__icon"/>
    <div class="profile__text">
      <span>
        <slot name="label" />
      </span>
      <div name="drop-down-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/profile";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Wallet extends Vue {
  private icon = faUserAlt;
}
</script>
