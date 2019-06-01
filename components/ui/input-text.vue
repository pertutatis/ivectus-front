<template>
  <label>
    <span><slot></slot></span>
    <input
      :value="model"
      :required="required"
      type="text"
      @change="emitChange"
    />
  </label>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      model: this.value
    }
  },
  methods: {
    emitChange() {
      this.$emit('input', this.model)
    }
  }
}
</script>

<style lang="postcss" scoped>
label {
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  padding: 0 10px;
  margin-bottom: 20px;
}

span {
  margin-bottom: 3px;
  font-size: 12px;
  color: #7b93a4;
}

input {
  font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
  width: 100%;
  padding: 0 8px;
  background-color: transparent;
  border: 1px solid #e5ebee;
  border-radius: 5px;
  color: #324c5b;
  font-size: 14px;
  outline: none;
  line-height: 36px;
}
</style>
