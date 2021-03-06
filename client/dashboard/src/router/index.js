import Vue from 'vue'
import Router from 'vue-router'
import Stores from '@/components/Stores'
import Goods from '@/components/Goods'
import StoresGoods from '@/components/StoresGoods'
import Members from '@/components/Members'
import Baskets from '@/components/Baskets'
import BasketsItems from '@/components/BasketsItems'
import Carts from '@/components/Carts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stores',
      component: Stores
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }, {
      path: '/store/:store_id',
      name: 'Stores_Goods',
      component: StoresGoods
    }, {
      path: '/members',
      name: 'Members',
      component: Members
    }, {
      path: '/baskets',
      name: 'Baskets',
      component: Baskets
    }, {
      path: '/basket/:basket_id',
      name: 'BasketsItems',
      component: BasketsItems
    }, {
      path: '/carts',
      name: 'Carts',
      component: Carts
    }
  ]
})
