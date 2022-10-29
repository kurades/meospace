<template>
  <div style="min-height: inherit">
    <div
      class="d-flex"
      style="
         {
          min-height: inherit;
        }
      "
    >
      <div style="height: 100vh">
        <nav-drawer style="flex: 1"></nav-drawer>
      </div>
      <div
        class="flex-grow-1 flex-column scroll-hidden main"
        style="max-height: 100vh"
      >
        <nav-menu></nav-menu>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavDrawer from "@/components/NavDrawer.vue";
import NavMenu from "@/components/NavMenu.vue";
export default {
  components: {
    NavDrawer,
    NavMenu,
  },
};
</script>