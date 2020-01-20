<template>
  <v-app class="main styled-background" style="--background-image:url('/login-bg.svg')">
    <router-view>
      <create />
      <list />
      
    </router-view>
  </v-app>
</template>

<script>
import login from './components/login.vue'
import create from './components/create.vue'
import list from './components/list.vue'

export default {
  name: 'App',
  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="less" scoped>

  .main.styled-background{
    background-image: var( --background-image );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

</style>