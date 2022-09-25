<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from './components/MoviesList.vue';
import PosterBg from './components/PosterBg.vue';

export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBg,
  },
  data: () => ({
    posterBg: '',
  }),
  computed: {
    ...mapGetters('movies', ['moviesList']),
  },
  methods: {
    ...mapActions('movies', ['fetchMovies']),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
}
</style>
