import Vue from "vue"
import Router from "vue-router"


import home from "@/views/home"

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes:[
        {
            path:'/',
            name:'Home',
            component:home
        }
    ]
})

export default router