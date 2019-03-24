<template>
    <div>
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
            <label class="radio-button" :class="{ 'radio-button--selected': isMaleSelected }">
                <input
                type="radio"
                name="gender"
                value="male"
                v-model="data.gender"
                /> Muž
            </label>
            <label class="radio-button" :class="{ 'radio-button--selected': isFemaleSelected }">
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
                v-model="data.name"
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
            <div class="form__submit">
                <button class="submit" type="submit">Pokračovat</button>
            </div>

            <div v-if="errors.has('gender')">Pohlaví je povinná položka</div>

        </form>
    </div>
</template>

<style lang="scss">
@import "src/assets/style/external-libraries/vee-validate";
@import "src/assets/style/components/form";
@import "src/assets/style/components/radio-button";
@import "src/assets/style/components/line-input";
@import "src/assets/style/components/submit";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

const namespace: string = 'users';

@Component
export default class Home extends Vue {
  @Action('addEntry', { namespace }) private addEntry: any;

  private defaultData = {
    name: null,
    surname: null,
    gender: 'male',
  };

  private data = Object.assign({}, this.defaultData);

  private handleSubmit(e: Event): void {
    this.$validator.validate().then((valid) => {
      if (valid) {
        this.addEntry(this.data);
        this.clearForm();
      }
    });

    e.preventDefault();
  }

  private get isMaleSelected() {
    return this.data.gender === 'male';
  }

  private get isFemaleSelected() {
    return this.data.gender === 'female';
  }

  private clearForm() {
    this.data = Object.assign({}, this.defaultData);
  }
}
</script>
