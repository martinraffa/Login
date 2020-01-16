<template>
  <v-app class="main styled-background" style="--background-image:url('/login-bg.svg')">
    <router-view></router-view>
  </v-app>
</template>

<script>


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