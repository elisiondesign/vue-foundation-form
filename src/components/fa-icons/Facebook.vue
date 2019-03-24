<template>
    <font-awesome-icon :icon="icon" />
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Wallet extends Vue {
  private icon = faFacebook;
}
</script>
