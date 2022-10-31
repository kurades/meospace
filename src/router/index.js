import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name : "home",
    path : "/",
    component : ()=>import("@/views/MainView.vue"),
    children : [
      {
        path : '',
        component : ()=>import('@/views/HomeView.vue')
      },
      {
        path : 'detail/:id',
        component : ()=>import('@/views/DetailView.vue')
      },
      {
        path : 'album',
        component : ()=>import('@/views/AlbumView.vue')
      },
      {
        path : 'discover',
        component : ()=>import('@/views/DiscoverView.vue')
      },
      {
        path : 'setting',
        component : ()=>import('@/views/SettingView.vue')
      },
    ]
  },
  {
    name : "login",
    path : "/login",
    component : ()=>import("@/views/LoginView.vue"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
