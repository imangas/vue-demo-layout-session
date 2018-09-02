<template>
  <component :is="currentView" :session="checkSession"/>
</template>

<script>
import auth from '@/auth';
import Public from './Public';
import Private from './Private';

export default {
  name: 'Home',
  components: {
    Public,
    Private,
  },
  data() {
    return {
        currentView: Public,
    };
  },
  computed: {
    checkSession() {
      const token = this.$store.getters.getToken;
      // eslint-disable-next-line
      this.currentView = token?Private:Public;
      return token;
    }
  },
};
</script>
