<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Fixed navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link 
                    class="nav-link "
                    :class="{active: (this.$route.name=='HelloWorld')}" 
                    :to="{ name: 'HelloWorld'}"
                >Home</router-link>
            </li>
            <li class="nav-item">
              <router-link 
                    class="nav-link "
                    :class="{active: (this.$route.name=='Library')}"
                    :to="{ name: 'Library'}"
                >Library</router-link>
            </li>
            <li v-if="loggedIn" class="nav-item">
                <router-link class="nav-link " to="/logout">Log out</router-link>
            </li>
            <li v-if="!loggedIn" class="nav-item">
                <router-link class="nav-link " to="/login">Log in</router-link>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="text">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    </nav>
</template>

<script>
import auth from '../auth'

export default {
  name: 'Menu',
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>