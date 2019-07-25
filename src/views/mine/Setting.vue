<template>
  <div :class="prefix">
    <page title="设置">
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
      prefix: PREFIX
    }
  }
}
</script>

<style>
</style>
