<template>
  <proper-nav />
  <mid />
  <sockscard />
  <low />
</template>

<script>
import ProperNav from './components/properNav.vue'
import mid from './components/mid.vue'
import sockscard from './components/sockscard.vue'
import low from './components/low.vue'

export default {
  name: 'App',
  components: {
    ProperNav,
    mid,
    sockscard,
    low
    },
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
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
body{
    overflow: hidden;
}
</style>
