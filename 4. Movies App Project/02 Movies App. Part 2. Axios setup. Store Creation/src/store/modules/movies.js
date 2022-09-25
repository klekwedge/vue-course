import instance from '@/plugins/axios';

const movieStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(context) {
      // console.log(context);
      const response = await instance.get('/', {
        params: {
          apikey: process.env.VUE_APP_API_KEY,
          plot: 'full',
          i: 'tt0111161',
        },
      });

      console.log(response);
    },
  },
};

export default movieStore;
