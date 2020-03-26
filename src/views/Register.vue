<template>
    <v-container class="mt-10">
        <v-card class="elevation-7">
            <v-card-text>
                <h1 align="center" class="mt-7 mb-10">Register</h1>
                <v-form @submit.prevent="onSubmit">
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
                                id="confirm-password"
                                v-model="confirmPassword"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-select outlined dense :items="items" label="Country"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-checkbox :label="`Accept Terms of Usage`"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-btn class="elevation-6" primary>Signup</v-btn>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            age: null,
            password: '',
            confirmPassword: '',
            country: 'Bulgaria',    
            items: [
                'Albania',
                'Andorra',
                'Armenia',
                'Austria',
                'Azerbaijan',
                'Belarus',
                'Belgium',
                'Bosnia and Herzegovina',
                'Bulgaria',
                'Croatia',
                'Cyprus',
                'Czech Republic',
                'Denmark',
                'Estonia',
                'Finland',
                'France',
                'Georgia',
                'Germany',
                'Greece',
                'Hungary',
                'Iceland',
                'Ireland',
                'Italy',
                'Kazakhstan',
                'Kosovo',
                'Latvia',
                'Liechtenstein', 
                'Lithuania',
                'Luxembourg',
                'Malta',
                'Moldova',
                'Monaco',
                'Montenegro',
                'Netherlands',
                'North Macedonia',
                'Norway',
                'Poland',
                'Portugal',
                'Romania',
                'Russia',
                'San Marino',
                'Serbia',
                'Slovakia',
                'Slovenia',
                'Spain',
                'Sweden',
                'Switzerland',
                'Turkey',
                'Ukraine',
                'UK',
                'USA',
                'Canada',
                'Mexico',
                'Chile',
                'Argentina',
                'Brazil',
                'Colombia', 
                'Australia',
                'New Zealand',
                'Japan',
                'South Africa'
            ]
        }
    }
}
</script>