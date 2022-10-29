<template>
  <div
    class="flex-grow-1 main px-10 mt-10 scroll-hidden"
    style="max-height: calc(100vh - 70px); overflow: scroll"
  >
    <v-card  class="overflow-hidden rounded-xl">
      <v-img
        
        src="https://konachan.net/sample/307138abd8afc264ec9cd7a535651481/Konachan.com%20-%20349069%20sample.jpg"
        height="350"
      >
      <div class="banner-section">
        <div class="d-flex flex-column pl-10 pt-10">
          <div class="text-h3 font-weight-bold ">Recently Upload</div>
          <div class="text-subtitle-2 grey--text pt-5">Let’s check it out what community uploaded </div>
        </div>
      </div>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex-gap {
  gap: 20px;
}
.scroll-hidden::-webkit-scrollbar {
  display: none;
}
.banner-section{
  background: rgba(0,0,0,.5);
  height: 100%;
}
.v-application .text-h3{
  font-family: 'Montserrat', sans-serif !important;;
}
</style>