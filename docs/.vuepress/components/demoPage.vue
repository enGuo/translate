<template>
  <div class="demo-page">
    <Content :custom="false" />
  </div>
</template>

<style scoped>
.content:not(.custom) {
  max-width: 1140px;
}
</style>
