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
                                @blur="$v.email.$touch()"
                            ></v-text-field>
                            <p v-if="!$v.email.email">Please provide a valid email address.</p>
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
                                @blur="$v.age.$touch()"
                            ></v-text-field>
                            <p v-if="!$v.age.minVal">You must be at least 18 years old.</p>
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
                                @blur="$v.passowrd.touch()"
                            ></v-text-field>
                            <p v-if="!$v.password.minLen">Password must be at least 6 characters.</p>
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
                                @blur="$v.confirmPassword.touch()"
                            ></v-text-field>
                            <p v-if="!$v.confirmPassword.sameAs">Password must match.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                outlined
                                placeholder="Profile Image URL"
                                dense
                                type="text"
                                id="imageUrl"
                                v-model="imageUrl"
                                @blur="$v.imageUrl.touch()"
                            ></v-text-field>
                            <p v-if="!$v.imageUrl.url">Please, enter valid url.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-select
                                v-model="country"
                                outlined
                                dense
                                :items="items"
                                label="Country"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-btn
                            :disabled="$v.$invalid"
                            type="submit"
                            form="register-form"
                            class="elevation-6"
                            primary
                        >Signup</v-btn>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import {
    required,
    email,
    numeric,
    minValue,
    minLength,
    sameAs,
    url
} from "vuelidate/lib/validators";

export default {
    data() {
        return {
            email: "",
            age: null,
            password: "",
            confirmPassword: "",
            roles: "",
            imageUrl: "",
            country: "Bulgaria",
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
    validations: {
        email: {
            required,
            email
        },
        age: {
            required,
            numeric,
            minVal: minValue(18)
        },
        password: {
            required,
            minLen: minLength(6)
        },
        confirmPassword: {
            sameAs: sameAs("password")
        },
        imageUrl: {
            required,
            url
        },
    },
    methods: {
        onSubmit() {
            const formData = {
                email: this.email,
                age: this.age,
                password: this.password,
                confirmPassword: this.confirmPassword,
                roles: this.roles,
                imageUrl: this.imageUrl,
                country: this.country,
            };
            console.log(formData);
            this.$store.dispatch("register", formData);
        }
    }
};
</script>