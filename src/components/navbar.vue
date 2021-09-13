<template>
  <div>
      <!-- <img id="im" src="@/assets/mha.jpg" alt=""> -->
    <div class="main-menu">
      <div class="navoption" >
        <li v-for="data in data1.navigationType" :key="data.id">
          <a :href="'https://tommyjohn.com'+data.collectionUrl">
            {{data.collectionTitle}}
            </a></li>
        <!-- <li><a href="#">Womens</a></li>
        <li><a href="#">Find Your Fit</a></li>
        <li><a href="#">Explore Apollo</a></li> -->
      </div>
      <div class="branding-logo">
        <img
          id="brand-image"
          src="https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tj-logo_horizontal.svg"
          alt=""
        />
      </div>
      <div class="search">
        <img src="@/assets/search_icon.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div class="mobile-nav">
      <div class="icon-section">
        <img
          id="img1"
          src="https://cdn.shopify.com/s/files/1/2964/7474/files/svg-hamburger.svg?v=1592944333"
          alt=""
          @click="open()"
        />
        <img src="@/assets/search_icon.svg" alt="" />
      </div>
      <div class="mobile-branding">
        <img
          id="img3"
          src="https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tj-logo_horizontal.svg"
          alt=""
        />
      </div>
    </div>
    <div class="nav-content">
      <div class="mob-img">
        <li>
          <img class="search-mob" src="@/assets/search_icon.svg" alt="" />
        </li>
        <li>
          <img class="cross" src="@/assets/cross.svg" alt="" @click="close()" />
        </li>
      </div>
      <span class="mob-nav"
       v-for="data in data1.navigationType" :key="data.id">
        <li><a :href="'https://tommyjohn.com'+data.collectionUrl">
        {{data.collectionTitle}}
        </a></li>
      </span>
    </div>
  </div>
</template>

<script>
var myjson = require('C:/Users/madha/Downloads/navbar/src/api/db.json')
export default {
  name: "navbar",
  data(){
    return{
      data1:myjson[0],
    }
  },
  methods: {
    open() {
      document.getElementsByClassName("mobile-nav")[0].style.display = "none";
      document.getElementsByClassName("nav-content")[0].style.display = "flex";
    },
    close() {
      document.getElementsByClassName("mobile-nav")[0].style.display = "flex";
      document.getElementsByClassName("nav-content")[0].style.display = "none";
    },
  },
    mounted(){
      console.log(myjson[0].navigationType);
    }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.mobile-nav{
    display: none;
}
.nav-content{
  display: none;
}
.main-menu {
  left: 0;
  right: 0;
  background: white;
  top: 0;
  width: 90%;
  position: fixed;
  margin: auto;
  display: flex;
  // justify-content: space-between;
}
.navoption {
  // border: 2px solid red;
  margin-left: 2rem;
  display: flex;
  li {
    display: flex;
    align-items: center;
  }
  a {
    font-size: 1.2rem;
    text-decoration: none;
    padding: 2px 12px;
    color: rgb(15, 15, 15);
    &:hover {
      color: rgb(19, 19, 68);
      text-decoration: underline;
    }
  }
}
.branding-logo {
  // border: 2px solid red;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 0.5rem;
  height: 4rem;
  width: 15rem;
}
.search {
  margin-top: 2rem;
  display: flex;
  height: 2rem;
  // border: 2px solid red;
  right: 0;
  margin-left: auto;
  align-items: center;
  input {
    border: none;
    border-bottom: 1px solid black;
  }
  img {
    height: 2rem;
  }
}
@media only screen and (max-width: 1151px){
    .main-menu{
        display: none;
    }
    * {
  margin: 0;
  padding: 0;
  list-style: none;
}
.mobile-nav {
  background: white;
  width: 95%;
  top: 0px;
  position: fixed;
  display: flex;
  // display: none;
}
.nav-content {
  background: white;
  text-align: left;
  width: 100%;
  height: 100vh;
  display: none;
  flex-wrap: wrap;
  // justify-content: space-evenly;
  // border: 2px solid red;
  // height: min-content;
  // list-style: none;
  // margin: 0rem 1rem;
  // margin-top: 1rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
}
.icon-section {
  width: 13%;
  display: flex;
  justify-content: space-between;
  // border: 2px solid red;
}
#img1 {
  margin-right: 1rem;
}
.mobile-branding {
  width: 46%;
  display: flex;
  margin-left: 15%;
}
.mob-img {
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  height: 3rem;
}
.mob-img li {
  width: 45%;
}
.cross {
  float: right;
  height: 40px;
}
.mob-nav {
  display: flex;
  // border: 2px solid red;
  width: 100%;
  justify-content: space-evenly;
  line-height: 5px;
  height: 3rem;
  margin-top: 0px;
}
}
</style>