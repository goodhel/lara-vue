//import vue router
import { createRouter, createWebHistory } from 'vue-router'; // vue router 4

// import component
import Home from './pages/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
];

// create router
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

export default router