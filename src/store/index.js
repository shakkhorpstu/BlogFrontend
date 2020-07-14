import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        getCounter(state) {
            return state.counter;
        }
    },
    mutations: {
        setCounter(state) {
            state.counter++;
        }
    },
    actions: {
        setCounterAction(context) {
            context.commit('setCounter');
        }
    }
});

export default store;