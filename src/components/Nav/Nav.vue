<template>

    <header>
        <nav class="nav">
            <div class="nav__left" >
                <h3>Events</h3>
            </div>
            <div class="nav__right" >
                <img class="user__img" src="../../assets/images/user_image.png" alt="user-image">
                <p>Benice</p>
                <div class="drop" >
                    <img class="drop__img"  src="../../assets/images/dropdown.png" alt="drop-down-arrow">
                </div>
            </div>
        </nav>  
    </header> 

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >

@mixin flex($direction, $justifyContent, $alignItems){

    display: flex;
    justify-content: $justifyContent;
    align-items: $alignItems;
    flex-direction: $direction;

}


header{

    display: flex;
    justify-content: center;
    

    
    .nav{
    
        @include flex(row, space-between, center);
        max-width: 1500px;
        width: 100%;

        .nav__left{

            h3{
                font-family: 'Nunito', sans-serif;
                font-size: 26px
            }
        }
    

        .nav__right{
            @include flex(row, flex-start, center);

            .user__img{
                height: 35px;
                width: 35px;
                object-fit: cover;
            }

            p{
                margin: 0px 16px 0px 16px;
                font-weight: 700;
            }


            .drop{
                padding : 4px 6px;
                background: #EAEDF7;
                border-radius: 8px;

                .drop__img{
                    height: 7px;
                }

            }

        }
    }

}

@media screen and (max-width:1400px) {
    header{
        .nav{

            .nav__left{

                h3{
                    font-size: 18px;
                }
            }

            .nav__right{
                @include flex(row, flex-start, center);

                .user__img{
                    height: 25px;
                    width: 25px;
                    object-fit: cover;
                }

                p{
                    margin: 0px 12px 0px 12px;
                    font-weight: 700;
                }


                .drop{
                    padding : 4px 6px;
                    background: #EAEDF7;
                    border-radius: 8px;

                    .drop__img{
                        height: 7px;
                    }

                }

            }
        }
    }
}


// @media screen and (min-width:481px) and (max-width : 768px) {
//     header{
//         .nav{

//             .nav__left{

//                 h3{
//                     font-size: 18px;
//                 }
//             }

//             .nav__right{
//                 @include flex(row, flex-start, center);

//                 .user__img{
//                     height: 25px;
//                     width: 25px;
//                     object-fit: cover;
//                 }

//                 p{
//                     margin: 0px 12px 0px 12px;
//                     font-weight: 700;
//                 }


//                 .drop{
//                     padding : 4px 6px;
//                     background: #EAEDF7;
//                     border-radius: 8px;

//                     .drop__img{
//                         height: 7px;
//                     }

//                 }

//             }
//         }
//     }
// }

</style>