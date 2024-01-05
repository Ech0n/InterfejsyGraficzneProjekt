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
            path: '/payment',
            name: 'payment',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/PaymentView.vue')
        },
        {
            path: '/login',
            name: 'login',
    
            component: () => import('../views/LoginView.vue')
        },        
        {
            path: '/signup',
            name: 'signup',
            component: () => import('../views/SignUpSelectionView.vue'),
        },
        {            
            path: '/signup/user',
            name: 'signupUser',
            component: () => import('../views/SignUpUserView.vue')
        },                
        {            
            path: '/signup/teacher',
            name: 'signupTeacher',
            component: () => import('../views/SignUpTeacherView.vue')
        }, 
        {            
            path: '/chat',
            name: 'chat',
            component: () => import('../views/ChatView.vue')
        },
        {            
            path: '/cart',
            name: 'cart',
            component: () => import('../views/ShoppingCartView.vue')
        },              
        {
            path: '/u/:id',
            name: 'user',
    
            component: () => import('../views/UserView.vue')
        },
        {
            path: '/add-course',
            name: 'add-course',

            component: () => import('../views/AddCourseView.vue')
        },
    ]
})

export default router