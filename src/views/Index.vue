<template>
  <div class="blue-background">
    <app-title>Testovací zadání</app-title>
    <div class="page vertical-padding">
      <div class="grid-container">
        <user-form />
      </div>

      <div class="grid-container">
        <overview />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/style/external-libraries/vee-validate";
@import "src/assets/style/components/form";
@import "src/assets/style/components/radio-button";
@import "src/assets/style/components/line-input";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppTitle from '@/components/Title.vue';
import Overview from '@/components/users/Overview.vue';
import UserForm from '@/components/users/Form.vue';

@Component({
  components: {
    AppTitle,
    Overview,
    UserForm,
  },
  metaInfo: {
    title: 'Users',
  },
})
export default class Home extends Vue {}
</script>
