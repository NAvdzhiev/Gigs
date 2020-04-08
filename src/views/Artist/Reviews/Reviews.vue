<template>
    <v-container>
        <v-card width="80%" v-for="review in reviews" :key="review.id" class="ml-auto mr-auto mt-10">
            <v-card-text>
                {{review.text}}
            </v-card-text>
            <h5 class="pl-5 pb-3">Posted on {{review.date}}</h5>
        </v-card>
    </v-container>
</template>
<script>
import db from '../../../firebaseInit';

export default {
    props: ['artist'],
    data() {
        return {
            reviews: []
        }
    },
    created() {
        db.collection('artists')
        .doc(this.artist.id)
        .collection('reviews')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.reviews.push(doc.data());
            })
        })
    }   
}
</script>