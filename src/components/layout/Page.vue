<template>
  <div :class="prefix">
    <title-bar
      :title="title"
      :leftArea="leftArea"
      :rightArea="rightArea"
      @click-titlebar-right="clickTitleBar('right')"
    ></title-bar>
    <div class="contents">
      <slot name="contents"></slot>
    </div>
  </div>
</template>

<script>

const PREFIX = 'page'

export default {
  name: 'page',
  props: {
    title: String,
    leftArea: String,
    rightArea: String
  },
  data() {
    return {
      prefix: PREFIX
    }
  },
  methods: {
    clickTitleBar(type) {
      this.$emit(`click-titlebar-${type}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  overflow: hidden;

  .contents {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column;
  }
}
</style>

