<template>
    <v-container>
        <v-row>
            <v-col cols="6" class="mt-5">
                <h1>Upcoming Gigs:</h1>
                <app-gigs :artist="artist"></app-gigs>
                <app-add-gigs :artist="artist"></app-add-gigs>
            </v-col>
            <v-col cols="6">
                <v-row justify="center" class="mt-5">
                    <v-card width="80%" class="elevation-6">
                        <v-img :src="artist.imageUrl"></v-img>
                        <v-card-title>{{artist.name}}</v-card-title>
                        <v-card-text>{{artist.description}}</v-card-text>
                    </v-card>
                </v-row>
                <v-row justify="center">
                    <form @submit.prevent="postComment" id="post-comment" class="mt-5">
                        <v-textarea
                            full-width
                            outlined
                            v-model="comment"
                            name="comment"
                            id="comment"
                            placeholder="Add Review"
                            cols="45"
                        ></v-textarea>
                        <v-btn type="submit" class="elevation-4" form="post-comment">Add Review</v-btn>
                    </form>
                    <v-row
                        class="mt-10 mb-5"
                        justify="center"
                        block
                        v-for="(comment, index) in artist.comments"
                        :key="index"
                    ></v-row>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import db from "../../firebaseInit";
import { required, minLength } from "vuelidate/lib/validators";

import AddGigs from './Gigs/AddGigs';
import Gigs from './Gigs/Gigs';

export default {
    props: ["id"],
    components: {
        'app-add-gigs': AddGigs,
        'app-gigs': Gigs,
    },
    data() {
        return {
            comment: "",
            date: Date.now()
        };
    },
    validations: {
        comment: {
            required,
            minLen: minLength(20)
        }
    },
    computed: {
        artist() {
            return this.$store.getters.loadedArtist(this.id);
        }
    },
    methods: {
        postComment() {
            const formData = {
                text: this.comment,
                date: this.date
            };

            db.collection("artists")
                .doc(this.id)
                .collection("comments")
                .add({
                    formData
                });
        },
    }
};
</script>