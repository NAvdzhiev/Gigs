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
                            @blur="$v.location.touch()"
                        ></v-text-field>
                        <v-text-field
                            required
                            outlined
                            text
                            dense
                            placeholder="Venue"
                            v-model="venue"
                            @blur="$v.venue.touch()"
                        ></v-text-field>
                        <v-text-field
                            required
                            outlined
                            text
                            dense
                            placeholder="Venue Image"
                            v-model="venueImg"
                            @blur="$v.venueImg.touch()"
                        ></v-text-field>
                        <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    required
                                    outlined
                                    dense
                                    v-model="date"
                                    placeholder="Date"
                                    hint="YYYY/MM/DD format"
                                    persistent-hint
                                    @blur="date"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu1 = false" outlined dense></v-date-picker>
                        </v-menu>
                        <v-text-field
                            required
                            outlined
                            number
                            dense
                            placeholder="Ticket Price"
                            v-model="ticketPrice"
                            @blur="$v.ticketPrice.touch()"
                        ></v-text-field>
                        <v-row>
                            <v-col cols="5">
                                <v-btn class="elevation-5" @click="gigsDialog = false">Cancel</v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-btn
                                    :disabled="$v.$invalid"
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
import { numeric, minValue, minLength, url } from "vuelidate/lib/validators";

export default {
    props: ["artist"],
    data() {
        return {
            gigsDialog: false,
            menu1: false,
            name: this.artist.name,
            location: "",
            venue: "",
            venueImg: "",
            date: new Date().toISOString().substr(0, 10),
            ticketPrice: 0
        };
    },
    validations: {
        location: {
            minLen: minLength(3)
        },
        venue: {
            minLen: minLength(10)
        },
        venueImg: {
            url
        },
        ticketPrice: {
            numeric,
            minVal: minValue(5)
        }
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