<template>
  <div :class="prefix" :style="styleObj">
    <div class="title-bar-left">
      <i
        v-if="leftArea.length && leftArea.includes('icon')"
        class="iconfont"
        :class="leftArea"
        @click="emitParent($event, 'left')"
      ></i>
      <div v-else @click="emitParent($event, 'left')">{{ leftArea }}</div>
    </div>
    <div class="title">{{ title }}</div>
    <div class="title-bar-right">
      <i
        v-if="rightArea.length && rightArea.includes('icon')"
        class="iconfont"
        :class="rightArea"
        @click="emitParent($event, 'right')"
      ></i>
      <div v-else @click="emitParent($event, 'right')">{{ rightArea }}</div>
    </div>
  </div>
</template>

<script>
const PREFIX = 'title-bar'

export default {
  name: 'title-bar',
  props: {
    styleObj: {
      type: Object,
      default() {
        return {
          background: 'linear-gradient(338.21deg, #3AAD68 0%, #3AB542 100%)',
          fontSize: '18px',
          color: '#fff'
        }
      }
    },
    title: {
      type: String,
      default: ''
    },
    leftArea: {
      type: String,
      default: 'icon-xiangzuo2'
    },
    rightArea: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      prefix: PREFIX
    }
  },
  methods: {
    emitParent(e, type) {
      if (type === 'left' && this.leftArea === 'icon-xiangzuo2') {
        // console.log('router->', this.$router)
        this.$router.goBack()
        return
      }
      this.$emit(`click-titlebar-${type}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/vars/colors.styl'
@import '../../assets/styles/vars/size.styl'
.title-bar
  width 100%
  height 88px
  line-height 88px
  font-size $size32
  text-align center
  // background-color: $brand_color;
  // color: $color-white;
  justify-content center
  position relative
  .title-bar-left, .title-bar-right
    width 100px
    height 100%
    position absolute
    top 0
    bottom 0
  .title-bar-left
    left 0
  .title-bar-right
    right 0
</style>
