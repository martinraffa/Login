<template>

<section class="viewer">
    <div class="header">
        <div class="user">
            <div class="profile">
                <img src="/user-profiles.svg" height="50" class="profile-photo">
            </div>
            <div class="name">
                <p>Martin Raffa</p>
            </div>
        </div>
        <div class="btn-salir">
            <v-btn class="ma-2" outlined color="primary">Sign Out</v-btn>
        </div>
    </div>
    <div class="caja">
        <v-tabs>
            <v-tab name="create">
                Create Users
            </v-tab>
            <v-tab name="list">
                List of Users
            </v-tab>


            <v-tab-item key="create">
                <v-card>
                <create/>
                </v-card>
            </v-tab-item>
            <v-tab-item key="list">
                <v-card>
                    <list/>
                </v-card>
            </v-tab-item>
    
        </v-tabs>
    </div>
    <v-footer       
    absolute
    >
    <v-col
        class="text-center"
        cols="12"
    >Copyright 2019 - <span class="text-foot">TestCompany</span>
    </v-col>
    </v-footer>
</section>

</template>

<script>
import { Tabs, Tab } from '@crow1796/vue-bulma-tabs'
import create from './create.vue';
import list from './list.vue';


export default {
    components: {
            Tabs,
            Tab,
            create,
            list,
        }

}
</script>

<style lang="less" scoped>

.caja{
    display: block;
    margin-top: 3%;
    margin-left: 5%;
    height: 85%;
    width: 85%;
    border-radius: 4px;
    background: white;
}

.text-foot{
    color:#6E81EC;
}


.header{
    display: grid;
    grid-template-columns: 50% 50%;
    background: white;
}

.user{
    display: grid;
    grid-template-columns: 10% 60%;

}

.profile{
    padding-top: 3px;
    padding-left: 1rem;
}

.name{
    display: flex;
    padding-left: 1rem;
    padding-top: 1.3rem;
    text-align: center;
    font-weight: 700;
    color:#396CAA;
}

.btn-salir{
    display: flex;
    justify-content: flex-end;
    padding: 7px;
    padding-right: 30px
}

</style>