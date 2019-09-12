<template>
  <div>
    <table class="table">
      <tr class="">
        <th>Winner</th>
        <th>Amount</th>
        <th>Address</th>
      </tr>
      <tr v-for="(bet, index) in bets" :key="bet.address + index" class="row">
        <td>
          <img v-if="bet.team == 1" class="logo" :src="rmpath" />
          <img v-else-if="bet.team == 2" class="logo" :src="lpath" />
          <p v-else >X</p>
        </td>
        <td>{{ bet.amount }}</td>
        <td>{{ bet.address }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
const realmadrid = require('../assets/realmadrid.svg')
const levante = require('../assets/levante.svg')

export default {
  name: 'betListing',
  props: {
    bets: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      rmpath: realmadrid,
      lpath: levante
    }
  }
}
</script>

<style scoped lang="scss">
  .logo {
    height: 36px;
  }
  .table {
    border-collapse: collapse;
    text-align: left;
  }
  td, th {
    padding: 12px 24px;
  }

  .row {
    height: 48px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;

    &:hover {
      background-color: #F5F5f5;
    }
  }
</style>
