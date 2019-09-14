<template>
  <div>
    <form class="form">
    <h3 class="title">Create a bet</h3>
      <div class="field">
        <label class="label" for="amount">Amount</label>
        <input class="input amount" v-model="amount" type="text" id="amount" placeholder="Amount in eth">
        <p v-if="amountError" class="error">This field is required</p>
      </div>

      <div class="field">
        <label class="label" for="bet">Result</label>
        <div class="winner-selector">
          <button
            class="option" :class="{ selected: result == '1' }"
            @click="() => pickResult('1')"
          >
            <img class="image" :src="rmpath" alt="">
          </button>
          <button
            class="option" :class="{ selected: result === '0' }"
            @click="() => pickResult('0')"
          >
            <p>Draw</p>
          </button>
          <button
            class="option" :class="{ selected: result == '2' }"
            @click="() => pickResult('2')"
          >
            <img class="image" :src="lpath" alt="">
          </button>
        </div>
        <p v-if="resultError" class="error">This field is required</p>
      </div>
      <div class="field">
        <label class="label" for="address">Address</label>
        <input class="input address" :value="address" type="text" disabled>
      </div>
      <div class="buttons">
        <button class="button" @click="createBet">Bet</button>
      </div>
    </form>
  </div>
</template>

<script>

const realmadrid = require('../assets/realmadrid.svg')
const levante = require('../assets/levante.svg')

export default {
  name: 'betForm',
  data () {
    return {
      amount: null,
      result: null,
      amountError: false,
      resultError: false,
      rmpath: realmadrid,
      lpath: levante
    }
  },
  props: {
    address: {
      type: String
    }
  },
  watch: {
    amount () {
      this.amountError = false
    },
    result () {
      this.resultError = false
    }
  },
  methods: {
    createBet () {
      if (this.amount && this.amount !== 0 && this.result) {
        this.$store.dispatch('createBet', { amount: this.amount, result: this.result, address: this.address })
      } else {
        this.amountError = this.amount
        this.resultError = !this.result
      }
    },
    pickResult (result) {
      this.result = result
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    padding: 36px;
    width: max-content;
    display: flex;
    flex-direction: column;
    text-align: left;

    .title {
      font-size: 24px;
    }

    .label {
      width: min-content;
    }

    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;

      .error {
        margin: 8px 0 0 0;
        color: #f44336;
        font-size: 13px;
      }

      .input {
        &.amount{
          width: 128px;
        }

        &.address {
          width: 352px;
        }
      }

      .winner-selector  {
        display: flex;
        width: max-content;
        border: 1px solid black;
        border-radius: 4px;

        .option {
          background: none;
          padding: 0;
          margin: 0;
          border: 1px solid black;

          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          width: 48px;
          outline: none;

          &.selected {
            background: lightgray;
          }
        }
      }

      .image {
        height: 30px;
      }
    }

    .buttons {
      width: max-content;
      align-self: flex-end;

      .button {
        margin: 0 16px;
        align-self: end;
        width: max-content;
      }

      .link {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
