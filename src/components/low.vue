<template>
<div>
        <hr>
    <div class="low-container">
        <div class="foot-container">
            <div class="col1">
                <div class="col1-row1">
                <ul>
                    <li><a href="#"><h3>Shop</h3> </a></li>
                    <li><a href="#">Shop Women</a></li>
                    <li><a href="#">Shop Men</a></li>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Fabric Guide</a></li>
                    <li><a href="#">Gift Cards</a></li>   
                </ul>
                </div>
                <div class="col1-row2">
                    <ul>
                        <li><a href="#"><h3>Account</h3> </a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">Order History</a></li>
                    </ul>
                </div>
            </div>
            <div class="col2">
                <div class="col2-row1">
                    <ul>
                        <li><a href="#"><h3>Support</h3> </a></li>
                        <li><a href="#">Contact &amp; FAQ</a></li>
                        <li><a href="#">Return &amp; Exchanges</a></li>
                        <li><a href="#">Shipping &amp; Return Policy</a></li>
                        <li><a href="#">Tommy Jhon Stores</a></li>
                        <li><a href="#">Store Locators</a></li>
                        <li><a href="#">Retailers</a></li>
                        <li><a href="#">Affilliates</a></li>
                    </ul>
                </div>
                <div class="col2-row2">
                    <ul>
                        <li><a href="#"><h3>Promotions</h3></a></li>
                        <li><a href="#">Sitewise Promotion</a></li>
                        <li><a href="#">Military Discount</a></li>
                        <li><a href="#">First Responder</a></li>
                        <li><a href="#">Government Employee Discount</a></li>
                        <li><a href="#">Teacher Discount</a></li>
                    </ul>
                </div>
            </div>
            <div class="col3">
                <ul>
                    <li><a href="#"><h3>Company</h3></a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Review</a></li>
                </ul>
            </div>
        </div>
        <div class="social-media-handles">
            <a href=""><img src="@/assets/fb.png" alt=""></a>
            <a href=""><img src="@/assets/fb.png" alt=""></a>
            <a href=""><img src="@/assets/fb.png" alt=""></a>
            <a href=""><img src="@/assets/fb.png" alt=""></a>
        </div>
    </div>
    <div class="mob-low-container">
        <div class="shop">
            <h3>Shop</h3>
        </div>
        <div class="account">
            <h3>Account</h3>

        </div>
        <div class="support">
            <h3>Support</h3> 

        </div>
        <div class="promotion">
            <h3>Promotions</h3>  

        </div>
        <div class="company">
            Company  

        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:'low',
    }
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
.low-container{
    position: relative;
    padding: 17px 48px 0 15px;
    background-color: rgb(99, 92, 81);
    display: flex;
    flex-direction: column;
    height: 40rem;
}

hr{
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
    width: 95%;
}
.foot-container{
    width: 98.35vw;
    left: 0;
    display: flex;
    justify-content: space-evenly;
}
.col1{
    margin-top: 2rem;
    ul{
        margin-bottom: 1.5rem;
    li{
        margin-top: .8rem;
        a{
            color: black;
            &:hover{
                text-decoration: underline rgb(99, 96, 96);
            }
        }
    }
    }
}
.col2{
    margin-top: 2rem;
    ul{
        margin-bottom: 1.5rem;
    li{
        margin-top: .8rem;
        a{
            color: black;
            &:hover{
                text-decoration: underline rgb(99, 96, 96);
            }
        }
    }
    }
}
.col3{
    margin-top: 2rem;
    ul{
        margin-bottom: 1.5rem;
    li{
        margin-top: .8rem;
        a{
            color: black;
            &:hover{
                text-decoration: underline rgb(99, 96, 96);
            }
        }
    }
    }
}
.social-media-handles{
    margin-top: 3rem;
    img{
        height: 44px;
        width: 44px;
        padding: 12px 10px;
        margin: 0px 35px;
    }
}
@media only screen and (max-width: 1151px) {
.low-container[data-v-9ec73118] {
    width: 157vw;
    margin-left: -8px;
}
.foot-container[data-v-9ec73118] {
    width: 99.35vw;
    left: 0;
    display: flex;
    justify-content: space-evenly;
}
hr[data-v-9ec73118] {
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
    width: 158%;
}
}
@media only screen and (max-width:480px) {
    *{
        font-size: 55px;
        font-weight: 700;
    }
    .low-container[data-v-9ec73118]{
        display: none;
    }
}
</style>