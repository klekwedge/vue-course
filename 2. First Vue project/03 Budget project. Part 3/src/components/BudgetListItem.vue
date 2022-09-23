<template>
  <div class="list-item">
    <span class="budget-comment">{{ item.comment }}</span>
    <span class="budget-value" :class="changeColor">{{ item.value }}</span>
    <i class="el-icon el-icon-top" v-if="determineSign"></i>
    <i class="el-icon el-icon-bottom" v-else-if="!determineSign"></i>
    <ElButton type="danger" size="mini" @click="showDialog">Delete</ElButton>

    <el-dialog v-model="dialogVisible" title="Attention" width="30%" :before-close="handleClose">
      <span>Are you sure you want to delete the entry?</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button
            type="primary"
            @click="deleteItem(item.id)"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    dialogVisible: false,
  }),
  computed: {
    determineSign() {
      if (this.item.value > 0) {
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    },
    changeColor() {
      return {
        'green-color': this.determineSign,
        'red-color': !this.determineSign,
      };
    },
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    deleteItem(id) {
      this.dialogVisible = false;
      this.$emit('deleteItem', id);
    },
    beforeClose(done) {
      this.dialogVisible = false;
      done();
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

.green-color {
  color: #38a169;
}

.red-color {
  color: #e53e3e;
}

.el-icon {
  margin-right: 10px;
}
</style>
