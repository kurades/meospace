<template>
  <v-app >
    <!-- <nav-drawer></nav-drawer> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
// import NavDrawer from './components/NavDrawer.vue'

export default {
  name: 'App',
  components :{
    // NavDrawer
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.v-application{
  font-family: 'Montserrat', sans-serif !important;
}
.v-application a{
  text-decoration: none;
}
html{
  overflow-y: hidden !important;
}
.v-application .text-h5,
.v-application .text-h6,
.v-application .text-caption {
  font-family: "Montserrat", sans-serif !important;
}
</style>
