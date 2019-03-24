<template>
  <div class="label-value-item">
    <div class="label-value-item__icon">
      wallet
    </div>
    <div class="label-value-item__text">
      <span class="label-value-item__label"
        <slot
          name="label"
          tag="spany"
        />
    </span>
    <span class="label-value-item__value">
    <slot
      name="value"
      tag="span"
    />
    </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/label-value-item";
</style>
