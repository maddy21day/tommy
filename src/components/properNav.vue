<template>
  <div>
    <div class="main-nav">
      <div class="left-box">
        <div class="left" v-for="(data, index) in jdata" :key="data.id">
          <li @mouseover="hoverdisplay(index)" @mouseleave="hoverout(index)">
            <a :href="'https://tommyjohn.com' + data.collectionUrl">
              {{ data.collectionTitle }}
            </a>
            <div
              class="hover-option action"
              @mouseleave="hoverout()"
              v-if="jdata[count]"
            >
              <hr />
              <div
                class="hover-nav-content"
                v-for="subdata in jdata[count].subNavigation"
                :key="subdata._key"
              >
                <li>
                  <a href="#" v-if="subdata.displayCollection==='all' || subdata.displayCollection==='desktop'">{{ subdata.styleName }}</a>
                </li>
              </div>
            </div>
          </li>
        </div>
      </div>
      <div class="center">
        <img
          src="https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tj-logo_horizontal.svg"
          alt=""
        />
      </div>
      <div class="right">
        <img src="@/assets/search_icon.svg" alt="" />
        <input type="search" placeholder="Search" />
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
      <span class="mob-nav">
        <li><a href="#">Mens</a></li>
        <li><a href="#">Womens</a></li>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "properNav",
  data() {
    return {
      NavigationData: [],
      subNavigationData: [],
      count: null,
    };
  },
  computed: {
    jdata() {
      return this.$store.getters.givedata;
    },
    sdata() {
      return this.$store.getters.givesubdata;
    },
  },
  mounted() {
    this.$store.dispatch("jsondata");
    this.NavigationData = this.jdata;
    console.log(this.NavigationData);
    this.$store.dispatch("subnavdata");
    this.subNavigationData = this.sdata;
    console.log(this.subNavigationData);
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
    hoverdisplay(index) {
      this.count = index;
      console.log(this.count);

      setTimeout(() => {
        console.log(
          document.getElementsByClassName("hover-option")[index],
          "jgaskj"
        );
        document.getElementsByClassName("hover-option")[index].style.display =
          "flex";
      }, 0);
    },

    hoverout(index) {
      document.getElementsByClassName("hover-option")[index].style.display =
        "none";
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
.mobile-nav{
  display: none;
}
.mob-nav{
  display: none;
}
.main-nav {
  z-index: 1000;
  left: 0;
  right: 0;
  background: white;
  top: 0;
  width: 100%;
  position: fixed;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  li {
    &:hover {
      text-decoration: underline;
    }
  }
}
.left-box {
  display: flex;
  font-size: 20px;
  .left {
    a {
      padding: 0px 20px;
      color: black;
    }
  }
}
.center {
  // border: 2px solid rgb(136, 110, 110);
  width: fit-content;
  img {
    // height: 4rem;
    width: 11rem;
  }
}
.right {
  display: flex;
  width: fit-content;
  input{
  border: none;
  border-bottom: 2px solid black;
}
::placeholder{
  font-size: 15px;
}
  // border: 2px solid blue;
}

.hover-option {
  //   top: 2rem;
  line-height: 20px;
  z-index: 1;
  width: 100%;
  background: white;
  position: absolute;
  display: none;
  flex-direction: column;
  padding-top: 12px;
  left: 0;
  right: 0;
  z-index: -1;
  height: 27rem;
}
hr {
  margin-top: 5px;
  width: 100%;
  margin: 0 auto;
  height: 1px;
}
.hover-nav-content {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  // border: 2px solid black;
  width: 25%;
  margin-left: 8%;
  li {
    width: 20rem;
    // height: 2px;
  }
  a {
    color: rgb(99, 98, 98);
    text-decoration: none;
    &:hover {
      width: 25%;
      color: rgb(26, 26, 73);
      font-weight: 600;
      background-color: #b0d8ec;
    }
    &:active {
      color: rgb(26, 26, 73);
      font-weight: 700;
    }
  }
}


@media only screen and (max-width: 1151px) {
  .main-nav {
    display: none;
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .mobile-nav {
    background: white;
    width: 100%;
    top: 0px;
    // margin-left: auto;
    height: 3.5rem;
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
    width: 9%;
    display: flex;
    justify-content: space-between;
    // border: 2px solid red;
  }
  #img1 {
    margin-right: 1rem;
    width: 2.5rem;
  }
  .mobile-branding {
    width: 40%;
    display: flex;
    margin-left: 28%;
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