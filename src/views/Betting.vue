<template>
  <div class="betting">
    <Score :homeScore="homeScore" :awayScore="awayScore" :totalBet="totalBet" />
    <button @click="closeBetting" v-if="address === adminAddress">Resolver</button>

    <BetForm :address="address" />
    <BetListing :bets="betListing" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { adminAddress } from '@/utils/constants/dappContract'
import BetListing from '@/components/BetListing'
import Score from '@/components/Score'
import BetForm from '@/components/BetForm'

export default {
  name: 'betting',
  components: {
    BetForm,
    BetListing,
    Score
  },
  computed: {
    ...mapState({
      homeScore: state => state.score.home,
      awayScore: state => state.score.away,
      bets: state => state.bets,
      address: state => state.web3.addresses[0]
    }),
    betListing () {
      return [
        ...(this.bets.madrid ? this.bets.madrid : []),
        ...(this.bets.levante ? this.bets.levante : []),
        ...(this.bets.draw ? this.bets.draw : [])
      ].sort((a, b) => parseFloat(a.amount) < parseFloat(b.amount)).map(x=> {
        x.amount = parseFloat(parseFloat(x.amount).toFixed(3))
        return x
      })
    },
    totalBet () {
      return this.betListing.reduce((acc, bet) => {
        if (bet.team === 0) {
          acc.draw += parseFloat(parseFloat(bet.amount).toFixed(3))
        } else if (bet.team === 1) {
          acc.madrid += parseFloat(parseFloat(bet.amount).toFixed(3))
        } else if (bet.team === 2) {
          acc.levante += parseFloat(parseFloat(bet.amount).toFixed(3))
        }
        return acc
      }, { madrid: 0, draw: 0, levante: 0 })
    }
  },
  data () {
    return {
      adminAddress
    }
  },
  methods: {
    closeBetting () {
      this.$store.dispatch('closeBetting', { address: this.address })
    }
  }
}
</script>

<style lang="scss" scoped>
.betting {
  display: flex;
  flex-direction: column;
  align-items: center;

  .bet {
    margin: 48px 0 48px 0;
    padding: 32px;
    font-size: 24px;
  }
}
</style>
