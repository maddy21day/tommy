<template>
  <div>
    <!-- <img id="im" src="@/assets/mha.jpg" alt=""> -->
    <div class="main-menu">
      <div class="navoption">
        <li v-for="data in data1.navigationType" :key="data.id">
          <a :href="'https://tommyjohn.com' + data.collectionUrl">
            {{ data.collectionTitle }}
          </a>
        </li>
        <div class="hover-container">
          <hr />
        </div>
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
    mounted(){
      console.log(myjson[0].navigationType);
    }
};

<style lang="scss">
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
  width: 85%;
  position: fixed;
  margin: auto;
  display: flex;
  // justify-content: space-between;
}
.navoption {
  // border: 2px solid red;
  margin-left: .5rem;
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
</style>