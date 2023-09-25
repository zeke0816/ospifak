import {createRouter, createWebHistory} from 'vue-router'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'
import PlanIndexView from '../views/plans/PlanIndexView.vue'
import ClientHomeView from '../views/home/ClientHomeView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'
import EmployeeHomeView from '../views/home/EmployeeHomeView.vue'
import RecoverPasswordView from '../views/RecoverPasswordView.vue'
import ProfileIndexView from '@/views/profile/ProfileIndexView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ClientHomeView
        },
        {
            path: '/employee',
            name: 'employee',
            component: EmployeeHomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LogInView
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpView
        },
        {
            path: '/plans',
            name: 'plans',
            component: PlanIndexView
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileIndexView
        },
        {
            path: '/password/recover',
            name: 'password.recover',
            component: RecoverPasswordView
        },
        {
            path: '/password/change',
            name: 'password.change',
            component: ChangePasswordView
        },
    ]
})

export default router
