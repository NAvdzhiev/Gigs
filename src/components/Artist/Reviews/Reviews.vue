<template>
    <v-container>
        <h1
            align="center"
            class="font-weight-bold white--text mt-10 mb-3"
            v-if="this.reviews.length <= 0"
        >There are no reviews for this artist!</h1>
        <v-card
            width="80%"
            v-for="review in reviews"
            :key="review.id"
            class="ml-auto mr-auto mt-10 elevation-7"
            tile
            color="#1a1c45"
        >
            <v-card-text style="color: #707281;white-space: break-spaces;">{{review.text}}</v-card-text>
            <h5 class="white--text pl-5 pb-3">Posted on {{review.date}} by {{review.author}}</h5>
            <v-btn
                class="ma-5"
                color="error"
                v-if="isAuthenticated && isCreator"
                @click="deleteReview(review.id)"
            >Delete</v-btn>
        </v-card>
    </v-container>
</template>
<script>
import db from "../../../firebaseInit";

export default {
    props: ["artist"],
    data() {
        return {
            reviews: []
        };
    },
    created() {
        db.collection("artists")
            .doc(this.artist.id)
            .collection("reviews")
            .limit(5)
            .onSnapshot(snapshot => {
                this.reviews = [];
                snapshot.forEach(doc => {
                    this.reviews.push({
                        id: doc.id,
                        text: doc.data().text,
                        author: doc.data().author,
                        date: doc.data().date
                    });
                });
            });
    },
    methods: {
        deleteReview(id) {
            db.collection("artists")
                .doc(this.artist.id)
                .collection("reviews")
                .doc(id)
                .delete();
        }
    },
    computed: {
        isAuthenticated() {
            return (
                this.$store.getters.user !== null &&
                this.$store.getters.user !== undefined
            );
        },
        isCreator() {
            if (!this.isAuthenticated) {
                return false;
            }
            return this.$store.getters.user.id === this.artist.creatorId;
        }
    }
};
</script>