import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import rotaryTable from '@/components/rotary-table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/rotary-table'
    },
    {
      path: '/rotary-table',
      name: 'rotary-table',
      component: rotaryTable
    }
  ]
})
