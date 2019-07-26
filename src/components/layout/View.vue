<template>
  <transition :name="wslide">
    <router-view class="w-child-view"></router-view>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      wslide: 'wslide-left'
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { isBack } = this.$router
    console.log(isBack)
    if (isBack) {
      this.wslide = 'wslide-right'
    } else {
      this.wslide = 'wslide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>
