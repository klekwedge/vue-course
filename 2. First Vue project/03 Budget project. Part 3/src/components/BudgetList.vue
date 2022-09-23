<template>
  <div class="budget-list-wrap">
    <!-- <div class="budget-list-btns">
      <ElButton @click="this.filter = 'all'"> Show all </ElButton>
      <ElButton @click="this.filter = 'expense'"> Show only expenses </ElButton>
      <ElButton @click="this.filter = 'income'"> Show only income </ElButton>
    </div> -->

    <ElCard :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="(item, prop) in filteredList()"
          :item="item"
          :key="prop"
          @deleteItem="onDeleteItem"
        />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
    filter: 'all',
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$emit('deleteItem', id);
    },
    filteredList() {
      // if (this.filter === 'expense') {
      //   const filterArr = Object.entries(this.list);
      //   // console.log(filterArr);
      //   // console.log(filterArr[0][1].value);

      //   const buff = filterArr.filter((el) => el[1].value > 0);
      //   console.log(Object.fromEntries(buff));

      //   return buff;
      //   // eslint-disable-next-line no-else-return
      // } else if (this.filter === 'income') {
      //   return this.list.filter((elem) => elem.value < 0);
      // }
      // console.log(this.list);
      return this.list;
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.budget-list-btns {
  margin-bottom: 20px;
}
</style>
