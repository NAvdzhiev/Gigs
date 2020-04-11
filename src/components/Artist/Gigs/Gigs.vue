<template>
    <v-container class="mt-10">
        <h1 align="center" class="mt-10 mb-10 white--text font-weight-bold">Upcoming Gigs:</h1>
        <h2
            v-if="gigs.length <= 0"
            align="center"
            class="white--text display-2 mt-10 pt-10 pb-10 mb-10 font-weight-bold"
        >There are no gigs!</h2>
        <v-row>
            <v-col cols="12" md="3" v-for="gig in gigs" :key="gig.id">
                <v-card tile class="elevation-0" color="transparent" style="text-align: center">
                    <v-img height="200px" :src="gig.venueImg"></v-img>
                    <h3 class="white--text mt-5 font-weight-bold" align="center">{{ gig.venue }}</h3>
                    <h4 class="white--text font-weight-bold" align="center">{{ gig.location }}</h4>
                    <h5
                        class="white--text mb-5 font-weight-bold"
                        align="center"
                    >{{ gig.ticketPrice }}$</h5>
                    <v-btn
                        class="mt-0 mb-5 font-weight-bold"
                        color="#fb3a64"
                        dark
                        width="150px"
                        @click="buyTicket(gig)"
                    >Buy Ticket</v-btn>
                    <v-btn
                        class="mt-0 mb-10 font-weight-bold"
                        color="error"
                        dark
                        block
                        text
                        width="150px"
                        @click="deleteGig(gig.id)"
                    >Delete</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import db from "../../../firebaseInit";

export default {
    props: ["artist"],
    data() {
        return {
            gigs: []
        };
    },
    created() {
        db.collection("artists")
            .doc(this.artist.id)
            .collection("gigs")
            .orderBy("date")
            .onSnapshot(snapshot => {
                this.gigs = [];
                snapshot.forEach(doc => {
                    this.gigs.push({
                        id: doc.id,
                        name: doc.data().name,
                        location: doc.data().location,
                        venue: doc.data().venue,
                        venueImg: doc.data().venueImg,
                        date: doc.data().date,
                        ticketPrice: doc.data().ticketPrice
                    });
                });
            });
    },
    methods: {
        deleteGig(id) {
            db.collection("artists")
                .doc(this.artist.id)
                .collection("gigs")
                .doc(id)
                .delete();
        },
        buyTicket(gig) {
            db.collection("users")
                .doc(this.user)
                .collection("myConcerts")
                .doc(gig.id)
                .set({
                    name: gig.name,
                    location: gig.location,
                    venue: gig.venue,
                    venueImg: gig.venueImg,
                    date: gig.date,
                    ticketPrice: gig.ticketPrice
                });
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
        },
        user() {
            return this.$store.getters.user.id;
        }
    }
};
</script>