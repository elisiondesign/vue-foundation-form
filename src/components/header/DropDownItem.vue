<template>
  <div class="drop-down-item">
    <div class="drop-down-item__icon">ikona</div>
    <div class="drop-down-item__text">
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
@import "src/assets/style/components/drop-down-item";
</style>
