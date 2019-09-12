<template>
  <div id="app">
    <nav class="nav">
      <ul class="row">
        <li class="route">
          <router-link class="link" to="/">
            Information
          </router-link>
        </li>
        <li class="route">|</li>
        <li class="route">
          <router-link class="link" to="betting">
            Betting
          </router-link>
        </li>
        <li class="route">|</li>
        <span class="route">
          <a class="link" href="https://github.com/Tommytrg/techparty2019-witnet-workshop">Github</a>
        </span>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  margin-bottom: 24px;

  .row {
    display: flex;
  }

  .route {
    list-style: none;
    margin: 16px;

    .link {
      font-size: 18px;
      text-decoration: none;
      color: black;
    }
  }
}
</style>
