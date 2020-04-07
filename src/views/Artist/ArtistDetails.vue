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
                    <app-reviews :artist="artist"></app-reviews>
                    <app-add-review :artist="artist"></app-add-review>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//import db from "../../firebaseInit";
import { required, minLength } from "vuelidate/lib/validators";

import AddGigs from './Gigs/AddGigs';
import Gigs from './Gigs/Gigs';
import AddReview from './Reviews/AddReview';
import Reviews from './Reviews/Reviews';

export default {
    props: ["id"],
    components: {
        'app-add-gigs': AddGigs,
        'app-gigs': Gigs,
        'app-add-review': AddReview,
        'app-reviews': Reviews
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
};
</script>