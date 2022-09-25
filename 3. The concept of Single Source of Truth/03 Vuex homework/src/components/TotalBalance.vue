<template>
  <div class="total-value" :class="[changeColor]">Balance: {{ totalBalance }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TotalBalance',
  computed: {
    ...mapGetters('budget', ['totalBalance']),
    changeColor() {
      if (this.totalBalance > 0) {
        return '_green';
        // eslint-disable-next-line no-else-return
      } else if (this.totalBalance === 0) {
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
