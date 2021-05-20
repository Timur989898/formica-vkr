<template>
    <div>
        <HeaderCards />

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
                                    <div class="col-12">
                                        <label for="create-target-title">Title</label>
                                        <base-input
                                            v-model="title"
                                            id="create-target-title"
                                            placeholder="Title"
                                            addon-left-icon="ni ni-user-run"
                                        ></base-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <label for="create-target-description">Description</label>
                                        <textarea
                                            v-model="description"
                                            class="form-control form-group"
                                            id="create-target-description"
                                            rows="3"
                                            placeholder="Some information ..."
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <label for="create-target-category">
                                            Category:
                                        </label>
                                        <br />
                                        <select
                                            class="form-control form-group"
                                            id="create-target-category"
                                            v-model="selectedCategory"
                                        >
                                            <option disabled value="0">Select category</option>
                                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                                {{ category.value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <label for="create-target-regularity">
                                            Regularity:
                                        </label>
                                        <br />
                                        <select
                                            class="form-control form-group"
                                            id="create-target-regularity"
                                            v-model="selectedRegularity"
                                        >
                                            <option disabled value="0">Select regularity</option>
                                            <option v-for="regularity in regularities" :key="regularity.id" :value="regularity.id">
                                                {{ regularity.title ? regularity.title : regularity.value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
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
    import HeaderCards from "@/components/Custom/HeaderCards";

    Vue.use(VueClipboard)
    export default {
        components: {HeaderCards},
        data() {
            return {
                title: '',
                description: '',
                categories: null,
                selectedCategory: null,
                regularities: null,
                selectedRegularity: null,
            }
        },
        computed: {
            ...mapState('auth', ['profile']),
            ...mapState('targets', ['myTargets']),
        },
        methods: {
            updateTitle(value) {
                console.log(value);
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
                            description: this.description,
                            regularity: this.regularities.find((regularity) => regularity.id === this.selectedRegularity),
                            category: this.categories.find((category) => category.id === this.selectedCategory)
                        })
                    }, {merge: true})
                    .then(() => {
                        console.log('target added!')
                    })
            }
        },
        async created() {
            try {
                const dbCategories = await db.collection('categories').get();
                const dbRegularities = await db.collection('regularity').get();
                this.categories = dbCategories.docs.map(doc => doc.data());
                this.regularities = dbRegularities.docs.map(doc => doc.data());
            } catch (e) {
                console.log(e);
            }
        }
    };
</script>
<style></style>
