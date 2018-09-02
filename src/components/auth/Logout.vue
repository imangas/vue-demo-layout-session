<template>
  <router-view/>
</template>

<script>
import auth from '@/auth';

export default {
  name: 'Logout',
  data () {
    return {
    }
  },
  beforeMount() {
    auth.logout();
    this.$store.commit('initSesion', null);
    this.$router.push({ name: 'Login' });
  },
}
</script>

<style>
.error {
  color: red;
}
</style>