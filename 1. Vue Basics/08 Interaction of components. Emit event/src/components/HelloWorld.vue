<template>
  <div class="hello">
    <button @click="onClick">Send event</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    counter: 0,
  }),
  methods: {
    onClick() {
      this.counter += 1;
      console.log('Click');
      this.$emit('onChangeCounter', this.counter);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
