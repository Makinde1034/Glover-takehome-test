<template>

    <div class="featured">
        <div style="width : 100%" v-if="eventsLoading" >
            <FeaturedSkeleton />
        </div>
        <div class="featured__wrap" v-else>
            <p class="featured__header" >Featured events</p>
            <carousel :color="red" :items-to-show="2" :wrap-around="true">
                <slide v-for="(items,index)  in 4" :key="index">
                    <div  class="item">
                        <div class="item__img">
                            <img :src="getImg(index)" alt="">
                        </div>
                        <div class="item__title">
                            <p>{{getEventTitle(index)}}</p>
                        </div>
                        <div class="location__date" >
                            <div id="loc" style="marginRight:20px" class="loc" >
                                <img id="location__image" src="../../assets/images/akar-icons_location.png" alt="">
                                <p>{{events[index]?.venue.city}}</p>
                            </div>
                            <div class="loc">
                                <img src="../../assets/images/calendar.png" alt="">
                                <p id="day" >{{getDate(events[index]?.datetime)}}</p>
                            </div>
                            
                        </div>
                        <div class="price">
                            <div class="price__wrp">
                                <img src="../../assets/images/price.png" alt="">
                                <div class="price__price">
                                    <p class="start">Starting from </p>
                                    <p class="naira">₦15000 </p> 
                                </div>
                                  
                            </div>
                            <a :href="events[index]?.url">
                                <button>Buy Ticket</button>
                            </a>
                            
                        </div>
                    </div>
                </slide>
                <template :color="red" #addons>
                <navigation />
                </template>
            </carousel>   
        </div>
        
    </div>
       
</template>

<script>

import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import FeaturedSkeleton from '../../components/FeaturedSkeleton/FeaturedSkeleton.vue'
import { mapState } from 'vuex'
// import FeaturedBox from '../../components/Featured/FeaturedBox.vue'
import { images } from '../../api/DummyImages'
import { formatDate } from '../../utils/getDate'

export default {

    components:{

        Carousel,
        Slide,
        Navigation,
        FeaturedSkeleton,
        // FeaturedBox
    },
    data(){
        return{
            
        }
    },
    computed:{
        
        ...mapState({
            eventsLoading : (state)=> state.TicketModule.loadingEvents,
            events : (state) => state.TicketModule.tickets
        }),

        

    },
    methods:{
        getImg(index){
            return images[index].url
        },

        // format date
        getDate(date){
           return  formatDate(date)
        },

        getEventTitle(index){
            return images[index].title
        }
    }

}
</script>

<style lang="scss" scoped>

    $blue  : #372AA4;
    $main__font :  'Nunito', sans-serif;

    .featured{
        margin-top: 30px;
        display: flex;
        justify-content: center;



        .featured__wrap{

            width: 100%;
            max-width: 1500px;

            .featured__header{
                font-family: 'Nunito', sans-serif;
                font-weight: 600;
                margin-bottom: 20px;
            }

            .item{
                // height: 200px;
                width: 100%;
                background-color: white;
                margin-right: 20px;
                box-shadow: rgba(154, 154, 177, 0.2) 0px 2px 5px 0px, rgba(128, 125, 125, 0.07) 0px 1px 1px 0px;
                font-size: 20px;
                border-radius: 8px;
                align-items: flex-start;
                display: flex;
                flex-direction: column;
                padding: 10px;

                .item__img{
                    width: 100%;
                    height: 150px;

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 8px;
                    }
                }

                .item__title{
                    margin-top: 20px;
                    font-weight: 600;

                    p{
                        font-size: 14px;
                        font-family: $main__font;
                    }
                }

                .location__date{
                    display: flex;
                    align-items: center;

                    .loc{
                        display: flex;
                        align-items: center;
                        margin-top: 10px;

                        #loacation__image{
                            height: 20px;
                        }

                        p{
                            font-size: 15px;
                            color: #6C757D;
                            font-family: $main__font;

                        }

                        img{
                            height: 15px;
                            margin-right: 10px;
                        }
                    }
                }

                .price{

                    margin-top: 10px;
                    display: flex;
                    justify-content: space-between;
                    width: 100%;

                    .price__wrp{
                        display: flex;

                        img{
                            margin-right: 10px;
                            height: 15px;
                        }

                        .price__price{

                            display: flex;
                        }

                        .start{
                            margin-right: 10px;
                            
                        }

                        .naira{
                            color :#372AA4;
                            font-weight: 600;
                            font-size: 16px;
                        }

                        p{
                            
                            font-size: 15px;
                            color: #6C757D;
                            font-family: $main__font;
                        }
                    }

                    button{
                        padding: 8px 10px;
                        background: none;
                        border: 1px solid $blue;
                        border-radius: 6px;
                        color: $blue;
                        margin-top: 10px;
                        font-weight: 600;
                        font-size: 12px;
                        cursor: pointer;
                        font-family: $main__font;
                    }
                }

            }

               
        
        }
    }
    @media screen and (max-width:481px) {

    .featured{

        .item{

            .item__img{

                .item__title{

                }
            }

            .location__date{

                flex-direction: column;
                align-items: flex-start;
            

                .loc{

                    align-items: flex-start;

                    img{
                        height: 12px;
                        
                    }

                    p{
                        font-size: 8px;
                    }

                    #day{
                        font-size: 13px;
                    }
                }

                #loc{
                    margin-left: -5px;
                }
            }

            .price{

                margin-top: 10px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                

                .price__wrp{

                    // flex-direction: column;
                    align-items: flex-start;

                    img{
                        margin-right: 10px;
                        height: 14px;
                    }

                    p{
                        font-size: 12px;
                    }

                    .start{
                        font-size: 12px;
                        display: none;
                    }

                    .naira{
                        font-size: 8px;
                    }

                    .price__price{
                        // flex-direction: column;
                        align-items: flex-start;
                    }
                }
            }


        }
    }  
}


</style> 