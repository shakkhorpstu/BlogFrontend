import axios from 'axios';

const state = {
    categories: []
};

const customGetters = {
  GET_ALL_CATEGORIES: function (state) {
      return state.categories;
  }
};

const customActions = {
    ACTION_FETCH_CATEGORIES: async function(context) {
        await axios.get('categories')
            .then(response => {
                context.commit('MUTATION_SET_ALL_CATEGORIES', response.data.data);
            })
            .catch(exception => {
                console.log(exception);
            })
    }
};

const customMutations = {
    MUTATION_SET_ALL_CATEGORIES: function(state, payload) {
        state.categories = payload;
    }
};

export default {
    state,
    getters: customGetters,
    actions: customActions,
    mutations: customMutations
}