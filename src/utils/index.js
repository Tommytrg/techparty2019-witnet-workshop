import Web3 from 'web3'

import { address, ABI } from './constants/dappContract'

export const getWeb3 = new Promise(async function (resolve, reject) {
  const web3js = window.ethereum

  if (window.ethereum) {
    const web3 = new Web3(web3js)

    try {
      await window.ethereum.enable()
      const isInjectedWeb3 = !!await web3.eth.getAccounts()

      resolve({
        isInjectedWeb3,
        web3
      })
    } catch (error) {
      console.error('------> ', error)
      reject(error)
    }
  } else {
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
    reject(new Error('Unable to connect to Metamask'))
  }
})

export const getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let contract = new web3.eth.Contract(ABI, address)
  resolve(contract)
})
