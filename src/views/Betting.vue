<template>
  <div class="betting">
    <Score :homeScore="homeScore" :awayScore="awayScore" :totalBet="totalBet" />

    <button >Resolver</button>

    <BetForm :address="address" />
    <BetListing :bets="betListing" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
      ].sort((a, b) => parseInt(a.amount) < parseInt(b.amount))
    },
    totalBet () {
      return this.betListing.reduce((acc, bet) => {
        if (bet.team === 0) {
          acc.draw += parseInt(bet.amount)
        } else if (bet.team === 1) {
          acc.madrid += parseInt(bet.amount)
        } else if (bet.team === 2) {
          acc.levante += parseInt(bet.amount)
        }
        return acc
      }, { madrid: 0, draw: 0, levante: 0 })
    }
  },
  methods: {
    closeBetting () {
      this.$store.dispatch('closeBetting')
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
