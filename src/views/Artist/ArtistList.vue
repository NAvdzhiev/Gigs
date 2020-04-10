<template>
    <v-container>
        <v-row>
            <h1 align="center" v-if="this.artists.length <= 0">There are no arists!</h1>
            <v-col cols="12" md="3" v-for="artist in artists" :key="artist.id">
                <v-card elevation="6">
                    <router-link :to="'/artist/' + artist.id">
                        <v-img height="200px" :src="artist.imageUrl"></v-img>
                    </router-link>
                    <v-card-title>{{ artist.name }}</v-card-title>
                    <v-btn @click="trackArtist(artist)">Track Artist</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import db from '../../firebaseInit';
export default {
    data() {
        return {
            artists: [],
        }
    },
    computed: {
        user() {
            return this.$store.getters.user.id;
        }
    },
    created() {
        db.collection('artists').
        orderBy('name')
        .limit(6)
        .onSnapshot(snapshot => {
            this.artists = [];
            snapshot.forEach(doc => {
                this.artists.push({
                    id: doc.id,
                    name: doc.data().name,
                    imageUrl: doc.data().imageUrl
                })
            })
        })
    }, 
    methods: {
        trackArtist(artist) {
           db.collection('users')
           .doc(this.user)
           .collection('whishlist')
           .doc(artist.id)
           .set({
               name: artist.name,
               imageUrl: artist.imageUrl
           })
           
        }
    }
};
</script>