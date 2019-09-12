import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from './views/Home.vue'
import Betting from './views/Betting.vue'

import Information from './components/Information'

Vue.use(Router)

async function checkIfContractIsLoaded (to, from, next) {
  await store.dispatch('getContract')
  next()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: checkIfContractIsLoaded,
      children: [
        {
          name: 'information',
          path: '/',
          component: Information
        },
        {
          path: '/betting',
          name: 'betting',
          component: Betting
        }
      ]
    }
  ]
})
