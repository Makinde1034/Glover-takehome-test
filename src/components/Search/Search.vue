<template>
    <div class="search" >
        <div class="search__in">
            <form @submit.prevent="handleSubmit"  class="input__wrap">
                <img  src="../../assets/images/Search.png" alt="searc-icon"> 
                <input required v-on:input="search($event)"  v-model="textField" placeholder="Search artist e.g John legend" type="text">
            </form>
        </div>
    </div>
</template>

<script>

import { mapActions,mapState } from 'vuex'

export default {

    data(){
        
        return{
            textField : ""
        }
    },
    methods:{
        ...mapActions('TicketModule',['searchEvent',"setSearchValue"]),

        search(e){
            // console.log(e.target.value.split(""))
            this.searchEvent(this.textField);
            this.setSearchValue(e.target.value)
            
        },
        
    },
    computed:{
       ...mapState({
           searchValue : (state) => state.TicketModule.searchValue
       })
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