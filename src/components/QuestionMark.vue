<template>
    <font-awesome-icon :icon="mark" />
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Wallet extends Vue {
  private mark = faQuestionCircle;
}
</script>
