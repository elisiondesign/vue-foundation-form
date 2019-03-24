<template>
  <footer class="footer grid-x">
    <div class="footer__logo cell medium-8">logo</div>
    <div class="footer__item cell medium-1">Položka</div>
    <div class="footer__item cell medium-1">Položka</div>
    <div class="footer__social-links cell medium-1">
      <fa-facebook />
      <fa-linked-in />
      <fa-twitter />
    </div>
    <div class="footer__lang-swither cell medium-1">EN</div>
  </footer>
</template>

<style lang="scss" scoped>
@import "src/assets/style/components/footer";
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import faFacebook from '@/components/fa-icons/Facebook.vue';
import faLinkedIn from '@/components/fa-icons/LinkedIn.vue';
import faTwitter from '@/components/fa-icons/Twitter.vue';

@Component({
  components: {
    faFacebook,
    faLinkedIn,
    faTwitter,
  },
})
export default class Footer extends Vue {}
</script>
