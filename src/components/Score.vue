<template>
  <div class="score">
    <div>
      <Shield team="Real Madrid" :path="realmadridPath" />
      <p class="total">{{ totalBet.madrid }}</p>
    </div>

    <div class="result-container">
      <div class="result">
        <div class="center">
          <p class="home">{{ homeScore }}</p>
          <p class="dash">-</p>
          <p class="away">{{ awayScore }}</p>
        </div>
      </div>
      <div>
        <p class="total">Empate</p>
        <p class="total">{{ totalBet.draw}}</p>
      </div>
    </div>
    <div>
      <Shield team="Levante" :path="levantePath" />
      <p class="total">{{ totalBet.levante }}</p>
    </div>
  </div>
</template>

<script>
import Shield from '@/components/Shield'

const realmadrid = require('../assets/realmadrid.svg')
const levante = require('../assets/levante.svg')

export default {
  name: 'score',
  components: {
    Shield
  },
  props: {
    homeScore: {
      required: true,
      type: [String, Number]
    },
    awayScore: {
      required: true,
      type: [String, Number]
    },
    totalBet: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      realmadridPath: realmadrid,
      levantePath: levante
    }
  }
}
</script>

<style lang="scss" scoped>
.score {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  .result-container {
    display: flex;
    flex-direction: column;

    .result {
      display: flex;
      font-size: 64px;
      margin: 0 36px;

      .center {
        display: flex;
      }

      .home {}

      .away {}

      .dash {
        margin: 0 16px;
        align-self: center;
      }
    }

    .total {
      justify-self: flex-end;
    }
  }
}
</style>
