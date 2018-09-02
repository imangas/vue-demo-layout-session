<template>
  <router-view id="app"/>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Demo Layout + Session',
    htmlAttrs: {
      lang: 'en',
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
