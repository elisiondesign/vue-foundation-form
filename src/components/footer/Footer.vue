<template>
  <footer class="footer">
    <div class="footer__logo">logo</div>
    <div class="footer__item">Položka</div>
    <div class="footer__item">Položka</div>
    <div class="footer__social-links">
      <fa-facebook />
      <fa-linked-in />
      <fa-twitter />
    </div>
    <div class="footer__lang-swither">EN</div>
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
