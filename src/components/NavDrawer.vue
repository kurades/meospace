<template>
  <!-- <div class="full-height"> -->
  <!-- <v-card height="100%" color="main" class="d-flex"> -->
  <v-navigation-drawer permanent color="main">
    <v-list class="mb-10">
      <v-list-item class="pa-5">
        <v-img :src="require('../assets/Untitled-2.png')"></v-img>
      </v-list-item>
    </v-list>

    <v-list nav class="pl-5">
      <v-list-item
        link
        v-for="item in navLink"
        :key="item.text"
        active-class="active"
        :to="item.path"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="font-weight-bold nav-link link-color">{{
          item.text
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-row class="user-info" color="secondary" :tile="true">
      <v-col cols="3">
        <v-avatar size="50">
          <img
            src="https://www.latinolife.co.uk/sites/default/files/1588158604.jpg"
            alt="alt"
          />
        </v-avatar>
      </v-col>
      <v-col cols="5">
        <p class="pt-1 mb-0">asdkas</p>
        <p class="text-caption font-weight-lighten grey--text">@son_gei</p>
      </v-col>
      <v-col class="pt-4 mt-1" cols="3">
        <v-btn text class="pa-0">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-navigation-drawer>

  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      navLink: [
        {
          icon: "mdi-home-outline",
          text: "Home",
          path: "/",
        },
        {
          icon: "mdi-image-multiple",
          text: "Album",
          path: "/album",
        },
        {
          icon: "mdi-compass-outline",
          text: "Discover",
          path: "/discover",
        },
        {
          icon: "mdi-heart-outline",
          text: "Favorite",
          path: "/favorite",
        },
        {
          icon: "mdi-cog-outline",
          text: "Setting",
          path: "/setting",
        },
      ],
    };
  },
};
</script>

<style>
.full-height {
  height: 100vh;
}
.nav-link {
  font-size: 1rem !important;
}
.v-list-item.active > .v-list-item__title,
.v-list-item.active > .v-list-item__icon {
  color: white;
}
.v-list-item > .v-list-item__title,
.v-list-item > .v-list-item__icon {
  color: #616161;
}
.theme--dark.v-icon {
  color: inherit;
}

.user-info {
  position: absolute;
  width: calc(100%);
  bottom: 0;
  background: #4c4c6b;
}
.row {
  margin: 0 !important;
}
</style>