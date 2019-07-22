<template>
  <div :class="prefix">
    <keep-alive>
      <component :is="focusNav"></component>
    </keep-alive>
    <footer id="footerBar" class="footer-bar">
      <nav class="d-flex space-around">
        <div
          v-for="nav in navs"
          :key="nav.key"
          class="nav-item align-item-center"
          :class="{'active': nav.type === focusNav}"
          @click="changeNav(nav)"
        >
          <p class="nav-icon">
            <i class="iconfont" :class="nav.active ? nav.iconfontAct : nav.iconfont"></i>
          </p>
          <p class="nav-name">{{nav.name}}</p>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SET_NAV } from 'constants/config.js'
import Index from './Index'
import TopClient from './TopClient'
import WarningClient from './WarningClient'
import LeaveClient from './LeaveClient'

const PREFIX = 'portal'

export default {
  components: {
    Index, TopClient, WarningClient, LeaveClient
  },
  computed: {
    ...mapState({
      focusNav: state => state.focusNav,
      navs: state => state.navs
    })
  },
  data() {
    return {
      prefix: PREFIX
    }
  },
  methods: {
    ...mapMutations({
      setNav: SET_NAV
    }),
    changeNav(nav) {
      this.setNav(nav)
    }
  },
  mounted() {
    document.getElementById('footerBar').addEventListener('touchmove', (e) => {
      e.preventDefault()
    }, {
        passive: false
      })
  }
}
</script>

