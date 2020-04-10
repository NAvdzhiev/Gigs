<template>
    <v-container>
        <h1
            align="center"
            class="white--text display-2 mt-10 pt-10 pb-10 mb-10 font-weight-bold"
        >Artists</h1>
        <v-row>
            <h1
                align="center"
                v-if="this.artists.length <= 0"
                class="white--text display-2 mt-10 pt-10 pb-10 mb-10 font-weight-bold"
            >There are no arists!</h1>
            <v-col cols="12" md="3" v-for="artist in artists" :key="artist.id">
                <v-card elevation="0" color="transparent" style="text-align: center">
                    <router-link :to="'/artist/' + artist.id">
                        <v-img height="200px" :src="artist.imageUrl"></v-img>
                    </router-link>
                    <router-link :to="'/artist/' + artist.id" style="text-decoration: none">
                        <h3
                            class="white--text mt-5 mb-5 font-weight-bold"
                            align="center"
                        >{{ artist.name }}</h3>
                    </router-link>
                    <v-btn
                        class="mt-0 mb-10 font-weight-bold"
                        color="#fb3a64"
                        small
                        dark
                        width="150px"
                        rounded
                        @click="trackArtist(artist)"
                    >Track Artist</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import db from "../../firebaseInit";
export default {
    data() {
        return {
            artists: []
        };
    },
    computed: {
        user() {
            return this.$store.getters.user.id;
        }
    },
    created() {
        db.collection("artists")
            .orderBy("name")
            .limit(6)
            .onSnapshot(snapshot => {
                this.artists = [];
                snapshot.forEach(doc => {
                    this.artists.push({
                        id: doc.id,
                        name: doc.data().name,
                        imageUrl: doc.data().imageUrl
                    });
                });
            });
    },
    methods: {
        trackArtist(artist) {
            db.collection("users")
                .doc(this.user)
                .collection("whishlist")
                .doc(artist.id)
                .set({
                    name: artist.name,
                    imageUrl: artist.imageUrl
                });
        }
    }
};
</script>