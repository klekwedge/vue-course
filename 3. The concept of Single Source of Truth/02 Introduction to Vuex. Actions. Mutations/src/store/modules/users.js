import Vue from 'vue';

const userStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        name: 'John',
        age: 25,
      },
    },
  },
  getters: {
    usersList: ({ list }) => Object.values(list),
  },
  mutations: {
    ADD_USER(state, user) {
      state.list[user.id] = user;
    },
  },
  actions: {
    addNewUser({ commit }, user) {
      const newUser = { ...user, id: String(Math.random()) };
      commit('ADD_USER', newUser);
    },
  },
};

export default userStore;
