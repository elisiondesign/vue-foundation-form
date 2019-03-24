<template>
  <div class="overview">
    <h3 class="overview__title">Přehled</h3>
    <table class="table">
      <tr
        v-for="(user, index) in users.info"
        :key="index"
      >
        <td class="table__first">{{user.date}}</td>
        <td class="table__cell">{{user.gender}}</td>
        <td class="table__cell">{{user.name}} {{user.surname}}</td>
        <td class="table__last"><div class="small-button">Zobrazit</div></td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
@import "src/assets/style/components/overview";
@import "src/assets/style/components/table";
@import "src/assets/style/components/small-button";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import getAsset from '@/api/local';
import { User } from '@/types/vuex/users/index';

const namespace: string = 'users';

@Component
export default class Overview extends Vue {
  @State('users') private users!: User[];

  @Action('addEntriesFromJSON', { namespace }) private addEntries: any;

  public created() {
    getAsset('/test-data.json').then((res) => {
      const payload: User = res.data;
      this.addEntries(payload);
    });
  }
}
</script>
