import axios from 'axios';
import router from "../../routes";

const state = {
    posts: []
};

const customGetters = {
    GET_ALL_POSTS: function (state) {
        return state.posts;
    }
};

const customActions = {
    ACTION_FETCH_POSTS: async function(context) {
        await axios.get('posts')
            .then((response) => {
                context.commit('MUTATION_SET_ALL_POSTS', response.data.data);
            })
            .catch(exception => {
                console.log(exception);
            })
    },
    ACTION_STORE_POST: async function(context, payload) {
        await axios.post('posts/store', payload)
            .then((response) => {
                console.log(response);
                router.push({name: 'home'});
            })
            .catch(exception => {
                console.log(exception);
            })
    }
};

const customMutations = {
    MUTATION_SET_ALL_POSTS: function(state, payload) {
        state.posts = payload;
    }
};

export default {
    state,
    getters: customGetters,
    actions: customActions,
    mutations: customMutations
}