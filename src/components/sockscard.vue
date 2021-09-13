<template>
  <div>
    <div class="card-container">
      <div class="cards" v-for="(output, index) in data1" :key="output.id">
        <a :href="output.data.url">
          <img
            :src="output.data.image_url"
            alt="Image not found"
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
            alt=""
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
      index1: 0,
      data1: null,
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "https://ac.cnstrc.com/browse/collection_id/mens-socks?c=ciojs-client-2.11.4&key=key_zMKm7Za5Dcr0HlmM&i=1b0a007a-8538-4e30-ae6a-7b2576539696&s=150&page=1&num_results_per_page=20&sort_by=relevance&sort_order=descending&_dt=1630218577941"
      );
      const datacome = await res.json();
      this.data1 = datacome.response.results;
      // console.log(this.data1[this.index].variations.data.image_url)
    },
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
}
#img1 {
  height: 60px;
}

hr {
  width: 1450px;
  margin-left: 2.5%;
  margin-top: 50px;
  margin-bottom: 25px;
}

#btn {
  
  float: left;
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
  width: 100%;

  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.cards {
  margin-left: 6.5%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  width: 200px;
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
  width: 80%;
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
@media only screen and (max-width: 768px) {
  .card-container {
    width: 1037px;

    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .cards {
    /* margin-left: 6.5%; */
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    width: 254px;
    padding: 0px 12px;
    margin-left: 2.5rem;
  }
  .prime {
    background: white;
    height: 350px;
    width: 300px;
  }
}
/* 2 cards */
@media only screen and (max-width: 600px) {
  .card-container {
    /* width: 834px; */

    margin: auto 0;
    display: flex;
    flex-wrap: wrap;
  }
  .cards {
    /* margin-left: 6.5%; */
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    width: 254px;
    padding: 0px 12px;
  }
  .prime {
    background: white;
    height: 350px;
    width: 300px;
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