import { SET_NAV } from 'constants/config.js'

export default {
  [SET_NAV](state, nav) {
    console.log('mutation-->')
    state.navs = state.navs.map((navItem) => {
      if (navItem.type === nav.type) {
        navItem.active = true
      } else {
        navItem.active = false
      }
      return navItem
    })
    state.focusNav = nav.type
  }
}