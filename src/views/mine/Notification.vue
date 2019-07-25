<template>
  <div :class="prefix">
    <page title="通知" rightArea="icon-kehujingli" @click-titlebar-right="goTo">
      <template v-slot:contents>
        <div>
          <p>The notification!</p>
        </div>
      </template>
    </page>
  </div>
</template>

<script>
const PREFIX = 'notification'
export default {
  data() {
    return {
      prefix: PREFIX
    }
  },
  methods: {
    goTo(){
      this.$router.push({
        name: 'Setting'
      })
    }
  }
}
</script>

<style>
</style>
