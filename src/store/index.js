import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import category from "./modules/category";
import posts from "./modules/posts";

const store = new Vuex.Store({
    modules: {
      category, posts
    },
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});

export default store;