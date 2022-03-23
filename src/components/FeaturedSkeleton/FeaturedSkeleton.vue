<template>
    <div class="feat__ske" >
        <div class="box">
            <div class="img"></div>
            <div class="city"></div>
            <div class="price"></div>
        </div>
        <div class="box">
            <div class="img"></div>
            <div class="city"></div>
            <div class="price"></div>
        </div>
        <div class="box">
            <div class="img"></div>
            <div class="city"></div>
            <div class="price"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.feat__ske{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 50px;

    .box{
        // height: 200px;
       
        border-radius: 10px;

        .img{
            height: 100px;
            background: #ECEAED;
            animation: pulse 1s infinite ease-in-out;
            border-radius: 5px;
        }
        .city{
            margin-top: 10px;
            width: 60%;
            height: 20px;
            background: #ECEAED;
            animation: pulse 1s infinite ease-in-out;
            border-radius: 5px;
        }
        .price{
            margin-top: 10px;
            width: 50%;
            height: 20px;
            background: #ECEAED;
            animation: pulse 1s infinite ease-in-out;
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