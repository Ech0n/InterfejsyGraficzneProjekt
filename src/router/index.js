import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/search',
            name: 'search',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/SearchView.vue')
        },
        {
            path: '/course/:id',
            name: 'course',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/CourseView.vue')
        },
        {
<<<<<<< HEAD
            path: '/payment',
            name: 'payment',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/PaymentView.vue')
=======
        path: '/login',
        name: 'login',

        component: () => import('../views/LoginView.vue')
>>>>>>> d658f039565d3e853687461b9ae1fa32c8062d2b
        }
    ]
})

export default router