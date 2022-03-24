<template>
  <div class="featuredBox"  >
    <div class="featuredBox__img">
      <img :src="url" alt="">
    </div>

    <div class="featuredBox__name">
      <p>{{name}}</p>
    </div>

    <div class="location__date__button" >
      <div class="location__date" >
			<img src="../../assets/images/akar-icons_location.png" alt="location">
			<p class="loc__p">{{location}}</p>
			<img src="../../assets/images/calendar.png" alt="calender-icon">
			<p class="date" >{{new Date(dateTime).toDateString()}}</p>
		</div>
		<button>Buy Ticket</button>
    </div>
  </div>
</template>

<script>
export default {

  props : ["url","name","location","dateTime"]


}
</script>

<style lang="scss" scoped>

@mixin flex($direction, $justifyContent, $alignItems){

	display: flex;
	justify-content: $justifyContent;
	align-items: $alignItems;
	flex-direction: $direction;

}

$button_border :  #372AA4;

.featuredBox{

  width:100%;
	// height: 300px;
  background: white;
  padding: 10px;
	margin-right: 30px;
  border-radius: 10px;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;

  .featuredBox__img{

    width: 100%;
    height: 188px;
	

    img{

      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

  }

  .featuredBox__name{
    margin-top: 10px;
		text-align: left;

    p{
      font-weight: 600;
      font-family: 'Nunito', sans-serif;
			font-size: 14px
    }
  }

	.location__date__button{
		@include flex(row ,space-between ,center );
		margin-top: 10px;

		.location__date{
			display: flex;
			justify-content: flex-start;
			width: 300px;
			height: 30px;
			align-items: center;

			img{
				height: 15px;
				margin-right: 10px;
			}

			p{
				color: #6C757D;
				font-size: 14px;

			}

			.loc__p{
				margin-right: 10px;
			}

			
			
		}

		button{
			background: none;
			border: 1px solid $button_border;
			color: $button_border;
			padding: 7px 10px;
			border-radius: 8px;
			font-weight: 600;
			cursor: pointer;
		}
	}

}

@media screen and (max-width:481px) {
	.featuredBox{
		// width: 1000px;
	}
}
</style> 