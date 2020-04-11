<template>
    <v-container>
        <h1
            align="center"
            class="font-weight-bold white--text mt-10 mb-10"
            v-if="concerts.length <= 0"
        >You haven't bought any tickets yet!</h1>
        <v-row>
            <v-col cols="12" md="3" class="mt-10" v-for="concert in concerts" :key="concert.id">
                <v-card tile class="elevation-0" color="transparent" style="text-align: center">
                    <v-img height="200px" :src="concert.venueImg"></v-img>
                    <h3
                        class="white--text mt-5 font-weight-bold"
                        align="center"
                    >{{ concert.venue }}</h3>
                    <h4 class="white--text font-weight-bold" align="center">{{ concert.location }}</h4>
                    <h5
                        class="white--text mb-5 font-weight-bold"
                        align="center"
                    >{{ concert.ticketPrice }}$</h5>
                    <v-btn
                        class="mt-0 mb-5 font-weight-bold"
                        color="#fb3a64"
                        dark
                        width="150px"
                        @click="buyTicket(concert)"
                    >Buy Ticket</v-btn>
                    <v-btn
                        class="mt-0 mb-10 font-weight-bold"
                        color="error"
                        dark
                        block
                        text
                        width="150px"
                        @click="deleteGig(concert.id)"
                    >Delete</v-btn>
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
            concerts: []
        };
    },

    created() {
        db.collection("users")
            .doc(this.id)
            .collection("myConcerts")
            .orderBy("date")
            .limit(6)
            .onSnapshot(snapshot => {
                this.concerts = [];
                snapshot.forEach(doc => {
                    this.concerts.push({
                        id: doc.id,
                        name: doc.data().name,
                        location: doc.data().location,
                        venue: doc.data().venue,
                        venueImg: doc.data().venueImg,
                        date: doc.data().date,
                        ticketPrice: doc.data().ticketPrice
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>