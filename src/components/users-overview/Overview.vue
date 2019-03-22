<template>
    <div class="overview">
        <h3>Přehled</h3>
        <table class="table">
            <tr v-for="(user, index) in users.info" :key="index">
                <td>{{user.date}}</td>
                <td>{{user.gender}}</td>
                <td>{{user.fullName}} {{user.lastName}}</td>
                <td>Zobrazit</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  State,
} from 'vuex-class';

@Component({
  components: {

  },
})
export default class Overview extends Vue {
  @State('users') private users: any;
}
</script>
