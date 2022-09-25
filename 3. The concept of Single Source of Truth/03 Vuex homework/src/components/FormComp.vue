<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="top">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comment" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from 'vuex';

const checkValue = (rule, value, callback) => {
  if (value === 0) {
    return callback(new Error('Please input another number'));
  }

  return callback();
};

export default {
  name: 'FormComp',
  data: () => ({
    formData: {
      type: 'INCOME',
      comment: '',
      value: 0,
    },
    rules: {
      type: [{ required: true, message: 'Please select type', trigger: 'blur' }],
      comment: [{ required: true, message: 'Please input comment', trigger: 'change' }],
      value: [
        { required: true, message: 'Please input comment', trigger: 'change' },
        { type: 'number', message: 'Value must be a number', trigger: 'change' },
        { validator: checkValue, trigger: 'submit' },
      ],
    },
  }),
  methods: {
    ...mapActions('budget', ['addItem']),
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.type === 'INCOME') {
            const newObj = {
              ...this.formData,
              value: Math.abs(this.formData.value),
              id: String(Math.random()),
            };
            this.addItem(newObj);
          } else if (this.formData.type === 'OUTCOME') {
            if (Math.sign(this.formData.value === -1)) {
              const newObj = {
                ...this.formData,
                value: this.formData.value * -1,
                id: String(Math.random()),
              };
              this.addItem(newObj);
            } else {
              const newObj = {
                ...this.formData,
                id: String(Math.random()),
              };
              this.addItem(newObj);
            }
          }
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>
