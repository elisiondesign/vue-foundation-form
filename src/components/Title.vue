<template>
  <div>
    <h1 class="text-center">
      <slot />
    </h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Title extends Vue {}
</script>
