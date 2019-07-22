<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import api from 'constants/api'

export default {
  data() {
    return {
      
    }
  },
  created() {
    console.log('url->', this.$chinapost)
    console.log('url->', this.$testurl)
    this.testHttp()
  },
  methods: {
    async testHttp() {
      let ret = await this.$testurl.get(api.testUrl)
      console.log('test http-->', ret)
    }
  }
}
</script>
