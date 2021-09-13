<template>
  <div>
    <div id="navBar">
      <div class="search-mobile">
        <div class="hamburger" id="toggleButton" @click="mobileToggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <svg
          width="20px"
          height="20px"
          aria-label="Here you can search Products"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 49.1 (51147) - http://www.bohemiancoding.com/sketch -->
          <defs></defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="#000000" fill-rule="nonzero">
              <path
                d="M14.5591647,11.8793503 C14.7842227,11.5058005 14.9605568,11.1136891 15.12529,10.712297 C15.4292343,9.97447796 15.587007,9.18561485 15.649652,8.39211137 C15.7726218,6.80742459 15.3689095,5.16241299 14.5429234,3.80510441 C13.7470998,2.49651972 12.5522042,1.39443155 11.1531323,0.761020882 C10.7610209,0.582366589 10.3573086,0.422273782 9.94199536,0.306264501 C9.51508121,0.187935035 9.0812065,0.118329466 8.64269142,0.0672853828 C7.83294664,-0.0278422274 7.01160093,0.030162413 6.21577726,0.19025522 C4.69605568,0.494199536 3.2575406,1.3062645 2.18793503,2.42459397 C1.1136891,3.54756381 0.348027842,5.00696056 0.113689095,6.54988399 C0.0487238979,6.9837587 0,7.41763341 0,7.85614849 C0.00464037123,9.4361949 0.482598608,11.0394432 1.4037123,12.3271462 C1.64965197,12.6705336 1.91415313,13.0046404 2.20881671,13.3109049 C2.50348028,13.6171694 2.83062645,13.8839907 3.16705336,14.1438515 C3.79118329,14.6194896 4.48723898,14.974478 5.22273782,15.2459397 C5.97215777,15.5197216 6.77726218,15.6589327 7.57308585,15.6890951 C8.37587007,15.7192575 9.19953596,15.6171694 9.97215777,15.3990719 C11.4524362,14.9791183 12.8329466,14.1044084 13.8143852,12.9164733 C14.0858469,12.5846868 14.3410673,12.2412993 14.5591647,11.8793503 Z M13.5406032,8.62412993 C13.4617169,9.12761021 13.3271462,9.61948956 13.1392111,10.0904872 C12.9396752,10.5382831 12.6914153,10.9605568 12.4013921,11.3549884 C12.0858469,11.7470998 11.7308585,12.1020882 11.3387471,12.4176334 C10.9443155,12.7076566 10.5197216,12.9559165 10.0742459,13.1554524 C9.60092807,13.3433875 9.10904872,13.4779582 8.60788863,13.5568445 C8.09512761,13.6148492 7.57772622,13.6148492 7.0649652,13.5568445 C6.56148492,13.4779582 6.06960557,13.3433875 5.59860789,13.1554524 C5.15081206,12.9559165 4.72853828,12.7076566 4.33410673,12.4176334 C3.94199536,12.1020882 3.58700696,11.7470998 3.27146172,11.3549884 C2.98143852,10.9605568 2.73317865,10.5359629 2.53364269,10.0904872 C2.34570766,9.61716937 2.21113689,9.12529002 2.13225058,8.62412993 C2.10440835,8.36890951 2.08816705,8.11136891 2.08816705,7.85382831 C2.08816705,7.5962877 2.10440835,7.3387471 2.13225058,7.08352668 C2.21113689,6.5800464 2.34570766,6.08816705 2.53364269,5.61716937 C2.73317865,5.16937355 2.98143852,4.74709977 3.27146172,4.35266821 C3.58700696,3.96055684 3.94199536,3.60556845 4.33410673,3.2900232 C4.72853828,3 5.15313225,2.75174014 5.59860789,2.55220418 C6.07192575,2.36426914 6.5638051,2.22969838 7.0649652,2.15081206 C7.57772622,2.09280742 8.09512761,2.09280742 8.60788863,2.15081206 C9.11136891,2.22969838 9.60324826,2.36426914 10.0742459,2.55220418 C10.5220418,2.75174014 10.9443155,3 11.3387471,3.2900232 C11.7308585,3.60556845 12.0858469,3.96055684 12.4013921,4.35266821 C12.6914153,4.74709977 12.9396752,5.17169374 13.1392111,5.61716937 C13.3271462,6.09048724 13.4617169,6.58236659 13.5406032,7.08352668 C13.5962877,7.59396752 13.5962877,8.11136891 13.5406032,8.62412993 Z"
              ></path>
              <path
                d="M19.9907193,18.9396752 C19.9791183,18.6658933 19.8863109,18.3967517 19.6844548,18.2018561 C19.2018561,17.737819 18.7192575,17.2737819 18.2343387,16.8097448 C17.4663573,16.0719258 16.6960557,15.3317865 15.9280742,14.5939675 C15.7540603,14.4269142 15.5777262,14.2575406 15.4037123,14.0904872 C15.2088167,13.9025522 14.9396752,13.7842227 14.6658933,13.7842227 C14.4106729,13.7842227 14.1044084,13.8979118 13.9280742,14.0904872 C13.7447796,14.2900232 13.6102088,14.549884 13.6218097,14.8283063 C13.6334107,15.1020882 13.7262181,15.3712297 13.9280742,15.5661253 C14.4106729,16.0301624 14.8932715,16.4941995 15.3781903,16.9582367 C16.1461717,17.6960557 16.9164733,18.4361949 17.6844548,19.1740139 C17.8584687,19.3410673 18.0348028,19.5104408 18.2088167,19.6774942 C18.4037123,19.8654292 18.6728538,19.9837587 18.9466357,19.9837587 C19.2018561,19.9837587 19.5081206,19.8700696 19.6844548,19.6774942 C19.8677494,19.4802784 20.0023202,19.2180974 19.9907193,18.9396752 Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div class="mainMenu">
        <a href="">
          <div class="menuItem">Mens</div>
        </a>
        <a href="">
          <div class="menuItem">Women</div>
        </a>
        <a href="">
          <div class="menuItem">Find Your Fit</div>
        </a>
        <a href="">
          <div class="menuItem">Explore Apollo</div>
        </a>
      </div>
      <div class="header-items-centered">
        <div class="logo">
          <img
            alt="Tommy John Logo"
            src="https://cdn.shopify.com/s/files/1/0019/1466/7055/files/tj-logo_horizontal.svg"
          />
        </div>
      </div>
      <div class="search">
        <svg
          width="20px"
          height="20px"
          aria-label="Here you can search Products"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 49.1 (51147) - http://www.bohemiancoding.com/sketch -->
          <defs></defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="#000000" fill-rule="nonzero">
              <path
                d="M14.5591647,11.8793503 C14.7842227,11.5058005 14.9605568,11.1136891 15.12529,10.712297 C15.4292343,9.97447796 15.587007,9.18561485 15.649652,8.39211137 C15.7726218,6.80742459 15.3689095,5.16241299 14.5429234,3.80510441 C13.7470998,2.49651972 12.5522042,1.39443155 11.1531323,0.761020882 C10.7610209,0.582366589 10.3573086,0.422273782 9.94199536,0.306264501 C9.51508121,0.187935035 9.0812065,0.118329466 8.64269142,0.0672853828 C7.83294664,-0.0278422274 7.01160093,0.030162413 6.21577726,0.19025522 C4.69605568,0.494199536 3.2575406,1.3062645 2.18793503,2.42459397 C1.1136891,3.54756381 0.348027842,5.00696056 0.113689095,6.54988399 C0.0487238979,6.9837587 0,7.41763341 0,7.85614849 C0.00464037123,9.4361949 0.482598608,11.0394432 1.4037123,12.3271462 C1.64965197,12.6705336 1.91415313,13.0046404 2.20881671,13.3109049 C2.50348028,13.6171694 2.83062645,13.8839907 3.16705336,14.1438515 C3.79118329,14.6194896 4.48723898,14.974478 5.22273782,15.2459397 C5.97215777,15.5197216 6.77726218,15.6589327 7.57308585,15.6890951 C8.37587007,15.7192575 9.19953596,15.6171694 9.97215777,15.3990719 C11.4524362,14.9791183 12.8329466,14.1044084 13.8143852,12.9164733 C14.0858469,12.5846868 14.3410673,12.2412993 14.5591647,11.8793503 Z M13.5406032,8.62412993 C13.4617169,9.12761021 13.3271462,9.61948956 13.1392111,10.0904872 C12.9396752,10.5382831 12.6914153,10.9605568 12.4013921,11.3549884 C12.0858469,11.7470998 11.7308585,12.1020882 11.3387471,12.4176334 C10.9443155,12.7076566 10.5197216,12.9559165 10.0742459,13.1554524 C9.60092807,13.3433875 9.10904872,13.4779582 8.60788863,13.5568445 C8.09512761,13.6148492 7.57772622,13.6148492 7.0649652,13.5568445 C6.56148492,13.4779582 6.06960557,13.3433875 5.59860789,13.1554524 C5.15081206,12.9559165 4.72853828,12.7076566 4.33410673,12.4176334 C3.94199536,12.1020882 3.58700696,11.7470998 3.27146172,11.3549884 C2.98143852,10.9605568 2.73317865,10.5359629 2.53364269,10.0904872 C2.34570766,9.61716937 2.21113689,9.12529002 2.13225058,8.62412993 C2.10440835,8.36890951 2.08816705,8.11136891 2.08816705,7.85382831 C2.08816705,7.5962877 2.10440835,7.3387471 2.13225058,7.08352668 C2.21113689,6.5800464 2.34570766,6.08816705 2.53364269,5.61716937 C2.73317865,5.16937355 2.98143852,4.74709977 3.27146172,4.35266821 C3.58700696,3.96055684 3.94199536,3.60556845 4.33410673,3.2900232 C4.72853828,3 5.15313225,2.75174014 5.59860789,2.55220418 C6.07192575,2.36426914 6.5638051,2.22969838 7.0649652,2.15081206 C7.57772622,2.09280742 8.09512761,2.09280742 8.60788863,2.15081206 C9.11136891,2.22969838 9.60324826,2.36426914 10.0742459,2.55220418 C10.5220418,2.75174014 10.9443155,3 11.3387471,3.2900232 C11.7308585,3.60556845 12.0858469,3.96055684 12.4013921,4.35266821 C12.6914153,4.74709977 12.9396752,5.17169374 13.1392111,5.61716937 C13.3271462,6.09048724 13.4617169,6.58236659 13.5406032,7.08352668 C13.5962877,7.59396752 13.5962877,8.11136891 13.5406032,8.62412993 Z"
              ></path>
              <path
                d="M19.9907193,18.9396752 C19.9791183,18.6658933 19.8863109,18.3967517 19.6844548,18.2018561 C19.2018561,17.737819 18.7192575,17.2737819 18.2343387,16.8097448 C17.4663573,16.0719258 16.6960557,15.3317865 15.9280742,14.5939675 C15.7540603,14.4269142 15.5777262,14.2575406 15.4037123,14.0904872 C15.2088167,13.9025522 14.9396752,13.7842227 14.6658933,13.7842227 C14.4106729,13.7842227 14.1044084,13.8979118 13.9280742,14.0904872 C13.7447796,14.2900232 13.6102088,14.549884 13.6218097,14.8283063 C13.6334107,15.1020882 13.7262181,15.3712297 13.9280742,15.5661253 C14.4106729,16.0301624 14.8932715,16.4941995 15.3781903,16.9582367 C16.1461717,17.6960557 16.9164733,18.4361949 17.6844548,19.1740139 C17.8584687,19.3410673 18.0348028,19.5104408 18.2088167,19.6774942 C18.4037123,19.8654292 18.6728538,19.9837587 18.9466357,19.9837587 C19.2018561,19.9837587 19.5081206,19.8700696 19.6844548,19.6774942 C19.8677494,19.4802784 20.0023202,19.2180974 19.9907193,18.9396752 Z"
              ></path>
            </g>
          </g>
        </svg>
        <input type="text" placeholder="Search" />
      </div>
      <div class="signin">Hi, Signin</div>
      <div class="cart"></div>
    </div>
  </div>
  <div class="mobile-overlay"></div>
</template>

<script>
// to start the json server and make sure to make terminal current directory to api folder
// json-server --watch db.json

// import Socks1 from './components/socks1.vue';
// import navbar from './components/navbar.vue';

export default {
  name: "navbar",
  data() {
    return {
      navigation: null,
      navtitle: "",
      navurl: "",
    };
  },
  beforeMount() {
    this.getNav();
  },
  methods: {
    async getNav() {
      const res = await fetch("http://localhost:3000/result");
      const data = await res.json();
      this.navigation = data;
      // console.log(this.navigation.);
    },
    mobileToggle() {
      var toggle_button = document.getElementById("toggleButton");
      var overlay = document.getElementsByClassName("mobile-overlay")[0];
      var classes = document.getElementsByClassName("mainMenu")[0].classList;
      if (classes.contains("active")) {
        classes.remove("active");
        overlay.style.display = "none";
        toggle_button.classList.remove("cross");
      } else {
        toggle_button.classList.add("cross");
        overlay.style.display = "block";
        classes.add("active");
      }
    },
  },
};
</script>

<style>

a {
  text-decoration: none;
}
a:visited {
  color: inherit;
}
#navBar {
  position: fixed;
  background: white;
  width: 100%;
  display: flex;
  right: 0;
  left: 0;
  top:0;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  margin: auto;
  height: 4rem;
  place-items: center;
  z-index: 992;
}

.logo {
  display: grid;
  place-items: center;
  height: 100%;
  font-size: 2rem;
  box-sizing: border-box;
  white-space: nowrap;
  place-self: start;
}
.logo img {
  height: 3rem;
}
.mainMenu {
  position: relative;
  width: min-content;
  height: 100%;
  display: flex;
  left: 0rem;
  margin-right: auto;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
}
.search {
  display: flex;
  width: auto;
  justify-content: center;
  place-items: center;
  margin-right: 1rem;
}
.search svg {
  margin-right: 1rem;
}
.search input {
  right: 2rem;
  width: 5rem;
  border: none;
  border-bottom: 1px solid black;
}
.signin {
  margin-right: 1rem;
}
.search-mobile {
  display: none;
  justify-content: center;
  place-items: center;
}
#search-logo {
  height: 30px;
  width: 30px;
}

.menuItem {
  display: grid;
  place-items: center;
  width: max-content;
  padding: 0.6rem;
  margin: 0.3rem;
  color: black;
  word-wrap: break-word;
  box-sizing: border-box;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  height: 2rem;
  width: 2rem;
  padding: 4px;
  border: none;
  place-self: center;
}

.hamburger .bar {
  position: relative;
  width: 100%;
  height: 3px;
  border-radius: 0.7rem;
  background-color: black;
  transition: all 0.3s ease-in-out;
}
.header-items-centered {
  position: absolute;
  width: fit-content;
  height: 4rem;
  margin: auto;
  left: 0;
  right: 0;
}
.mobile-overlay {
  display: none;
  position: fixed;
  transition: opacity 0.3s;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 991;
  background: rgba(245, 245, 245, 0.85);
}

@media (max-width: 1160px) {
  #navBar {
    justify-content: space-between;
    top: 0;
  }
  .mainMenu {
    position: absolute;
    display: none;
    width: 25%;
    height: 100vh;
    grid-row: 2;
    top: -11rem;
    z-index: 100;
    background-color: white;
  }
  .menuItem {
    width: 100%;
    display: block;
  }
  .search-mobile {
    position: relative;
    left: 1rem;
  }
  .search-mobile svg {
    position: relative;
    left: 1rem;
  }

  .mainMenu a {
    font-size: 0.8rem;
    width: 100%;
  }

  .active {
    margin-top: 15rem;
    /* left: -100%; */
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease-in-out;
    /* transform: translateX(100%); */
  }
  .search {
    display: none;
  }
  .search-mobile {
    display: flex;
  }
  .logo {
    left: 0;
    right: 0;
    margin: auto;
  }
  .logo img {
    height: 2rem;
  }
  .signin {
    display: none;
  }

  .hamburger {
    display: flex;
    justify-self: end;
    right: 1rem;
  }
  .cross {
    z-index: 100;
  }

  .cross > .bar:nth-child(1) {
    transform-origin: left center;
    top: -2px;
    left: 3px;
    transition: transform 0.5s;
    transform: rotate(45deg);
  }

  .cross > .bar:nth-child(2) {
    width: 0;
    opacity: 0;
  }

  .cross > .bar:nth-child(3) {
    top: 1px;
    left: 3px;
    transform-origin: left center;
    transition: transform 0.5s;
    transform: rotate(-45deg);
  }
}
#footer {
  position: relative;
  width: 100%;
  background-color: aliceblue;
  bottom: 0;
  margin-top: auto;
  height: 4rem;
  display: grid;
  place-content: center;
}
/* @media (max-width:) */
</style>