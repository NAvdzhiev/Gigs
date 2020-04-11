<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="4" class="elevation-7 pa-0 mt-10">
                <v-col cols="12" md class="pa-0">
                    <v-img :src="imageUrl" height="350px"></v-img>
                </v-col>
                <v-col style="background: #0c0e38" cols="12" md class="pt-10 pl-5 pr-5">
                    <h2 class="font-weight-bold white--text">{{firstName}} {{lastName}}</h2>
                    <h3 class="font-weight-bold white--text">{{age}} years old</h3>
                    <h3 class="font-weight-bold white--text">From: {{country}}</h3>
                </v-col>
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
            age: "",
            firstName: "",
            lastName: "",
            imageUrl: "",
            country: ""
        };
    },

    created() {
        db.collection("users")
            .doc(this.id)
            .get()
            .then(doc => {
                    (this.age = doc.data().age),
                    (this.firstName = doc.data().firstName),
                    (this.lastName = doc.data().lastName),
                    (this.imageUrl = doc.data().imageUrl),
                    (this.country = doc.data().country);
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>