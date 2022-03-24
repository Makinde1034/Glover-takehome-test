<template>
  <div class="all" >
    <div style="width:100%" v-if="eventsLoading" >
        <AllEventsSkeleton />
    </div>
    <div v-else class="all__in">
        <p class="all_h">All Events</p>
        <!-- condition checking if there is a search value in search bar -->
        <div v-if="searchValue.length > 0" >
            
            <!-- condition checking if search result is greater than 0 -->
            <section class="events"  v-if="searchedEvents.length > 0  " >
                <div class="event__box" v-for="(ticket, index) in searchedEvents" :key="index"  >
                    <Event 
                        :index="index"
                        :name = "ticket.artist?.name"
                        :location = "ticket.venue.city"
                        :dateTime = "ticket.datetime"
                        :url = "ticket.url"
                    />
                </div>
            </section> 
            <!-- if there are no results display a no result found -->
            <div class="no__result" v-else >
                <p>No result found for "{{searchValue}}"</p>
            </div>  
        </div>
        <!-- display all events if nothing is being searched -->
        <section v-else class="events" >
            <div class="event__box" v-for="(ticket, index) in currentTemplates" :key="index"  >
                <Event 
                    :index="index"
                    :name = "ticket.artist?.name"
                    :location = "ticket.venue.city"
                    :dateTime = "ticket.datetime"
                    :url = "ticket.url"
                />
            </div>
        </section>
        <div  class="pagination">
            <img @click="prev()" src="../../assets/images/next.png" alt="">
            <span>{{currentPage}}</span>
            <img @click="next()" src="../../assets/images/next.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import Event from '../Event/Event.vue'
import AllEventsSkeleton from '../AllEventsSkeleton/AllEventsSkeleton.vue'


export default {

    components : {
        Event,
        AllEventsSkeleton
    },

    data(){

        return{

            currentPage : 1,
            templatesPerPage : 10,
            
        }
    },

    methods:{
        // pagination functions
 
        next(){

            this.currentPage =  Math.min(this.currentPage + 1, Math.ceil(this.tickets.length / this.templatesPerPage)  )
            window.scrollTo({
                top : 0,
                behavior : "smooth"
            })

        },

        prev(){
            this.currentPage =  Math.max(this.currentPage - 1, 1  )
            window.scrollTo({
                top : 0,
                behavior : "smooth"
            })
        },

        getImgUrl(pic) {
            return require('../../../public/dummyAssets/'+pic)
        }
       
    },

    computed:{

        ...mapState({
            tickets : (state)=> state.TicketModule.tickets,
            eventsLoading : (state) => state.TicketModule.loadingEvents,
            searchedEvents : (state) => state.TicketModule.searchedEvents,
            searchValue : (state) => state.TicketModule.searchValue
   
        }),

        currentTemplates(){
            const indexOfLastTran = this.currentPage * this.templatesPerPage
            const indexOfFirstTran = indexOfLastTran - this.templatesPerPage
            const currentTemps = this.tickets.slice(indexOfFirstTran,indexOfLastTran);
            return currentTemps
        },
        
    }
}
</script>

<style lang="scss" scoped>

@mixin flex($direction, $justifyContent, $alignItems){

	display: flex;
	justify-content: $justifyContent;
	align-items: $alignItems;
	flex-direction: $direction;

}

.all{

    margin-top: 20px;
    display: flex;
    justify-content: center;

    .all__in{
        width: 100%;
        max-width: 1500px;

        .all_h{

            font-family: 'Nunito', sans-serif;
        }

        p{
            font-weight: 600;
            margin-bottom: 20px;
        }

        .events{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 30px;
            min-height: 90vh;

            .event__box{
                // height: 300px;
                background: white;
                box-shadow: rgba(154, 154, 177, 0.2) 0px 2px 5px 0px, rgba(128, 125, 125, 0.07) 0px 1px 1px 0px;
                border-radius: 10px;
                transition: 0.3s ease-in;
                max-height: 360px;
            }

            .event__box:hover{
                transform:scale(1.1);
            }
        }

        .no__result{
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;

            p{
                color: #372AA4;
                 font-family: 'Nunito', sans-serif;
            }
        }

        .pagination{

            @include flex(row,center ,center );
            margin-top: 30px;

            img{
                height:20px
            }

            img:nth-child(1){
                transform: rotate(180deg);
                cursor: pointer;
            }

            span{
                margin: 0px 20px 0px 20px;
            }
        }

        
    }

    
}

@media screen and (max-width:481px) {

    .all{

        .all__in{

            .events{

                grid-template-columns: 1fr;
            }
        }
    }
}

@media screen and (min-width:481px) and (max-width:1400px) {

    .all{

        .all__in{

            .events{
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
    }
}
</style> 