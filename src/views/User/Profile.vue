<template>
    <v-container>
        <v-card width="300px">
            <v-card-text>
                <v-img :src="imageUrl" height="200px"></v-img>
                <h1 class="ma-5">Age: {{ age }}</h1>
                <h2 class="ma-5">Country: {{ country }}</h2>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import db from '../../firebaseInit';
export default {
    props: ['id'],
    data() {
        return {
            age: '',
            imageUrl: '',
            country: ''
        }
    },

    created() {
        db.collection('users')
        .doc(this.id)
        .get()
        .then(doc => {
            this.age = doc.data().age,
            this.imageUrl = doc.data().imageUrl,
            this.country = doc.data().country
        })
        .catch(err => {
            console.log(err);
        })
    }
}
</script>