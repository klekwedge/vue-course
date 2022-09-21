<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <h1>{{ firstName }}</h1>
  <h2>{{ num + 2 }}</h2>
  <h3>{{ num > 1 ? "Number > 1" : "Number < 1" }}</h3>
  <h3>{{ obj }}</h3>
  <h3>{{ obj.age }}</h3>

  <a v-bind:href="linkUrl">Click 1</a>
  <a :href="linkUrl">Click 2</a>

  <a :[attrKey]="linkUrl">Click 3</a>

  <!--
  <div class="message" v-if="msgVisible">Some message</div>
  <div class="message" v-else>Another message</div> -->

  <!-- <div class="message" v-if="msgVisible === 1">Some message</div>
  <div class="message" v-else-if="msgVisible === 2">Second message</div>
  <div class="message" v-else>Another message</div> -->

  <template v-if="msgVisible === 1">
    <div class="message">Some message</div>
  </template>

  <template v-else-if="msgVisible === 2">
    <div class="message">Second message</div>
  </template>

  <template v-else>
    <div class="message">Another message</div>
  </template>

  <div v-show="isVisibleBlock">V show example</div>

  <div class="name-input" v-if="inputNameVisible">
    <label>Name</label> <input type="text" placeholder="Input name" key="name-input"/>
  </div>

  <div class="nickname-input" v-else>
    <label>Nickname</label> <input type="text" placeholder="Input nickname" key="nickname-input"/>
  </div>

  <button @click="inputNameVisible = !inputNameVisible">Change form</button>
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
    msgVisible: 1,
    isVisibleBlock: true,
    inputNameVisible: true,
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
