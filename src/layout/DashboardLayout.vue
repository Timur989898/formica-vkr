<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <side-bar
            :background-color="sidebarBackground"
            short-title="Argon"
            title="Argon"
        >
            <template slot="links">
                <sidebar-item
                    :link="{
                    name: 'Create target',
                    icon: 'ni ni-user-run text-primary',
                    path: '/create'
                  }"
                />
                <sidebar-item
                    :link="{
                    name: 'Dashboard',
                    icon: 'ni ni-tv-2 text-primary',
                    path: '/dashboard'
                  }"
                />

                <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}"/>
                <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}"/>
                <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
                <sidebar-item :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"/>
                <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
                <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/>

            </template>
        </side-bar>
        <div class="main-content" :data="sidebarBackground">
            <dashboard-navbar></dashboard-navbar>

            <div @click="toggleSidebar">
                <fade-transition :duration="200" origin="center top" mode="out-in">
                    <!-- your content here -->
                    <router-view></router-view>
                </fade-transition>
                <content-footer v-if="!$route.meta.hideFooter"></content-footer>
            </div>
        </div>
    </div>
</template>
<script>
    import DashboardNavbar from './DashboardNavbar.vue';
    import ContentFooter from './ContentFooter.vue';
    import {FadeTransition} from 'vue2-transitions';
    import {mapActions, mapMutations, mapState} from "vuex";
    import router from "@/router";
    import {db} from '@/db';

    export default {
        components: {
            DashboardNavbar,
            ContentFooter,
            FadeTransition
        },
        data() {
            return {
                sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
            };
        },
        computed: {
            ...mapState('auth', ['profile']),
        },
        watch: {
            async profile(newValue, oldValue) {
                if (!newValue) {
                    router.replace('/login');
                } else if (!oldValue) {
                    let inst = await db.collection('users').doc(newValue.uid).get();
                    this.setProfile(inst.data().info);
                    console.log(111)
                    this.loadMyTargets();
                }
            }
        },
        methods: {
            ...mapMutations('auth', ['setProfile']),
            ...mapActions('targets', ['loadMyTargets']),
            toggleSidebar() {
                if (this.$sidebar.showSidebar) {
                    this.$sidebar.displaySidebar(false);
                }
            }
        }
    };
</script>
<style lang="scss">
</style>
