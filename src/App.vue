<template>
  <!-- <navbar /> -->
  <!-- <mobilenav /> -->
  <proper-nav />
  <sockscard />
  <!-- <solo /> -->
  <!-- <mainnav /> -->
</template>

<script>
// import solo from './components/solo.vue'
// import mobilenav from './components/mobilenav.vue'
// import navbar from './components/navbar.vue'
import ProperNav from './components/properNav.vue'
import sockscard from './components/sockscard.vue'
// import mainnav from './components/mainnav.vue'

export default {
  name: 'App',
  components: {
    // navbar,
    ProperNav,
    // mobilenav
    // solo
    sockscard
    // mainnav
  },
  // beforemounted(){
  //   this.$store.dispatch("setdata");
  // }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
