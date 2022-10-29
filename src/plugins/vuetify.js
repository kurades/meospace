import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark : {
        main: '#1C1C27',
        secondary: '#4C4C6B',
        btnPrimary: '#B4B4FF',
      }
    },
    dark: true,
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});
