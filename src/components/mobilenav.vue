<template>
  <div>
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
      <span class="mob-nav">
        <li><a href="#">Mens</a></li>
        <li><a href="#">Womens</a></li>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobilenav",
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
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.mobile-nav {
  width: 95%;
  top: 0px;
  position: fixed;
  display: flex;
  // display: none;
}
.nav-content {
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
</style>