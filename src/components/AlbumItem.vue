<template>
  <v-card max-width="250" rounded="lg" link contain max-height="500" flat class="transparent overflow-hidden">
    <v-img :src="src" height="250" > </v-img>
    <div class="font-weight-bold my-2 text-h6">{{name}}</div>
    <div class="grey--text">{{number}} images</div>
  </v-card>
</template>

<script>
export default {
  props : ['src','number','name']
};
</script>

<style>
.v-application .text-h6{
  font-family: 'Montserrat', sans-serif !important;;
}
</style>