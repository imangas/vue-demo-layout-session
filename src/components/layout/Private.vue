<template>
  <div id="content">
    <my-menu></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '@/components/Menu';

export default {
  name: 'PrivateLayout',
  components: {
    MyMenu,
  },
  data: function () {
    return {
    };
  },
}
</script>