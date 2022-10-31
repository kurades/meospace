<template>
  <v-card
    max-width="500"
    max-height="300"
    class="overflow-hidden"
    @click="photoClick"
    @mouseenter="toggleOverlay"
    @mouseleave="unToggleOverlay"
  >
    <v-img :src="src" class=""> </v-img>

    <Transition name="trans">
      <div class="item-overlay" v-show="isShow">
        <div class="ml-2" style="position: absolute; bottom: 0px">
          <div class="d-flex align-center">
            <v-avatar size="50">
              <img
                style="object-fit: cover"
                src="https://konachan.net/data/preview/66/86/6686cccdd69bf44cc2a956115ffb76ff.jpg"
                alt="alt"
              />
            </v-avatar>
            <p class="my-0 mx-2 font-weight-bold">MTS</p>
          </div>
          <p class="my-2 ml-2 font-weight-medium text-caption">20/12/2012</p>
        </div>
        <v-btn color="error" fab class="overlay-heart" @click.stop="setFav">
          <v-icon v-if="isFav">mdi-heart</v-icon>
          <v-icon v-else>mdi-heart-outline</v-icon>
        </v-btn>
      </div>
    </Transition>
  </v-card>
</template>

<script>
export default {
  props: ["src"],
  data() {
    return {
      isShow: false,
      isFav: false,
    };
  },
  methods: {
    toggleOverlay: function () {
      this.isShow = true;
    },
    unToggleOverlay: function () {
      this.isShow = false;
    },
    setFav: function () {
      this.isFav = !this.isFav;
    },
    photoClick: function () {
      this.$emit("redirect-detail",this.src)
    },
  },
};
</script>

<style>
.trans-enter-active,
.trans-leave-active {
  transition: 0.3s;
}
.trans-enter-from,
.trans-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
.item-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0));
}

.overlay-heart {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>