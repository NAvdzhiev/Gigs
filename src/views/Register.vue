<template>
    <v-container class="mt-10">
        <v-card class="elevation-7">
            <v-card-text>
                <h1 align="center" class="mt-7 mb-10">Register</h1>
                <form @submit.prevent="onSubmit" id="register-form">
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                outlined
                                placeholder="Email"
                                dense
                                type="email"
                                id="email"
                                v-model="email"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                outlined
                                placeholder="Age"
                                dense
                                type="number"
                                id="age"
                                v-model="age"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                outlined
                                placeholder="Password"
                                dense
                                type="password"
                                id="password"
                                v-model="password"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                outlined
                                placeholder="Confirm Password"
                                dense
                                type="password"
                                id="confirmPassword"
                                v-model="confirmPassword"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-select v-model="country" outlined dense :items="items" label="Country"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-checkbox v-model="terms" :label="`Accept Terms of Usage`"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-btn type="submit" form="register-form" class="elevation-6" primary>Signup</v-btn>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            age: null,
            password: "",
            confirmPassword: "",
            roles: "",
            country: "Bulgaria",
            terms: false,
            items: [
                "Albania",
                "Andorra",
                "Armenia",
                "Austria",
                "Azerbaijan",
                "Belarus",
                "Belgium",
                "Bosnia and Herzegovina",
                "Bulgaria",
                "Croatia",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Estonia",
                "Finland",
                "France",
                "Georgia",
                "Germany",
                "Greece",
                "Hungary",
                "Iceland",
                "Ireland",
                "Italy",
                "Kazakhstan",
                "Kosovo",
                "Latvia",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Malta",
                "Moldova",
                "Monaco",
                "Montenegro",
                "Netherlands",
                "North Macedonia",
                "Norway",
                "Poland",
                "Portugal",
                "Romania",
                "Russia",
                "San Marino",
                "Serbia",
                "Slovakia",
                "Slovenia",
                "Spain",
                "Sweden",
                "Switzerland",
                "Turkey",
                "Ukraine",
                "UK",
                "USA",
                "Canada",
                "Mexico",
                "Chile",
                "Argentina",
                "Brazil",
                "Colombia",
                "Australia",
                "New Zealand",
                "Japan",
                "South Africa"
            ]
        };
    },
    methods: {
        onSubmit() {
            const formData = {
                email: this.email,
                age: this.age,
                password: this.password,
                confirmPassword: this.confirmPassword,
                roles: this.roles,
                country: this.country,
                terms: this.terms
            };
            console.log(formData);
            this.$store.dispatch("register", formData);
        }
    }
};
</script>