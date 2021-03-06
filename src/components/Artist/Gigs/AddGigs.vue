<template>
    <v-dialog width="350px" persistent v-model="gigsDialog">
        <template v-slot:activator="{on}">
            <v-btn
                width="200px"
                style="display: block"
                class="mt-0 mb-10 ml-auto mr-auto"
                slot="activator"
                v-on="on"
                color="success"
            >Add New Gig</v-btn>
        </template>
        <v-card class="pa-10" color="#1a1c45">
            <h2 align="center" class="mb-10 font-weight-bold white--text">Add New Gig</h2>
            <v-card-text>
                <v-row class="mt-5 mb-5">
                    <form @submit.prevent="addGig" id="gigs-form">
                        <v-row>
                            <v-text-field
                                dark
                                required
                                text
                                dense
                                placeholder="Location"
                                v-model="location"
                                color="#fb3a64"
                                @blur="$v.location.touch()"
                            ></v-text-field>
                            <p
                                class="white--text"
                                v-if="!$v.location.minLen"
                            >Location must be at least 3 characters long.</p>
                        </v-row>
                        <v-row>
                            <v-text-field
                                dark
                                required
                                text
                                dense
                                placeholder="Venue"
                                v-model="venue"
                                color="#fb3a64"
                                @blur="$v.venue.touch()"
                            ></v-text-field>
                            <p
                                class="white--text"
                                v-if="!$v.venue.minLen"
                            >Venue must be at least 3 characters long.</p>
                        </v-row>
                        <v-row>
                            <v-text-field
                                dark
                                required
                                text
                                dense
                                placeholder="Venue Image"
                                v-model="venueImg"
                                color="#fb3a64"
                                @blur="$v.venueImg.touch()"
                            ></v-text-field>
                            <p class="white--text" v-if="!$v.venueImg.url">Venue image must be url.</p>
                        </v-row>
                        <v-row>
                            <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                transition="scale-transition"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        dark
                                        required
                                        dense
                                        v-model="date"
                                        placeholder="Date"
                                        hint="YYYY/MM/DD format"
                                        persistent-hint
                                        @blur="date"
                                        v-on="on"
                                        color="#fb3a64"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    dark
                                    v-model="date"
                                    @input="menu1 = false"
                                    outlined
                                    dense
                                ></v-date-picker>
                            </v-menu>
                        </v-row>
                        <v-row>
                            <v-text-field
                                dark
                                required
                                number
                                dense
                                placeholder="Ticket Price"
                                v-model="ticketPrice"
                                color="#fb3a64"
                                @blur="$v.ticketPrice.touch()"
                            ></v-text-field>
                            <p
                                class="white--text"
                                v-if="!$v.ticketPrice.$minVal"
                            >Ticket price must be at least 5.</p>
                        </v-row>
                        <v-row>
                            <v-col cols="5">
                                <v-btn
                                    color="error"
                                    class="elevation-5"
                                    @click="gigsDialog = false"
                                >Cancel</v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-btn
                                    dark
                                    color="success"
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
            minLen: minLength(5)
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
            this.$store.dispatch("addGig", {
                id: this.artist.id,
                name: this.name,
                location: this.location,
                venue: this.venue,
                venueImg: this.venueImg,
                date: this.date,
                ticketPrice: this.ticketPrice
            });

            this.location = "";
            this.venue = "";
            this.venueImg = "";
            this.date = new Date().toISOString().substr(0, 10);
            this.ticketPrice = 0;
        }
    }
};
</script>