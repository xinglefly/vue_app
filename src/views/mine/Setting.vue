<template>
  <div :class="prefix">
    <page :styleObj="styleObj" title="设置">
      <template v-slot:contents>
        <p>This the setting!</p>
      </template>
    </page>
  </div>
</template>

<script>

const PREFIX = 'setting'
export default {
  data() {
    return {
      prefix: PREFIX,
      styleObj: {
        backgroundColor: '#fff',
        color: 'black'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.setting
  p
    text-align center
</style>
