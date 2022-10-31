<template>
  <div class="flex-grow-1 main px-10 py-10 scroll-hidden"
    style="max-height: calc(100vh - 70px); overflow: scroll">
    <v-row class="">
      <v-col>
        <div class="text-h5 font-weight-bold">
          <v-icon size="40px">mdi-chevron-left</v-icon>Back to somewhere
        </div>
      </v-col>
      <v-col class="d-flex align-center justify-end">
        <v-avatar size="50" color="red">
          <img
            src="https://pbs.twimg.com/media/FgPVbtTVUAA644R?format=jpg&name=small"
            alt="alt"
          />
        </v-avatar>
        <div class="ml-4 mr-10">
          <div class="text-h6 font-weight-bold">Uploader: MTS GEI</div>
          <div class="text-caption grey--text">Ocococ, 28th, 202020</div>
        </div>
        <v-btn color="secondary" class="ml-3"
          ><v-icon>mdi-chevron-left</v-icon></v-btn
        >
        <v-btn color="secondary" class="ml-3"
          ><v-icon>mdi-chevron-right</v-icon></v-btn
        >
        <v-btn color="secondary" class="ml-3"
          ><v-icon>mdi-download</v-icon></v-btn
        >
        <v-btn color="secondary" class="ml-3"><v-icon>mdi-heart</v-icon></v-btn>
      </v-col>
    </v-row>
    <div class="mt-5">
        <v-img
          class="rounded-lg overflow-hidden"
          src="https://pbs.twimg.com/media/FgPDx38VUAAojVm?format=jpg&name=4096x4096"
          max-width="1570"
          max-height="800"
          contain="false"
        >
        </v-img>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.scroll-hidden::-webkit-scrollbar{
  display: none;
}
</style>