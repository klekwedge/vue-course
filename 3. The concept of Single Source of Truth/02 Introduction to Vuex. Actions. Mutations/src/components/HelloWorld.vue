<template>
  <div class="hello">
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  methods: {
    ...mapActions('users', ['addNewUser']),
    addUser() {
      const newUser = {
        name: 'Ben',
        age: 32,
      };
      this.addNewUser(newUser);
    },
  },
};
</script>

<style scoped>
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
