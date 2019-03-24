<template>
  <div class="blue-background">
    <app-title>Testovací zadání</app-title>
    <div class="page vertical-padding">
      <div class="grid-container">
        <span class="form__note">Formulář</span>
        <form
          class="form"
          @submit="handleSubmit"
        >
          <h2 class="form__title">Formulář</h2>
          <div class="form__description">
            <h3 class="form__subtitle">Vzorový radio button</h3>
            Rozšířený label radio buttonu, který může být delší
          </div>

          <div class="form__radio">
            <label class="radio-button radio-button--chosen">
              <input
                type="radio"
                name="gender"
                value="male"
                v-model="data.gender"
              /> Muž
            </label>
            <label class="radio-button">
              <input
                type="radio"
                name="gender"
                value="female"
                v-model="data.gender"
              /> Žena
            </label>
          </div>

          <div class="form__input">
            <label class="form__label">Jméno
              <input
                class="line-input"
                name="firstName"
                type="text"
                v-model="data.firstName"
                v-validate="'required|alpha'"
              />
            </label>
            <label class="form__label">Příjmení
              <input
                class="line-input"
                id="surname"
                name="surname"
                type="text"
                v-model="data.surname"
                v-validate="'required|alpha'"
              />
            </label>
          </div>

          <button class="button" type="submit">Pokračovat</button>

          <div v-if="errors.has('gender')">Pohlaví je povinná položka</div>

        </form>
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
import Overview from '@/components/users-overview/Overview.vue';
import { Action } from 'vuex-class';

const namespace: string = 'users';

@Component({
  components: {
    AppTitle,
    Overview,
  },
})
export default class Home extends Vue {
  @Action('addEntry', { namespace }) private addEntry: any;

  private defaultData = {
    firstName: null,
    surname: null,
    gender: 'male',
  };

  private data = Object.assign({}, this.defaultData);

  private handleSubmit(e: Event): void {
    this.$validator.validate().then((valid) => {
      if (valid) {
        this.addEntry(this.data);
      }
    });

    e.preventDefault();
  }

  private clearForm() {
    Object.assign({}, this.defaultData);
  }
}
</script>
