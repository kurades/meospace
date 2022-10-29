<template>
  <div
    class="flex-grow-1 main px-10 scroll-hidden"
    style="max-height: calc(100vh - 70px); overflow: scroll"
  >
    <h1 class="font-weight-bold pt-10 pb-5">Album</h1>
    <div>
      <v-row class="flex-gap py-5">
        <!-- <photo-item
          v-for="item of photoItems"
          :key="item"
          :src="item"
          @redirect-detail="redirect"
        ></photo-item> -->
        <album-item v-for="item in albumList" :key="item.name"
        :src="item.src" :name="item.name" :number="item.number"
        > </album-item>
      </v-row>
    </div>
  </div>
</template>

<script>
import AlbumItem from "@/components/AlbumItem.vue";
export default {
  components: {
    AlbumItem,
  },
  data() {
    return {
      albumList: [
        {
          src: "https://pbs.twimg.com/media/FgPqEHAaMAAuGYU?format=jpg&name=4096x4096",
          name: "Album 1",
          number: "100",
        },
        {
          src: "https://pbs.twimg.com/media/FgPpwXjakAUM8rm?format=jpg&name=4096x4096",
          name: "Album 2",
          number: "100",
        },
        {
          src: "https://pbs.twimg.com/media/FgPX9apUoAAFcSO?format=jpg&name=900x900",
          name: "Album 3",
          number: "100",
        },
        {
          src: "https://pbs.twimg.com/media/FgKqOVmaEAEp-Hf?format=jpg&name=900x900",
          name: "Album 4",
          number: "100",
        },
        {
          src: "https://i-ogp.pximg.net/c/w1200_q80_a2_g1_u1_cr0:0.018:1:0.934/img-master/img/2022/09/04/13/12/33/100987302_p0_master1200.jpg",
          name: "Album 5",
          number: "100",
        },
        {
          src: "https://pbs.twimg.com/media/FgPMl6IaMAEB1xU?format=jpg&name=medium",
          name: "Album 6",
          number: "100",
        },
      ],
    };
  },
};
</script>

<style scoped>
.flex-gap {
  gap: 50px;
}
.scroll-hidden::-webkit-scrollbar{
  display: none;
}
</style>