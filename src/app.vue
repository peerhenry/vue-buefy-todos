<template>

  <div id="layout">
    <nav class="navbar" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">
        <a class="navbar-item" href="https://github.com/peerhenry/vue-buefy-todos">
          <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Bulma: a modern CSS framework based on Flexbox" width="28" height="28">
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/vue">Fat Vue</router-link>
          <router-link class="navbar-item" to="/vuex">With Vuex</router-link>
          <router-link class="navbar-item" to="/redux">With Redux</router-link>
        </div>
      </div>

    </nav>

    <router-view></router-view>

  </div>

</template>

<script>

export default {
  methods: {
    jimbo: function(){ console.log('hihaho') }
  }
}
</script>

<style scoped>
</style>