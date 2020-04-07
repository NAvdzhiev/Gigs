<template>
    <v-dialog width="350px" persistent v-model="gigsDialog">
        <template v-slot:activator="{on}">
            <v-btn class="mt-5" slot="activator" v-on="on">Add New Gig</v-btn>
        </template>
        <v-card class="pa-10">
            <h2 align="center">Add New Gig</h2>
            <v-card-text>
                <v-row class="mt-5">
                    <form @submit.prevent="addGig" id="gigs-form">
                        <v-text-field
                            required
                            outlined
                            text
                            dense
                            placeholder="Location"
                            v-model="location"
                        ></v-text-field>
                        <v-text-field
                            required
                            outlined
                            text
                            dense
                            placeholder="Venue"
                            v-model="venue"
                        ></v-text-field>
                        <v-text-field
                            required
                            outlined
                            text
                            dense
                            placeholder="Venue Image"
                            v-model="venueImg"
                        ></v-text-field>
                        <v-text-field v-model="date" outlined dense></v-text-field>
                        <v-text-field
                            required
                            outlined
                            number
                            dense
                            placeholder="Ticket Price"
                            v-model="ticketPrice"
                        ></v-text-field>
                        <v-row>
                            <v-col cols="5">
                                <v-btn class="elevation-5" @click="gigsDialog = false">Cancel</v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-btn
                                    class="elevation-5"
                                    light
                                    type="submit"
                                    form="gigs-form"
                                >Add New Gig</v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import db from "../../../firebaseInit";

export default {
    props: ["artist"],
    data() {
        return {
            gigsDialog: false,
            name: this.artist.name,
            location: "",
            venue: "",
            venueImg: "",
            date: new Date().toISOString().substr(0, 10),
            ticketPrice: 0
        };
    },
    methods: {
        addGig() {
            this.gigsDialog = false;
            db.collection("artists")
                .doc(this.artist.id)
                .collection("gigs")
                .add({
                    name: this.name,
                    location: this.location,
                    venue: this.venue,
                    venueImg: this.venueImg,
                    date: this.date,
                    ticketPrice: this.ticketPrice
                });
        }
    }
};
</script>