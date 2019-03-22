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

          <label for="firstName">Jméno</label>
          <input
            id="firstName"
            type="text"
            v-model="data.firstName"
          />
          <label for="surname">Příjmení</label>
          <input
            id="surname"
            type="text"
            v-model="data.surname"
          />

          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            v-model="data.gender"
          />
          <label for="male">Muz</label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            v-model="data.gender"
          />
          <label for="female">Zena</label>

          <button type="submit">Pokračovat</button>

          <p v-if="errors.length">
            <b>Vyplňte prosím následující položky</b>
            <ul>
              <li
                v-for="error in errors"
                :key="error"
              >{{ error }}</li>
            </ul>
          </p>
        </form>
      </div>

      <div class="grid-container">
        <overview />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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

  private errors: string[] = [];

  private data = {
    firstName: null,
    surname: null,
    gender: null,
  };

  private handleSubmit(e: any): void {
    this.checkForm();
    if (this.errors.length === 0) {
      this.addEntry(this.data);
      this.clearForm();
    }
    e.preventDefault();
  }

  private checkForm(): void {
    this.errors = [];

    if (!this.data.firstName) {
      this.errors.push('Jméno');
    }
    if (!this.data.surname) {
      this.errors.push('Příjmení');
    }
    if (!this.data.gender) {
      this.errors.push('Pohlaví');
    }
  }

  private clearForm() {
    this.data.firstName = null;
    this.data.surname = null;
    this.data.gender = null;
  }
}
</script>
