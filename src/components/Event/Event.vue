<template>
    <div class="event" >
        <div class="event__image">
            <img :src="getImg(index)" alt="evetn image">
        </div>
        <div class="event__name__date">
            <p>{{ !name ? "Event name" : name}}</p>
            <div class="date">
                <p>{{new Date(dateTime).getDate()}} {{month[new Date(dateTime).getMonth()].substring(0,3)}}</p>
            </div>
        </div>
        <div class="event__location">
            <img src="../../assets/images/akar-icons_location.png" alt="location-icon">
            <p>Lagos</p>
        </div>
        <div class="event__price" >
            <img src="../../assets/images/price.png" alt="location-icon">
            <p>Starting from   <span> ₦15000</span> </p>
        </div>
        <a :href="url">
            <button>Buy Ticket</button>
        </a> 
    </div>
</template>

<script>

import { getDate } from '../../utils/getDate'
import { images } from '../../api/DummyImages'

export default {

    data(){
        return{
            month : ["January","February","March","April","May","June","July","August","September","October","November","December"]
        }
    },

    props : ["imageUrl","name","location","dateTime","url", "index"],

    methods:{

        // getImgUrl(pic) {
        //     var images = require.context('../../../public/dummyAssets/', false, /\.jpg$/)
        //     return images('./' + pic + ".jpg")
        // }
        // select images from dummy images based on event index
        getImg(index){
            return images[index].url
        }
    },
    computed:{
        
        eventDate(date){
            return getDate(date)
        }
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

$blue  : #372AA4;


.event{
    width: 100%;
    height: 100%;
    padding: 10px 10px 14px 10px;

    .event__image{

        img{
            width: 100%;
            height: 150px;
            object-fit:cover;
            border-radius: 10px;

        } 
    }

    .event__name__date{

        p{
            font-weight: 600;
        }
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        .date{
            height: 35px;
            width: 50px;
            background-image: url("../../assets/images/Subtract.png");
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            color: #FF6A2C;
            font-size: 12px

        }
    }

    .event__location{

        @include flex(row,flex-start ,center ); 

        img{
            margin-right :10px
        }
        p{
            color: #6C757D;

        }
    }

    .event__price{

        @include flex(row,flex-start ,center ); 
        margin-top: 10px;

        img{
            margin-right :10px
        }
        p{
            color: #6C757D;

        }

        span{
            color: $blue;
            font-weight: 600;
            margin-left: 10px;

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


</style> 