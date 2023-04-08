import Vue from "vue"
import Router from "vue-router"


import home from "@/views/home"
import Registration from "@/views/auth/registration";
import Login from "@/views/auth/login";
import Events from "@/views/events";

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes:[
        {
            path:'/',
            name:'Home',
            component:home
        },
        {
            path:'/signup',
            name:'Registration',
            component:Registration
        },
        {
            path: '/signin',
            name: 'Login',
            component: Login

        },
        {
            path: '/events',
            name: 'events',
            component: Events
        }
    ]
})

export default router