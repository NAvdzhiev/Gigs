<template>
    <v-container>
        <h1
            align="center"
            class="font-weight-bold white--text mt-10 mb-10"
            v-if="whishlist.length <= 0"
        >You haven't tracked any artist yet!</h1>
        <v-row>
             <v-col cols="12" md="3" class="mt-10" v-for="artist in whishlist" :key="artist.id">
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
            .orderBy("name")
            .limit(6)
            .onSnapshot(snapshot => {
                this.whishlist = [];
                snapshot.forEach(doc => {
                    this.whishlist.push({
                        id: doc.id,
                        name: doc.data().name,
                        imageUrl: doc.data().imageUrl,
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>