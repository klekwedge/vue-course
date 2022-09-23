<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <!-- <button @click="onClick">Click</button> -->
    <!-- <button @click="onClick('some value', $event)">Click</button> -->
    <button @click.right="onClick('some value', $event)">Click</button>
    <a href="" @click.prevent="onLinkClick">Link</a>

    <h1>{{ text }}</h1>
    <input type="text" @keyup.enter="onKeyUp" />
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
    text: '',
  }),
  methods: {
    onClick(value, e) {
      console.log('Click', e);
      console.log('Click', value);
    },
    onLinkClick() {
      console.log('link click');
    },
    onKeyUp(event) {
      console.log(event);
      this.text = event.target.value;
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
