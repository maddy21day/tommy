<template>
  <div class="main-card">
    <div class="card-container">
      <div class="cards" v-for="(output, index) in this.data1" :key="output.id">
        <a :href="output.data.url">
          <img
            :src="output.data.image_url"
            alt=@/assets/not-found.svg
            @mouseover="hover(index)"
            @mouseleave="revert(index)"
            class="prime"
        /></a>
        <div id="span">
          <img
            id="btn"
            v-for="(outcome, index1) in data1[index].variations"
            :key="outcome.id"
            :src="`https://tjproduction.imgix.net/files/swatch-${outcome.data[
              'Product Color'
            ]
              .replaceAll(/\/?\s+/g, '-')
              .toLowerCase()}.jpg`"
            alt="@/assets/not-found.svg"
            @mouseover="swatch(index, index1)"
            @mouseleave="revert(index)"
          />
        </div>
        <a :href="output.data.url">
          <p>
            {{ output.value }}
          </p></a
        >
        <div class="span">${{ output.data.Price }}.00</div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "socks1",
  data() {
    return {
      secondaryimg: null,
      // data1: null,
    };
  },
    mounted(){
    this.$store.dispatch("setdata");
    console.log(this.data1)
  },
  // beforeMount() {
  //   this.getName();
  // },
  computed:{
    data1(){
      return this.$store.getters.publishdata;
    }
  },
  //   mounted(){
  //   this.$store.dispatch("setdata");
  // },

  methods: {
    getdata(){
      console.log(this.data1);
    },
    
    // use vuex to populate data in state and fetch through 


    // async getName() {
      //   const res = await fetch(
    //     "https://ac.cnstrc.com/browse/collection_id/mens-socks?c=ciojs-client-2.11.4&key=key_zMKm7Za5Dcr0HlmM&i=1b0a007a-8538-4e30-ae6a-7b2576539696&s=150&page=1&num_results_per_page=20&sort_by=relevance&sort_order=descending&_dt=1630218577941"
    //   );
    //   const datacome = await res.json();
    //   this.data1 = datacome.response.results;
    //   // console.log(this.data1[this.index].variations.data.image_url)
    // },
    hover(index) {
      this.secondaryimg = this.data1[index].data.secondary_image_url;
      if (this.data1[index].data.secondary_image_url) {
        $(".prime")[index].setAttribute("src", this.secondaryimg);
      }
    },
    revert(index) {
      $(".prime")[index].setAttribute("src", this.data1[index].data.image_url);
    },
    swatch(index, index1) {
      $(".prime")[index].setAttribute(
        "src",
        this.data1[index].variations[index1].data.image_url
      );
    },
  },
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* #img1 {
  height: 60px;
} */

hr {
  width: 1450px;
  margin-left: 2.5%;
  /* margin-top: 50px; */
  /* margin-bottom: 25px; */
}

#btn {
  
  /* float: left; */
  border-radius: 50%;
  margin: 2px 4px;
  border: 1px solid rgb(19, 19, 49);
  height: 25px;
  width: 25px;
}
a {
  text-decoration: none;
}
.card-container {
  width: 95%;
  margin: auto;
  margin-top: -80px;
  display: flex;
  flex-wrap: wrap;
}
.cards {
    margin-left: 4.5%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    width: 266px;
    padding: 0px 12px;
}
p {
  font-family: Basetica, Basetica-regular, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #00424a;
  padding-right: 20px;
  margin-bottom: 0;
  margin-top: 0;
  width: 188px;
}
.prime {
  background: white;
  height: 350px;
  width: 300px;
}
.prime alt {
  background: white;
  height: 350px;
  width: 300px;
}
#span {
  display: flex;
  /* flex-wrap: wrap; */
  overflow-y: hidden;
  overflow-x: auto;
  width: 300px;
  /* height: 32px; */
  line-height: 13px;
  color: rgb(19, 19, 49);
  font-size: 13px;
  font-weight: 300;
  float: left;
}
.span {
  display: flex;
  width: 300px;
  line-height: 13px;
  color: rgb(19, 19, 49);
  font-size: 13px;
  font-weight: 300;
  float: left;
}
::-webkit-scrollbar-thumb {
  background: white;
  color: white;
}

/* 3 cards */
@media only screen and (max-width: 900px) {
  .card-container {
    width: 1002px;

    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  p{
    font-size: 17px;
  }
  #btn{
    height: 30px;
    width: 30px;
  }
  .span{
    font-size: 16px;
  }
  .cards {
    /* margin-left: 6.5%; */
    display: flex;
    flex-wrap: wrap;
    margin-top: 26px;
    width: 334px;
    padding: 0px 12px;
    margin-left: 0;
  }
  .prime {
    background: white;
    height: 340px;
    width: 300px;
  }
}
/* 2 cards */
@media only screen and (max-width: 600px) {
  .card-container {
    margin: auto;
    width: 760px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  a{
    width: 200px;
  }
  p{
    font-size: 17px;
    
  }
  #btn{
    height: 30px;
    width: 30px;
  }
  .span{
    font-size: 16px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    width: 364px;
    padding: 0px 14px;
    /* margin-left: 4%; */
  }
  .prime {
    background: white;
    height: 460px;
    width: 378px;
  }
  .main-card{
    width: 100vw;
  }
}

/* 4 card */
@media only screen and (min-width: 992px) {
}

@media only screen and (max-width: 600px) {
}
@media only screen and (min-width: 1200px) {
}
</style>