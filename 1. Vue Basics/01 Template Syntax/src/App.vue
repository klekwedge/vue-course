<template>
  <h1>{{ firstName }}</h1>
  <h2>{{ num + 2 }}</h2>
  <h3>{{ num > 1 ? "Number > 1" : "Number < 1" }}</h3>
  <h3>{{ obj }}</h3>
  <h3>{{ obj.age }}</h3>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    firstName: 'John',
    num: 2,
    obj: {
      age: 30,
    },
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
