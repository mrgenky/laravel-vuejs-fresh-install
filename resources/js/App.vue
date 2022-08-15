<template>
    <v-app>
        <v-main>
            <v-container class="pa-5">
                <v-btn to="/" text>Home</v-btn>
                <v-btn to="/Admin" text>Admin</v-btn>
                <hr>
                <router-view :key="$route.path"></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: "App",
    components:{

    },
    data(){
        return{
            todo:[
                'Fix error404 on refresh',
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
