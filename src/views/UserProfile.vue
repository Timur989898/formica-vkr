<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">{{ helloText }}</h1>
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
<!--                        <a href="#!" class="btn btn-info">Edit profile</a>-->
                    </div>
                </div>
            </div>
        </base-header>

        <div v-if="profile" class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a>
                                        <img :src="profile.photoURL" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            <div class="d-flex justify-content-between">
                                <base-button size="sm" type="info" class="mr-4">Connect</base-button>
                                <base-button size="sm" type="default" class="float-right">Message</base-button>
                            </div>
                        </div>
                        <div class="card-body pt-0 pt-md-4">
<!--                            <div class="row">-->
<!--                                <div class="col">-->
<!--                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">-->
<!--                                        <div>-->
<!--                                            <span class="heading">22</span>-->
<!--                                            <span class="description">Friends</span>-->
<!--                                        </div>-->
<!--                                        <div>-->
<!--                                            <span class="heading">10</span>-->
<!--                                            <span class="description">Photos</span>-->
<!--                                        </div>-->
<!--                                        <div>-->
<!--                                            <span class="heading">89</span>-->
<!--                                            <span class="description">Comments</span>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                            <div class="text-center">
                                <h3>
                                  {{ displayName }}<span class="font-weight-light"></span>
                                </h3>
                                <div class="h5 font-weight-300">
                                    <i class="ni location_pin mr-2"></i>{{ profile.city ? `${profile.city}, ` : ''}}{{ profile.country }}
                                </div>
                                <div class="h5 mt-4">
                                    <i class="ni business_briefcase-24 mr-2"></i>@{{ profile.username }}
                                </div>
<!--                                <div>-->
<!--                                    <i class="ni education_hat mr-2"></i>University of Computer Science-->
<!--                                </div>-->
                                <hr class="my-4" />
                                <p>{{ profile.aboutMe }}</p>
<!--                                <a href="#">Show more</a>-->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">My account</h3>
                                </div>
<!--                                <div class="col-4 text-right">-->
<!--                                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">User information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Username"
                                                        placeholder="Username"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.info.username"
                                                        @change="updateProfile"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email address"
                                                        placeholder="jesse@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.info.email"
                                                        @change="updateProfile"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="First name"
                                                        placeholder="First name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.info.firstName"
                                                        @change="updateProfile"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Last name"
                                                        placeholder="Last name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.info.lastName"
                                                        @change="updateProfile"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Address"
                                                        placeholder="Home Address"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.info.address"
                                                        @change="updateProfile"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="City"
                                                        placeholder="City"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.info.city"
                                                        @change="updateProfile"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Country"
                                                        placeholder="Country"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.info.country"
                                                        @change="updateProfile"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Postal code"
                                                        placeholder="Postal code"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.info.zipCode"
                                                        @change="updateProfile"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Description -->
                                <h6 class="heading-small text-muted mb-4">About me</h6>
                                <div class="pl-lg-4">
                                    <div class="form-group">
                                        <base-input alternative=""
                                                    label="About Me">
                                            <textarea
                                              rows="4"
                                              class="form-control form-control-alternative"
                                              placeholder="A few words about you ..."
                                              v-model="model.info.aboutMe"
                                              @change="updateProfile"
                                            />
                                        </base-input>
                                    </div>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapGetters, mapMutations, mapState} from "vuex";
  import {db} from "@/db";

  export default {
    name: 'user-profile',
    data() {
      return {
        model: {
          info: {
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            country: '',
            zipCode: '',
            about: '',
            aboutMe: '',
          }
        },
      }
    },
    computed: {
      ...mapState('auth', ['profile']),
      ...mapGetters('auth', ['displayName']),
      helloText() {
        return this.profile?.firstName ? `Hello, ${this.profile.firstName}!` : (this.profile?.name ? `Hello, ${this.profile.name}!` : 'Hello!');
      }
    },

    watch: {
      profile: {
        // call it upon creation too
        immediate: true,
        handler(profile) {
          if (profile) {
            this.$bind('model', db.collection('users').doc(profile.uid));
          }
        },
      },
    },

    methods: {
      ...mapMutations('auth', ['setProfile']),
      updateProfile() {
        let info = this.model.info;
        let id = this.profile?.uid;
        console.log({...this.profile, ...info});
        db.collection('users')
          .doc(id)
          .update({info: {...this.profile, ...info}})
          .then(() => {
            this.setProfile({...this.profile, ...info});
            console.log('user updated!')
          })
      }
    },
  };
</script>
<style></style>
