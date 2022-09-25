<template>
  <div id="app">
    <FormComp />
    <TotalBalance />
    <BudgetList />
  </div>
</template>

<script>
import BudgetList from './components/BudgetList.vue';
import TotalBalance from './components/TotalBalance.vue';
import FormComp from './components/FormComp.vue';

export default {
  name: 'app',
  components: {
    BudgetList,
    TotalBalance,
    FormComp,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
