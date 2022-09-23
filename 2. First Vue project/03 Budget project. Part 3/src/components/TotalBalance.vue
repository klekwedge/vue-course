<template>
  <div class="total-value" :class="[changeColor]">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    isActive: true,
  }),
  computed: {
    changeColor() {
      if (this.total > 0) {
        return '_green';
        // eslint-disable-next-line no-else-return
      } else if (this.total === 0) {
        return '';
      } else {
        return '_red';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

._green {
  color: #38a169;
}

._red {
  color: #e53e3e;
}
</style>
