<template>
    <div class="demo-type">
      <el-avatar :size="10"  src="https://empty" @error="errorHandler">
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </div>
  </template>
  
  <script lang="ts" setup>
  const errorHandler = () => true
  </script>

  <style scoped>
.el-avatar{
  width: 20px;
  left: 0;
  position: fixed;
}
</style>
  