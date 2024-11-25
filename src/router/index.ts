import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const auth: Boolean = true;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'select-company',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/login/:company?',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
            ]
        },
    ]
});

router.beforeEach(async (to, from) => {
    if (
        to.path == '/' && auth
    ) {
        return { name: 'dashboard' }
    }
})

export default router;
