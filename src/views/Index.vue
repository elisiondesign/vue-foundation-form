<template>
  <div>
    <app-title>Testovací zadání</app-title>
    <div class="page">
      <div class="grid-container">
        <h2>Formular</h2>
        <form
          class="form"
          @submit="handleSubmit"
        >
          <h3>Formular</h3>
          <div>
            Vzorovy button <br>
            Rozsireny label radio buttonu, ktery muze byt delsi
          </div>

          <label class="form__label">Jméno
            <input
              name="firstName"
              type="text"
              v-model="data.firstName"
              v-validate="'required|alpha'"
            />
          </label>
          <label class="form__label">Příjmení
            <input
              id="surname"
              name="surname"
              type="text"
              v-model="data.surname"
              v-validate="'required|alpha'"
            />
          </label>

          <label class="form__label">
            <input
              type="radio"
              name="gender"
              value="male"
              v-model="data.gender"
            /> Muz
          </label>
          <label class="form__label">
            <input
              type="radio"
              name="gender"
              value="female"
              v-model="data.gender"
            /> Zena
          </label>

          <button type="submit">Pokračovat</button>

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
