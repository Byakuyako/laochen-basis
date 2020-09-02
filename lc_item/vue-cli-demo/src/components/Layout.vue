<template>
  <div class="wrap">
    <div class="top">这是头部</div>
    <div class="middle">
      <div class="leftPart">
        <h1>这是左边</h1>
        <slot name="left"></slot>
      </div>
      <div class="rightPart">
        <h1>这是右边</h1>
        <slot name="right"></slot>
      </div>
    </div>
    <div class="foot">这是尾部</div>
  </div>
</template>

<script>
  export default {
    name: 'layout'
  };
</script>

<style>
  .middle {
    display: flex;
  }
  .leftPart, .rightPart{
    width: 50%;
  }
</style>