import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import becomesponser from '../components/becomesponser.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import Terms from '../components/Terms.vue'
import Jobs from '../components/Jobs.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            component: HelloWorld
        },

        {
            path: '/Sponser',
            component: becomesponser,

        },
        {
            path: '/PrivacyPolicy',
            component: PrivacyPolicy,

        },
        {
            path: '/Terms',
            component: Terms,

        },
        {
            path: '/Jobs',
            component: Jobs,

        }

    ]


})


export default router;
