import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import rotaryTable from '@/components/rotary-table'
import test from '@/components/test'

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
    },
      {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
