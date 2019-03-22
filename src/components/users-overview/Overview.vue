<template>
  <div class="overview">
    <h3>Přehled</h3>
    <table class="table">
      <tr
        v-for="(user, index) in users.info"
        :key="index"
      >
        <td>{{user.date}}</td>
        <td>{{user.gender}}</td>
        <td>{{user.name}} {{user.surname}}</td>
        <td>Zobrazit</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import getAsset from '@/api/local';
import { User } from '@/types/vuex/users/index';

const namespace: string = 'users';

@Component({
  components: {},
})
export default class Overview extends Vue {
  @State('users') private users: any;

  @Action('addEntriesFromJSON', { namespace }) private addEntries: any;

  public created() {
    getAsset('/test-data.json').then((res) => {
      const payload: User = res.data;
      this.addEntries(payload);
    });
  }
}
</script>
