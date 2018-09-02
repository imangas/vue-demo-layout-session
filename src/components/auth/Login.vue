<template>
  <form @submit.prevent="login" class="form-signin">
    <img class="mb-4" src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    
    <label for="inputEmail" class="sr-only">Email address</label>
    <input v-model="email" type="email" id="inputEmail"
      class="form-control" placeholder="Email address"
      required autofocus>
    
    <label for="inputPassword" class="sr-only">Password</label>
    <input v-model="pass" type="password" id="inputPassword"
      class="form-control" placeholder="Password (hint: 123123)"
      required>
    
    <p v-if="error" class="error">Bad login information</p>
    
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted"></p>
  </form>
</template>

<script>
import auth from '@/auth';

export default {
  name: 'Login',
  data () {
    return {
      email: 'joe@example.com',
      pass: '',
      error: false,
      token: this.$store.getters.getToken,
    }
  },
  metaInfo: {
    title: 'Welcome',
    link: [
      { rel: 'stylesheet', href: '/static/css/signin.css' },
    ]
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$store.commit('initSesion', auth.getToken());
          this.$router.push(this.$route.query.redirect || '/home');
        }
      })
    },
  }
}
</script>

<style>
.error {
  color: red;
}
</style>