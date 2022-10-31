<template>
  <div
    class="flex-grow-1 main px-10 scroll-hidden"
    style="max-height: calc(100vh - 70px); overflow: scroll"
  >
    <h1 class="font-weight-bold pt-10 pb-5">Photos</h1>
    <div>
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
import PhotoItem from "@/components/PhotoItem.vue";
export default {
  components: {
    PhotoItem,
  },
  data() {
    return {
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
    };
  },
  methods: {
    redirect : function(){
      this.$router.push(`/detail/1`)
    }
  },
};
</script>

<style >
.flex-gap {
  gap: 30px;
}
.scroll-hidden::-webkit-scrollbar{
  display: none;
}
</style>