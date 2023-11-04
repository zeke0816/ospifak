import {createRouter, createWebHistory} from 'vue-router'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'
import PlanIndexView from '../views/plans/PlanIndexView.vue'
import ClientHomeView from '../views/home/ClientHomeView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'
import EmployeeHomeView from '../views/home/EmployeeHomeView.vue'
import RecoverPasswordView from '../views/RecoverPasswordView.vue'
import ProfileIndexView from '@/views/profile/ProfileIndexView.vue'
import ServicesIndexView from '../views/services/ServicesIndexView.vue'
import EmployeesIndexView from '@/views/employees/EmployeesIndexView.vue'
import ClientRequestsIndexView from '@/views/requests/ClientRequestsIndexView.vue'
import EmployeeProfileIndexView from '@/views/profile/EmployeeProfileIndexView.vue'
import EmployeeRequestsIndexView from '@/views/requests/EmployeeRequestsIndexView.vue'

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
            path: '/profile/employee',
            name: 'profile.employee',
            component: EmployeeProfileIndexView
        },
        {
            path: '/employees',
            name: 'employees',
            component: EmployeesIndexView
        },
        {
            path: '/services',
            name: 'services',
            component: ServicesIndexView
        },
        {
            path: '/requests',
            name: 'requests',
            component: ClientRequestsIndexView
        },
        {
            path: '/requests/employee',
            name: 'requests.employee',
            component: EmployeeRequestsIndexView
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
