import Vue from "vue"
import Router from "vue-router"


import home from "@/views/home"
import Registration from "@/views/auth/registration";
import Login from "@/views/auth/login";
import Events from "@/views/events";
import Event from "@/views/events/event";
import Create from "@/views/events/create";
import Profile from "@/views/profile"
import MyEvents from "@/views/my-events";

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
        },
        {
            path: '/my-events',
            name: 'my-events',
            component: MyEvents
        },
        {
            path: '/event/:id',
            name: 'event',
            component: Event
        },
        {
            path: '/events/create',
            name: 'event-create',
            component: Create
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }
    ]
})

export default router
