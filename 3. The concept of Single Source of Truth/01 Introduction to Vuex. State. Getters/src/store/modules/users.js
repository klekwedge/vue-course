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
  mutations: {},
  actions: {},
};

export default userStore;
