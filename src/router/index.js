import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import SightImgs from '@/pages/detail/components/SightImgs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
      // meta: {
      //   noKeepAlive: true
      // }
    },
    {
      path: '/sightimgs',
      name: 'SightImgs',
      component: SightImgs
      // meta: {
      //   noKeepAlive: true
      // }
    }
  ]
})
