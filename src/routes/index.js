import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home')
        },
        {
            path: '/registration',
            name: 'registration',
            component: () => import('../views/Registration')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login')
        },
        {
            path: '/posts/create',
            name: 'posts.create',
            component: () => import('../views/Posts/Create')
        },
        {
            path: '/posts/:id/edit',
            name: 'posts.edit',
            component: () => import('../views/Posts/Edit')
        },
    ]
});

export default router;