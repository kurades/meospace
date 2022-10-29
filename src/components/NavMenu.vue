<template>
  <v-card color="main" outlined height="70" max-height="100" class="px-10 d-flex flex-grow-1 justify-space-between align-center">
    <v-card color="main" outlined width="400">

      <v-text-field
      prepend-inner-icon="mdi-magnify"
      flat
      placeholder="Search..."
      color="white"
      ></v-text-field>
    </v-card>
      
    <v-btn 
    outlined
    ripple
    color="btnPrimary"
    class="font-weight-bold"
    >
    <v-icon>mdi-upload-outline</v-icon>
    upload</v-btn>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
</style>