<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <!-- <input type="text" v-model="text" />
    <h3>
      Input text value: <i>{{ text }}</i>
    </h3> -->

    <input type="text" v-model="textComputed" />
    <h3>
      Input text value: <i>{{ text }}</i>
    </h3>

    <div class="checkboxes">
      <input type="checkbox" v-model="checkbox" />
      <h3>
        checkbox value: <i>{{ checkbox }}</i>
      </h3>

      <input type="checkbox" v-model="checkboxArray" value="one" />
      <input type="checkbox" v-model="checkboxArray" value="two" />
      <input type="checkbox" v-model="checkboxArray" value="three" />

      <h3>
        checkboxArray: <i>{{ checkboxArray }}</i>
      </h3>
    </div>

    <select v-model="select">
      <option value="bmw">BMW</option>
      <option value="audi">Audi</option>
    </select>

    <h3>
      Select value: <i>{{ select }}</i>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    text: '',
    checkbox: false,
    checkboxArray: [],
    select: '',
  }),
  computed: {
    textComputed: {
      get() {
        return this.text;
      },
      set(value) {
        console.log(value);
        this.text = value;
      },
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
