<template>
    <v-container>
        <v-row>
            <v-col cols="4" v-for="concert in concerts" :key="concert.id">
                <v-card width="300px">
                    <v-card-text>
                        <v-img height="200px" :src="concert.venueImg"></v-img>
                        <h3 align="center">{{concert.name}}</h3>
                        <h4 align="center">{{concert.venue}} - {{concert.location}}</h4>
                        <h4 align="center">{{concert.date}}</h4>
                        <h5 align="center">Ticket Price: {{concert.ticketPrice}}$</h5>
                    </v-card-text>
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