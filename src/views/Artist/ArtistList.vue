<template>
    <v-container>
        <v-row>
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
    computed: {
        artists() {
            return this.$store.getters.loadedArtists;
        },
        user() {
            return this.$store.getters.user.id;
        }
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