import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/test',
            name: 'test',
            component: () => import('../views/Test.vue')
        },
        {
            path: '/again-test',
            name: 'againtest',
            component: () => import('../views/AgainTest.vue')
        },
    ]
});

export default router;