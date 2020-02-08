import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Todos from "../views/Todos";


Vue.use(VueRouter);



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: Todos
    }
  ]
})

export default router
