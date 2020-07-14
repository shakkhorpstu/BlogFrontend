import axios from 'axios';
import router from "../../routes";

const state = {
    posts: [],
    post: {}
};

const customGetters = {
    GET_ALL_POSTS: function (state) {
        return state.posts;
    },
    GET_SINGLE_POST: function (state) {
        return state.post;
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
    ACTION_SINGLE_POST: async function(context, id) {
        await axios.get('posts/view/' + id)
            .then((response) => {
                context.commit('MUTATION_SET_SINGLE_POST_FOR_EDIT', response.data.data);
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
    },
    ACTION_UPDATE_POST: async function(context, payload) {
        await axios.post('posts/update', payload)
            .then((response) => {
                console.log(response);
                router.push({name: 'home'});
            })
            .catch(exception => {
                console.log(exception);
            })
    },
    ACTION_DELETE_POST: async function(context, payload) {
        await axios.delete('posts/delete/' + payload.postId)
            .then((response) => {
                console.log(response);
                context.commit('MUTATION_DELETE_POST_FROM_ARRAY', payload.index);
            })
            .catch(exception => {
                console.log(exception);
            })
    }
};

const customMutations = {
    MUTATION_SET_ALL_POSTS: function(state, payload) {
        state.posts = payload;
    },
    MUTATION_SET_SINGLE_POST_FOR_EDIT: function(state, payload) {
        delete payload.category;
        delete payload.likes;
        delete payload.comments;
        delete payload.user;
        delete payload.created_at;
        delete payload.updated_at;
        state.post = payload;
    },
    MUTATION_DELETE_POST_FROM_ARRAY: function(state, index) {
        state.posts.splice(index, 1);
    }
};

export default {
    state,
    getters: customGetters,
    actions: customActions,
    mutations: customMutations
}