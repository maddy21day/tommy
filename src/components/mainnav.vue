<template>
  <div class="main-nav-container">
    <div class="main-nav">
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
            <div
              class="hover-nav-content"
              v-for="subdata in jdata[count].subNavigation"
              :key="subdata._key"
            >
              <li>
                <a href="#">{{ subdata.styleName }}</a>
              </li>
            </div>
          </div>
        </li>
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
  </div>
</template>


<script>
export default {
  name: "mainnav",
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
}
.main-nav-container {
  width: 90%;
  left: 0;
  right: 0;
  margin: auto;
}
.main-nav {
  //   border: 2px solid red;
  justify-content: space-evenly;
  display: flex;
  width: 95%;
}
.left {
  //   border: 2px solid black;
  width: fit-content;
  // align-items: left;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    // margin: 0px 15px;
    font-size: 20px;
    color: black;
    // padding: 19px 12px;
  }
}
.center {
  // border: 2px solid rgb(136, 110, 110);
  width: fit-content;
  img {
    // height: 4rem;
    width: 13rem;
  }
}
.right {
  display: flex;
  width: fit-content;
  // border: 2px solid blue;
}
.hover-option {
  position: absolute;
  display: none;
  flex-direction: column;
  // justify-content: space-evenly;
  // border: 2px solid red;
  margin: auto;
  width: 100%;
  left: 0;
  right: 0;
  height: 27rem;
}

.hover-nav-content {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  // border: 2px solid black;
  width: 25%;
  margin-left: 11%;
  a {
    color: rgb(99, 98, 98);
    text-decoration: none;
    &:hover {
      color: rgb(26, 26, 73);
      font-weight: 600;
    }
    &:active {
      color: rgb(26, 26, 73);
      font-weight: 700;
    }
  }
}
.hover-nav-image {
  margin-top: 1rem;
  // border: 2px solid rgb(117, 106, 106);
  width: 50%;
}
</style>