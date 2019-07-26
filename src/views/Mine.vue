<template>
  <div :class="prefix">
    <page title leftArea rightArea>
      <template v-slot:contents>
        <div class="top d-flex">
          <img :src="headerImg" alt />
          <p class="d-flex">
            <span>程富强</span>
            <span>中国邮政集团</span>
          </p>
        </div>
        <div class="operate">
          <p class="item" @click="goTo('Notification')">
            <span>通知</span>
            <a-icon type="right" />
          </p>
          <p class="item" @click="goTo('Setting')">
            <span>设置</span>
            <a-icon type="right" />
          </p>
        </div>
      </template>
    </page>
  </div>
</template>

<script>
import headerImg from 'assets/img/avatar.png'

const PREFIX = 'mine'

export default {
  data() {
    return {
      headerImg,
      prefix: PREFIX
    }
  },
  methods: {
    goTo(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>
