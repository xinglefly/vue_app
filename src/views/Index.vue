<template>
  <div>
    <p>This The index!</p>

    <img src="../assets/img/avatar.png" alt />
    <i class="iconfont icon-tianjia"></i>
    <a-button type="primary" @click="show = !show">Primary</a-button>
    <br />
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.slide-fade-enter-active
  transition all 0.3s ease
.slide-fade-leave-active
  transition all 0.8s cubic-bezier(1, 0.5, 0.8, 1)
.slide-fade-enter, .slide-fade-leave-to
  transform translateX(100px)
  opacity 0
</style>
