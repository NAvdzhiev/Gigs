import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: '#06062a',
                secondary: '#1a1c45',
                accent: '#fb3a64',
            }
        }
    }
});
