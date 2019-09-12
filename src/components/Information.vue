<template>
  <div class="information">
    <h1 class="title">Welcome <font-awesome-icon class="icon" icon="hand-spock" /></h1>
    <p class="text">
      Sweet roll caramels halvah cake jelly-o jelly-o. Soufflé jelly-o marzipan lemon drops muffin
      dessert. Sugar plum pie soufflé macaroon lollipop. Candy canes tiramisu sugar plum sweet roll
      cake candy canes. Caramels brownie chupa chups. Tootsie roll muffin candy powder soufflé
      sweet liquorice pastry. Macaroon apple pie caramels tootsie roll topping apple pie. Dessert
      bear claw ice cream jelly-o. Jelly marzipan marshmallow powder sweet roll apple pie danish
      powder cake. Jujubes icing dragée chocolate candy canes dragée chocolate bar. Pudding
      fruitcake cake. Bear claw jelly beans dessert ice cream pastry jujubes sugar plum lemon drops.
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
