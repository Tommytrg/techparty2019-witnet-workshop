<template>
  <div class="shield">
    <img class="logo" :src="path" />
    <p class="team">{{ team }}</p>
  </div>
</template>

<script>
export default {
  name: 'shield',
  props: {
    team: {
      required: true,
      type: String
    },
    path: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.shield {
  .logo {
    height: 200px;
  }

  .team {

  }
}

</style>
