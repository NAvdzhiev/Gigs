<template>
    <v-container>
        <v-row>
            <v-col cols="6" class="mt-5">
                <h1>Upcoming Gigs:</h1>
                <h3>This artist has no upcoming gigs!</h3>
                <v-row class="mt-5">
                    <form @submit.prevent="addGig" id="gig-form">
                        <v-text-field outlined text dense placeholder="Artist Name" v-model="name"></v-text-field>
                        <v-text-field outlined text dense placeholder="Location" v-model="location"></v-text-field>
                        <v-text-field outlined text dense placeholder="Venue" v-model="venue"></v-text-field>
                        <v-text-field
                            outlined
                            text
                            dense
                            placeholder="Venue Image"
                            v-model="venueImg"
                        ></v-text-field>
                        <v-text-field
                            outlined
                            number
                            dense
                            placeholder="Ticket Price"
                            v-model="ticketPrice"
                        ></v-text-field>
                        <v-btn type="submit" form="gig-form">Add New Gig</v-btn>
                    </form>
                </v-row>
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
import db from "../firebaseInit";
import { required, minLength } from "vuelidate/lib/validators";

export default {
    props: ["id"],
    data() {
        return {
            name: "",
            location: "",
            venue: "",
            venueImg: "",
            ticketPrice: 0,
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

        addGig() {
            const formData = {
                name: this.name,
                location: this.location,
                venue: this.venue,
                venueImg: this.venueImg,
                ticketPrice: this.ticketPrice
            };

            db.collection("artists")
            .doc(this.id)
            .collection("gigs")
            .add({
                formData
            })
        }
    }
};
</script>