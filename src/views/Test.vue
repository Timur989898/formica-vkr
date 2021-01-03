<template>
  <div class="test">
    {{ documents }}
    <br>
    <input v-model="testInput" type="text">
    <button @click="sendTest">1212</button>
  </div>
</template>
<script>
  import { db } from '@/db';
  import {mapState} from "vuex";

  export default {
    data() {
      return {
        documents: [],
        testInput: 'qqqq',
      }
    },

    mounted() {
      setTimeout(() => {
        console.log(this.documents);
      }, 3000);
    },

    computed: {
      ...mapState('auth', ['profile']),
    },

    methods: {
      sendTest() {
        let input = this.testInput;
        let id = this.profile.uid;
        db.collection('users')
          .doc(id)
          .set({value: input})
          .then(() => {
            console.log('user updated!')
          })
      }
    },

    firestore: {
      documents: db.collection('users'),
    },
  };
</script>
<style>
  .test {
    height: 80vh;
    background-color: lightgrey;
    padding: 80px;
  }
</style>
