<template>
  <div id="app">
    <div id="nav">
      <navbar-fixed></navbar-fixed>
    </div>
    <router-view />
  </div>
</template>

<script>
import NavbarFixed from "@/components/NavbarFixed.vue";
export default {
  components: { "navbar-fixed": NavbarFixed },
};
</script>

<style lang="scss">
/* @import "~@/assets/scss/vendors/bootstrap-vue/index"; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url("./assets/bg.svg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#nav {
  a {
    font-weight: bold;
  }
}
</style>
