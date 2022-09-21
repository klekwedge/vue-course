<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <ul>
      <li v-for="(color, index) in colors" :key="index">{{ index + 1 }} {{ color }}</li>
    </ul>

    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}: {{ user.age }}</li>
    </ul>

    <ul>
      <li v-for="(value, name, index) in product" :key="index">
        {{ index }} {{ name }}: {{ value }}
      </li>
    </ul>

    <!-- <div><input type="text" @keyup.enter="addNewColor" /></div> -->
    <div><input type="text" @keyup.enter="deleteProp" /></div>

    <ul>
      <li v-for="(color, index) in colors" :key="index">{{ index + 1 }} {{ color }}</li>
    </ul>
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
    colors: ['orange', 'black', 'yellow'],
    users: [
      { name: 'John', age: 30, id: 1 },
      { name: 'Ben', age: 25, id: 2 },
    ],
    product: {
      brand: 'Apple',
      model: 'IPhone 11 Pro',
      price: '$1000',
    },
  }),
  methods: {
    addNewColor(e) {
      this.colors.push(e.target.value);

      // this.colors[this.colors.length] = e.target.value; // wrong
      // this.$set(this.colors, this.colors.length, e.target.value); // right
    },
    deleteProp(e) {
      delete this.product[e.target.value];

      // this.$delete(this.product, e.target.value);
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
