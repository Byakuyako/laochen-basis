<template>
  <div>
    <button @click="clickFn">点击修改父组件内容</button>
  </div>
</template>

<script>
  export default {
    name: 'Children',
    methods: {
      clickFn: function () {
        this.$emit("changeParent", "小陈")
      }
    }
  };
</script>
