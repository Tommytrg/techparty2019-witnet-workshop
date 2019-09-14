import Vue from 'vue'
import Vuex from 'vuex'

import {
  getWeb3,
  // pollWeb3,
  getContract
} from '@/utils'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // strict: true,
  state: {
    score: {
      home: 0,
      away: 0
    },
    // bet { result: '', amount: 0, userAddress: '' }
    bets: [],
    web3: {
      isInjected: false,
      instance: null,
      addresses: [],
      error: null
    },
    contractInstance: null
  },
  mutations: {
    setCurrentBets (state, { bets }) {
      state.bets = bets
    },
    setScore (state, { home, away }) {
      state.score = { home, away }
    },
    async registerWeb3Instance (state, { isInjectedWeb3, web3 }) {
      const addresses = await web3.eth.getAccounts()
      state.web3 = {
        isInjected: isInjectedWeb3,
        instance: web3,
        addresses
      }
    },
    pollWeb3Instance (state, payload) {
      state.web3.coinbase = payload.coinbase
      state.web3.balance = parseFloat(parseFloat(payload.balance, 10).toFixed(3))
    },
    registerContractInstance (state, { contractInstance }) {
      state.contractInstance = contractInstance
    }
  },
  actions: {
    async createBet ({ commit }, { amount, result, address }) {
      const weis = this.state.web3.instance.utils.toWei(amount, 'ether')
      this.state.contractInstance.methods.participate(result).send({ from: address, value: weis, to: address }) // { value: amount })
    },
    async registerWeb3 ({ commit }) {
      const result = await getWeb3
      commit('registerWeb3Instance', result)
    },
    pollWeb3 ({ commit }, payload) {
      commit('pollWeb3Instance', payload)
    },
    async closeBetting ({ commit }, { address }) {
      console.log(address)
      console.log('----', this.state)
      const a = await this.state.contractInstance.methods.resolve().send({ from: address })
      console.log('ooooo', a)

      // console.log('---', this.state.contractInstance.methods)
    },
    getContract ({ dispatch, commit }, payload) {
      getContract.then(async result => {
        const currentAway = await result.methods.actualAway().call()
        const currentHome = await result.methods.actualHome().call()
        const currentMadrid = await result.methods.getContestants(1).call()
        const currentDraw = await result.methods.getContestants(0).call()
        const currentLevante = await result.methods.getContestants(2).call()
        const [drawBets, madridBets, levanteBets] = [currentDraw, currentMadrid, currentLevante].map((teamBets, index) => {
          return teamBets.map(bet => {
            return {
              address: bet[0],
              amount: this.state.web3.instance.utils.fromWei(bet[1]),
              // TODO: too error prone if we change the sort of the initial array
              team: index
            }
          })
        })

        commit('setCurrentBets', { bets: { madrid: madridBets, draw: drawBets, levante: levanteBets } })
        commit('setScore', { away: currentAway, home: currentHome })
        commit('registerContractInstance', { contractInstance: result })
      }).catch(e => {
        console.log('error:', e)
      })
    }
  }
})

export default store
