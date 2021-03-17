<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-green"
                                sub-title="924"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Performance"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">Create target</h3>
                        </div>
                        <div class="card-body">
                            <form @submit="createTarget">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="create-target-title">Title</label>
                                        <base-input
                                            id="create-target-title"
                                            placeholder="Title"
                                            addon-left-icon="ni ni-user-run"
                                            :value="title"
                                            @input="updateTitle"
                                        ></base-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="create-target-description">Description</label>
                                        <textarea
                                            class="form-control form-group"
                                            id="create-target-description"
                                            rows="3"
                                            placeholder="Some information ..."
                                            :value="description"
                                            @input="updateDescription"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <base-button type="primary" @click="createTarget">Create</base-button>
                                    </div>
                                </div>
                                <div v-if="myTargets">
                                    {{ myTargets }}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import Vue from 'vue';
    import {db} from '@/db';
    import VueClipboard from 'vue-clipboard2';
    import {mapState} from "vuex";
    import firebase from 'firebase';

    Vue.use(VueClipboard)
    export default {
        data() {
            return {
                title: '',
                description: '',
            }
        },
        computed: {
            ...mapState('auth', ['profile']),
            ...mapState('targets', ['myTargets']),
        },
        methods: {
            updateTitle(value) {
                this.title = value;
            },
            updateDescription(e) {
                this.description = e.target.value;
            },
            createTarget(e) {
                e.preventDefault();
                db.collection('users')
                    .doc(this.profile.uid)
                    .update({
                        targets: firebase.firestore.FieldValue.arrayUnion({
                            title: this.title,
                            description: this.description
                        })
                    }, {merge: true})
                    .then(() => {
                        console.log('target added!')
                    })
            }
        }
    };
</script>
<style></style>
