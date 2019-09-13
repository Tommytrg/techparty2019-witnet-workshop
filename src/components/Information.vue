<template>
  <div class="information">
    <h1 class="title">Welcome <font-awesome-icon class="icon" icon="hand-spock" /></h1>
    <p class="text">
      We nevertheless encourage you to try it out.
    </p>
    <p class="text">
      It is experimental and unconventional.
    </p>
    <p class="text">
      It might not work. <font-awesome-icon class="icon" icon="meh-blank" />
    </p>

    <router-link class="link" to="/betting">Continue</router-link>
  </div>
</template>

<script>
export default {
  name: 'information'
}
</script>

<style scoped lang="scss">
  .information {
    max-width: 500px;

    .link {
      color: black;
    }
    .title { }

    .text { }

    .button { }
  }
</style>
