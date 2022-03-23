<template>
    <div class="featured" >
        <div class="featured__events" style=" width:100%" >
            <p>Featured Events</p>
        </div>
        <div   class="featured__in">
            <!-- <flickity class="flickity" ref="flickity" :options="flickityOptions">
                <div   class="carousel-cell">
                    <FeaturedBox  
                        :url = "test[0]?.artist?.thumb_url" 
                        :name = "test[0]?.artist.name" 
                    />
                </div>
                <div   class="carousel-cell">
                    <FeaturedBox  :url = "test[0]?.artist?.thumb_url"  />
                </div>
                <div   class="carousel-cell">
                    <FeaturedBox  :url = "test[0]?.artist?.thumb_url"  />
                </div>
            </flickity> -->
             <carousel class="test" :color="red" :items-to-show="2.5" :wrap-around="true"  >
                <slide v-for="(ticket,index) in test" :key="index">
                    <FeaturedBox  
                        :url = "ticket?.artist?.thumb_url" 
                        :name = "ticket?.artist?.name" 
                        :location = "ticket.venue.location"
                        :dateTime = "ticket.datetime"
                        
                    />
                </slide>
                <template  #addons>
                    <navigation />
                </template>
            </carousel> 
        </div>
    </div>
</template>

<script>

// import Flickity from 'vue-flickity'
import { mapState } from 'vuex'
import FeaturedBox from '../Featured/FeaturedBox.vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


export default {

    name: 'MyComponent',
    components: {
        // Flickity,
        FeaturedBox,
        Carousel,
        Slide,
        Navigation

    },

    data(){
        return{

           breakpoints: {
            // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
           }
        }
                
    },
    computed:{
        ...mapState({
            tickets : (state)=> state.TicketModule.tickets
        }),

        test(){
            return this.tickets
        }
    }

}
</script>

<style lang="scss" scoped>

.featured{
    display: flex;
    align-items: center;
    flex-direction: column;
    // padding: 10px;
    margin-top: 30px;

    .featured__events{
        margin-bottom: 20px;
        font-weight: 700;
        max-width: 1500px;
    }
    

    .featured__in{
        max-width: 1500px;
        width: 100%;

        .carousel-cell{
            width: 40%;
            margin-right: 30px;
            border-radius: 10px;
            // height: 500px;

            
        }
    }


}

@media screen and (max-width:481px) {
    .test{
        width: 100px;
    }
}
</style> 