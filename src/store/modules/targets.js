import {db} from "@/db";

export default {
    namespaced: true,
    state: () => ({
        myTargets: [],
    }),
    mutations: {
        setMyTargets: (state, targets) => {
            state.myTargets = targets;
        }
    },
    actions: {
        loadMyTargets({commit, rootState}) {
            db.collection('users')
                .doc(rootState.auth.profile.uid)
                .get()
                .then(snapshot => {
                    const document = snapshot.data()
                    console.log(document)
                    commit('setMyTargets', document.targets);
                })
        },
    },
};
