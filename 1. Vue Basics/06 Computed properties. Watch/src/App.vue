<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <h1>Hello {{ fullName }}</h1>
    <input type="text" @keyup.enter="setName" />
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
    firstName: 'John',
    lastName: 'Smith',
  }),
  // computed: {
  //   fullName() {
  //     return `${this.firstName || 'Default'} ${this.lastName || 'User'}`;
  //   },
  // },
  computed: {
    fullName: {
      get() {
        return `${this.firstName || 'Default'} ${this.lastName || 'User'}`;
      },
      set(value) {
        console.log(value);
        const [firstName, lastName] = value.split(' ');
        console.log(firstName, lastName);

        this.firstName = firstName;
        this.lastName = lastName;
      },
    },
  },
  methods: {
    setName(e) {
      // this.firstName = e.target.value;
      this.fullName = e.target.value;
    },
    onLastNameUpdate(value) {
      console.log(value);
    },
  },
  watch: {
    lastName: 'onLastNameUpdate',
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
