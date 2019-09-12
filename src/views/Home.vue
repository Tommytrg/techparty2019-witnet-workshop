<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'home',
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
    this.$store.dispatch('getContract')
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
