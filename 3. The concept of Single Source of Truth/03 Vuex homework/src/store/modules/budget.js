const budget = {
  namespaced: true,
  state: {
    budgetList: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1,
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Some outcome comment',
        id: 2,
      },
    },
    totalBalance: 0,
  },
  getters: {
    budgetList: ({ budgetList }) => budgetList,
    totalBalance: ({ budgetList }) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      Object.values(budgetList).reduce((acc, item) => acc + item.value, 0),
  },
  mutations: {
    DELETE_ITEM(state, id) {
      delete state.budgetList[id];
    },
    ADD_ITEM(state, newItem) {
      console.log(newItem);
      state.budgetList[newItem.id] = newItem;
    },
  },
  actions: {
    deleteItem({ commit }, id) {
      commit('DELETE_ITEM', id);
    },
    addItem({ commit }, newItem) {
      commit('ADD_ITEM', newItem);
    },
  },
};

export default budget;
