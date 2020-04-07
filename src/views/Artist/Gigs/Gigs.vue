<template>
    <v-container>
        <v-card width="300px" v-for="gig in gigs" :key="gig.id" class="mt-10">
            <v-img :src="gig.venueImg" width="300px"></v-img>
            <h3 align="center">{{gig.name}}</h3>
            <h4 align="center">{{gig.venue}} - {{gig.location}}</h4>
            <h4 align="center">{{gig.date}}</h4>
            <h5 align="center">Ticket Price: {{gig.ticketPrice}}$</h5>
        </v-card>
    </v-container>
</template>
<script>
import db from '../../../firebaseInit';

export default {
    props: ["artist"],
    data() {
        return {
           gigs: []

        }
    },
    created() {
        db.collection('artists').doc(this.artist.id).collection('gigs')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
               this.gigs.push(doc.data())
            })
        })
    }
}
</script>