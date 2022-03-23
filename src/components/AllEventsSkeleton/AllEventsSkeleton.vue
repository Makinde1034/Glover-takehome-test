<template>
   
    <div class="alll" >
        <div class="box">
            <div class="img"></div>
            <div class="name"></div>
            <div class="price"></div>
            <div class="button"></div>
        </div>
        <div class="box">
            <div class="img"></div>
            <div class="name"></div>
            <div class="price"></div>
            <div class="button"></div>
        </div>
        <div class="box">
            <div class="img"></div>
            <div class="name"></div>
            <div class="price"></div>
            <div class="button"></div>
        </div>
        <div class="box">
            <div class="img"></div>
            <div class="name"></div>
            <div class="price"></div>
            <div class="button"></div>
        </div>
        <div class="box">
            <div class="img"></div>
            <div class="name"></div>
            <div class="price"></div>
            <div class="button"></div>
        </div>
        <div class="box">
            <div class="img"></div>
            <div class="name"></div>
            <div class="price"></div>
            <div class="button"></div>
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

$main_color : #ECEAED;

.alll{

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;

    .box{

        height: 300px;
        // background: red;

        .img{
            height: 200px;
            width: 100%;
            background: $main_color;
            margin-bottom: 20px;
             animation: pulse 1s infinite ease-in-out;
             border-radius: 5px;


        }
        .name{
            width: 50%;
            height: 20px;
            background: $main_color;
            animation: pulse 1s infinite ease-in-out;
            margin-bottom: 20px;
            border-radius: 5px;


        }

        .price{
            width: 70%;
            height: 20px;
            background: $main_color;
            animation: pulse 1s infinite ease-in-out;
            margin-bottom: 20px;
            border-radius: 5px;

        }

        .button{
            width:30%;
            height: 30px;
            background: $main_color;
            animation: pulse 1s infinite ease-in-out;
            border-radius: 5px;
            border-radius: 5px;
        }


       
    }

       



}


@keyframes pulse {
    0% {
        background-color: rgba(165, 165, 165, 0.1);
        }
        50% {
            background-color: rgba(165, 165, 165, 0.4);
        }
        100% {
            background-color: rgba(165, 165, 165, 0.1);
    }
}
       
           
</style>