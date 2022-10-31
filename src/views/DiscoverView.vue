<template>
  <div
    class="flex-grow-1 main px-10 my-10 scroll-hidden"
    style="max-height: calc(100vh - 70px); overflow: scroll"
  >
    <v-card  class="overflow-hidden rounded-xl">
      <v-img
        
        :src="require('@/assets/Recent_bg.jpg')"
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
    <div class="py-5">
      <v-row class="flex-gap py-5">
        <photo-item
          v-for="item of photoItems"
          :key="item"
          :src="item"
          @redirect-detail="redirect"
        ></photo-item>
      </v-row>
    </div>
  </div>
</template>

<script>
import PhotoItem from '@/components/PhotoItem.vue';
export default {
  components : {
    PhotoItem,
  },
  data(){
    return{
      photoItems: [
        "https://konachan.net/sample/c33db21d6ea45c5b49b9fcfd8b47aec4/Konachan.com%20-%20348656%20sample.jpg",
        "https://konachan.net/sample/f31bc6d9828ae5dc78f0c94777175df6/Konachan.com%20-%20348659%20sample.jpg",
        "https://konachan.net/sample/737784bfa144dcefc5ea763c490c42f8/Konachan.com%20-%20348638%20sample.jpg",
        "https://konachan.net/jpeg/7a4697eb243b6b4aad2536537b68367a/Konachan.com%20-%20348623%20aqua_eyes%20aqua_hair%20close%20flowers%20haruka_poi%20hatsune_miku%20long_hair%20twintails%20vocaloid.jpg",
        "https://konachan.net/sample/67b2e420f54c556dd108d795405bff2c/Konachan.com%20-%20348574%20sample.jpg",
        "https://konachan.net/sample/6614ae8d2ef34d19ba615b38ba48f564/Konachan.com%20-%20348511%20sample.jpg",
        "https://konachan.net/sample/782bdd0c6713afac9cb616f30dfdded8/Konachan.com%20-%20348481%20sample.jpg",
        "https://konachan.net/sample/971ccd89bb34e9a39b7656551dce63b7/Konachan.com%20-%20348479%20sample.jpg",
        
      ],  
    }
  },
  methods: {
    redirect : function(){
      this.$router.push(`/detail/1`)
    }
  },
};
</script>

<style scoped>
.flex-gap {
  gap: 40px;
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