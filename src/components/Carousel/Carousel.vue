<template>

    <div class="featured">
        <div v-if="eventsLoading" >
            <FeaturedSkeleton />
        </div>
        <div v-else>
            <carousel :color="red" :items-to-show="2" :wrap-around="true">
                <slide v-for="(items,index)  in 4" :key="index">
                    <div  class="item">
                        <div class="item__img">
                            <img :src="getImg(index)" alt="">
                        </div>
                        <div class="item__title">
                            <p>{{events[index]?.title}}</p>
                        </div>
                        <div class="location__date" >
                            <div style="marginRight:20px" class="loc" >
                                <img id="location__image" src="../../assets/images/akar-icons_location.png" alt="">
                                <p>{{events[index]?.venue.city}}</p>
                            </div>
                            <div class="loc">
                                <img src="../../assets/images/calendar.png" alt="">
                                <p>{{getDate(events[index]?.datetime)}}</p>
                            </div>
                            
                        </div>
                        <div class="date">
                            <p> <img src="../../assets/images/price.png" alt=""> Starting from <span>₦15000</span> </p>
                            <button>Buy Ticket</button>
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
        }
    }

}
</script>

<style lang="scss" scoped>

$blue  : #372AA4;

.featured{
    margin-top: 30px;
}


.item{
    // height: 200px;
    width: 100%;
    background-color: white;
    margin-right: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 3px 5px;
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
                height: 18px;
            }

            p{
                font-size: 15px;
                color: #6C757D;

            }

            img{
                height: 16px;
                margin-right: 10px;
            }
        }
    }

    .date{
        margin-top: 0px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-size: 15px;
            color: #6C757D;
            text-align: left;

            span{
                color: #372AA4;
                font-weight: 600;
            }

            img{
                margin-right: 10px;
                height: 16px;
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

                img{
                    height: 12px;
                }

                p{
                    font-size: 14px;
                }
            }
        }

        .date{

            flex-direction: column;
            align-items: flex-start;
            margin-top: 10px;
            margin-right: 5px;

            P{  
                text-align: left;
                span{
                    display: none;
                }
            }

            
        }


    }
    }  
}


</style> 