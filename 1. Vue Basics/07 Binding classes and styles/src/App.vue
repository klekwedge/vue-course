<template>
  <div>
    <!-- <h1 class="title" :class="[activeClass]">Hello world</h1> -->
    <h1 :class="{ 'active-class': isActive }">Hello world 1</h1>
    <h1 :class="classObj">Hello world 2</h1>
    <h1 :class="[classObj, activeClass]">Hello world 3</h1>

    <h1 :style="{ 'font-size': fontSize + 'px' }">Example</h1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    activeClass: 'my-active-class',
    isActive: true,
    fontSize: 20,
  }),
  computed: {
    classObj() {
      return {
        'active-class-2': this.isActive,
        error: !this.isActive,
      };
    },
  },
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
