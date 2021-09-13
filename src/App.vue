<template>
  <navbar />
  <!-- <mobilenav /> -->
  <sockscard />
  <!-- <solo /> -->
</template>

<script>
// import solo from './components/solo.vue'
// import mobilenav from './components/mobilenav.vue'
import navbar from './components/navbar.vue'
import sockscard from './components/sockscard.vue'

export default {
  name: 'App',
  components: {
    navbar,
    // mobilenav
    // solo
    sockscard

  }
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
