import router from '@/router';
import firebase from "firebase";
// import {db} from "@/db";

export default {
    namespaced: true,
    state: () => ({
        profile: null,
    }),
    getters: {
        isLoggedIn: (state) => !!state.profile,
        displayName: (state) =>
            state.profile.firstName ?
                `${state.profile.firstName} ${state.profile.lastName}` :
                state.profile.displayName
    },
    mutations: {
        setProfile: (state, profile) => {
            state.profile = profile;
            if (profile) {
                state.profile.name = /.+?(?= )/.exec(profile.displayName)[0];
            }
        }
    },
    actions: {
        logout({commit}) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    router.replace('/login');
                    commit('setProfile', null);
                    localStorage.removeItem('profile');
                })
                .catch(err => {
                    console.log(err);
                });
        },
        loginWithGoogle({commit}) {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                    let provider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(provider)
                        .then((result) => {
                            commit('setProfile', result.user.providerData[0]);
                            // db.collection('users')
                            //     .doc(result.user.providerData[0].uid)
                            //     .update({ info: Object.assign({}, result.user.providerData[0]) })
                            //     .then(() => {
                            //         console.log('user updated!')
                            //     })
                            router.replace('/test');
                        }).catch((error) => {
                        console.log(error);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
