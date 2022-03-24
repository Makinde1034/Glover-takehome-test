<template>
    <div class="landing">
        <Nav />
        <Search />
        <Carousel />
        <AllEvents />
    </div>
</template>

<script>

import Nav from '../../components/Nav/Nav.vue'
import Search from '../../components/Search/Search.vue'
import AllEvents from '../../components/AllEvents/AllEvents.vue'
import Carousel from '../../components/Carousel/Carousel.vue'
import { mapActions } from 'vuex'

export default {

    components : {
        Nav,
        Search,
        // FeaturedEvents,
        AllEvents,
        Carousel
    },
    data(){
        return {
            
        }
    },
    methods:{
        ...mapActions('TicketModule',['getTickets'])
    },
    mounted(){
        this.getTickets();

    }
    
}
</script>                                              

<style>

.landing{
    
    padding: 50px 200px 100px 200px;
    background: #F8F9FB;


}

body{
    background: #F8F9FB;

}

@media screen and (max-width : 481px) {
    .landing{
        padding: 20px 20px 20px 20px;
    }
}

@media screen and (min-width : 481px) and (max-width:768px) {
    .landing{
        padding: 20px 20px 20px 20px;
    }
}

@media screen and (min-width:768px) and (max-width : 1400px) {
    .landing{
        padding: 20px 50px 20px 50px;
    }
}
</style>