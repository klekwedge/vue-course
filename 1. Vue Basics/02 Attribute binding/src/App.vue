<template>
  <h1>{{ firstName }}</h1>
  <h2>{{ num + 2 }}</h2>
  <h3>{{ num > 1 ? "Number > 1" : "Number < 1" }}</h3>
  <h3>{{ obj }}</h3>
  <h3>{{ obj.age }}</h3>

  <a v-bind:href="linkUrl">Click 1</a>
  <a :href="linkUrl">Click 2</a>

  <a :[attrKey]="linkUrl">Click 3</a>
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
    linkUrl: 'https://google.com',
    attrKey: 'href',
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
