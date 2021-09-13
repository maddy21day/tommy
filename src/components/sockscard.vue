<template>
  <div>
    <div class="card-container">
      <div class="cards" v-for="(output, index) in data1" :key="output.id">
        <a :href="output.data.url">
          <img
            :src="output.data.image_url"
            alt=""
            @mouseover="hover(index)"
            @mouseleave="revert(index)"
            class="prime"
        /></a>
        <div class="span">
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
      if (this.data1[index].data.secondary_image_url ) {
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

<style lang='scss' scoped>
* {
  margin: 0;
  margin-top: 2rem;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.card-container {
  width: 98%;
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin: 0 auto;
}
.card {
  display: flex;
  width: 400px;
  height: 400px;
  border: 2px solid black;

}
.prime {
  // height: auto;
  width: 350px;
}
#btn {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  margin: 0px 4px;
}
</style>