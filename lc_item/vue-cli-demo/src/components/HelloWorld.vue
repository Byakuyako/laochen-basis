<template>
  <div class="hello">
    <h2>这是 Hello {{user}} 组件</h2>
    <div>{{brief.title}}</div>
    <div>{{brief.desc}}</div>
  </div>
</template>

<script>
export default {
  props: ["user", "brief"]
}
</script>
