const Notification = () => import(/* webpackChunkName: "mine" */ './Notification.vue')
const Setting = () => import(/* webpackChunkName: "mine" */ './Setting.vue')

export default [
  {
    path: 'notification',
    name: 'Notification',
    component: Notification
  },
  {
    path: 'setting',
    name: 'Setting',
    component: Setting
  }
]