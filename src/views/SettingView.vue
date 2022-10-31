<template>
  <div
    class="flex-grow-1 main px-10 scroll-hidden"
    style="max-height: calc(100vh - 70px); overflow: scroll"
  >
    <h1 class="font-weight-bold pt-10 pb-5 pl-3">Setting</h1>
    <div class="text-caption grey--text pl-3">Member since: 20/02/2020</div>

    <v-card width="1200" color="main" flat>
      <v-row>
        <v-col>
          <div class="font-weight-bold">FIRST NAME</div>
          <v-text-field
            background-color="main"
            flat
            outlined
            dense
            solo
          ></v-text-field>
        </v-col>
        <v-col>
          <div class="font-weight-bold">LAST NAME</div>
          <v-text-field
            background-color="main"
            flat
            outlined
            dense
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="font-weight-bold">USERNAME</div>
          <v-text-field
            prefix="@"
            background-color="main"
            flat
            outlined
            dense
            solo
          ></v-text-field>
        </v-col>
        <v-col>
          <div class="font-weight-bold">EMAIL</div>
          <v-text-field
            background-color="main"
            flat
            outlined
            dense
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="font-weight-bold">SOCIAL LINK</div>
          <v-text-field
            background-color="main"
            flat
            outlined
            dense
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="d-flex justify-end px-4">
        <v-btn color="grey" class="darken-2 mr-10" rounded>Discard</v-btn>
        <v-btn width="120" color="indigo" rounded>Save</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.scroll-hidden::-webkit-scrollbar {
  display: none;
}
</style>