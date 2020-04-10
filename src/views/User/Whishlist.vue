<template>
    <v-container>
        <v-row>
            <v-col cols="4" v-for="artist in whishlist" :key="artist.id">
                <v-card width="300px">
                    <v-card-text>
                        <router-link :to="'/artist/' + artist.id">
                            <v-img height="200px" :src="artist.imageUrl"></v-img>
                        </router-link>
                        <v-card-title>{{ artist.name }}</v-card-title>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import db from "../../firebaseInit";
export default {
    props: ["id"],
    data() {
        return {
            whishlist: []
        };
    },

    created() {
        db.collection("users")
            .doc(this.id)
            .collection("whishlist")
            .orderBy('name')
            .limit(6)
            .onSnapshot(snapshot => {
                this.whishlist = [];
                snapshot.forEach(doc => {
                    this.whishlist.push({
                        id: doc.id,
                        name: doc.data().name,
                        imageUrl: doc.data().imageUrl
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>