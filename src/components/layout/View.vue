<template>
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { isBack } = this.$router
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style lang="stylus">
.child-view
  position absolute
  transition transform .4s cubic-bezier(.55,0,.1,1)
  top 0
  bottom 0
  left 0
  right 0
  background #fff
  will-change transform
.slide-left-enter,
.slide-right-leave-active
  transform translate3D(100%, 0, 0)
  z-index 1
.slide-left-leave-active,
.slide-right-enter
  transform translate3D(-50px, 0, 0)
  z-index -1
</style>
