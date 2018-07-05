import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 活动首页
const home = r => require.ensure([], () => r(require('@/views/home')), 'home')
// 活动规则
const rule = r => require.ensure([], () => r(require('@/views/rule')), 'rule')
//默认列表
const privity = r => require.ensure([],()=> r(require('@/views/privity')), 'privity')
//答题页
const answer = r => require.ensure([],()=> r(require('@/views/answer')),'answer')
//提示分享
const share = r => require.ensure([],()=> r(require('@/views/share')),'share')
// 被邀请者首页
const invitedhome = r => require.ensure([],()=> r(require('@/views/invitedhome')),'invitedhome')
// 默契值
const status = r => require.ensure([],()=> r(require('@/views/status')),'status')
//没有默契列表好友
const notprivity = r => require.ensure([],()=> r(require('@/views/notprivity')))
//注册
const login = r => require.ensure([],()=> r(require('@/views/login')),'login')
//登录
const register = r => require.ensure([],()=> r(require('@/views/register')),'register')
//商品
const shop = r => require.ensure([],()=> r(require('@/views/shop')),'shop')
//默契值
const defaults = r => require.ensure([],()=> r(require('@/views/defaults')),'defaults')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
  // 默认页面 主页面
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path:'/rule',
    	name:'rule',
    	component:rule
    },
    {
    	path:'/privity',
    	name:'privity',
    	component:privity
    },
    {
      path:'/answer',
      name:'answer',
      component:answer
    },
    {
      // 提示分享
      path:'/share',
      name:'share',
      component:share
    },
    {
      path:'/invitedhome',
      name:'invitedhome',
      component:invitedhome
    },
    {
      path:'/status',
      name:'status',
      component:status
    },
    {
      path:'/notprivity',
      name:'notprivity',
      component:notprivity
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/shop',
      name:'shop',
      component:shop
    },
    {
      path:'/defaults',
      name:'defaults',
      component:defaults
    }
  ]
})
