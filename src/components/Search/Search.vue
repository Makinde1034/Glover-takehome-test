<template>
    <div class="search" >
        <div class="search__in">
            <form  class="input__wrap">
                <img  src="../../assets/images/Search.png" alt="searc-icon">
                <input v-on:input="searchEvent($event)" v-model="textField" placeholder="Search" type="text">
            </form>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

    data(){
        return{
            textField : ""
        }
    },
    methods:{
        searchEvent(e){
            console.log(e.target.value)
            this.filterEvents(e.target.value)
        }
    },
    computed:{
        ...mapGetters('TicketModule',['filterEvents']),    
    }
}
</script>

<style lang="scss" scoped>

.search{
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .search__in{

        max-width: 1500px;
        width: 100%;

        .input__wrap{

            width: 30%;
            display: flex;
            align-items: center;
            border: 1px solid #E8E8E8;
            border-radius: 10px;
            height: 41px;
            background: white;
            padding-left: 10px;

            img{

                margin-right: 10px;
            }

            input{

                width: 100%;
                height: 100%;
                border: none;
                background: none;
                color: #6C757D;
                outline: none;

            }
        }
        
    }

   
}

@media screen and (max-width:481px) {

    .search{

        .search__in{

            .input__wrap{
                width: 100%;
            }
        }
    }
}

@media screen and (min-width:481px) and (max-width:1400px) {

    .search{

        .search__in{
            display: flex;
            justify-content: center;

            .input__wrap{
                width: 70%;
            }
        }
    }
}
</style> 