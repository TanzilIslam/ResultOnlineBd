<template>
  <div class="home">
    <Carousel />
    <Breadcrumb :allActive="true" />

    <b-row class="home-main-row">
      <!-- Channel start -->
      <b-col class="home-sidebar" cols="12" sm="12" md="3" lg="3" xl="3">
        <div class="side-bar-sticky">
          <div
            class="side-bar-scroll"
            v-bind:style="{
              height: heightOfScreen + 'px',
              overflowY: 'scroll'
            }"
          >
            <div class="scrollbox-content">
              <SideBar />
            </div>
          </div>
          <div class="home-footer pt-3">
            <p class="mb-3 footer-name link-hover mr-2">
              <span class="mr-2"><nuxt-link  to="/t">Terms</nuxt-link></span>
              <nuxt-link  to="/t">Privacy</nuxt-link></span>
            </p>
            <p class="mb-3 footer-name link-hover">
              <span class="mr-2"><nuxt-link to="/t">Get In Touch</nuxt-link></span> <span><nuxt-link to="/t" >About Us</nuxt-link></span>
            </p>
            <div class="d-flex">
              <div>
                <b-img
                  alt="facebook logo of resultonlinebd page"
                  class="footer-name social-icons"
                  :src="require('~/assets/user/icons/facebook.svg')"
                ></b-img>
              </div>
              <div>
                <b-img
                  alt="instagram logo of resultonlinebd page"
                  class="footer-name social-icons "
                  :src="require('~/assets/user/icons/pinterest.svg')"
                ></b-img>
              </div>
              <div>
                <b-img
                  alt="twiter logo of resultonlinebd page"
                  class="footer-name social-icons bg-"
                  :src="require('~/assets/user/icons/twitter.svg')"
                ></b-img>
              </div>
            </div>
            <div class="pt-3 footer-name">© 2020 · NuxtIt</div>
          </div>
        </div>
      </b-col>
      <!-- channel end -->

      <!-- latest start -->
      <b-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        class="order-md-last order-lg-last order-xl-last home-latest"
      >
        <div class="latest-home-card mb-4 pt-1 fresh-sticky">
          <h5 class="custom-latest-title ml-2">
            <b-img
              alt="image of fresh catagory article"
              height="30"
              width="25"
              class="ml-1 mr-2"
              src="~assets/user/icons/fresh.svg"
            ></b-img
            >Fresh
          </h5>
          <hr class="custom-latest-hr" />

          <b-list-group>
            <VclRelatedCard
              class="px-2"
              :cWidth="360"
              :alignVc="true"
            />
            <!-- <h4 v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </h4> -->
            <!-- <b-list-group-item
              v-else
              v-for="(article, index) in LatestArticles"
              :key="index"
              :data-index="index"
              class="custom-list-item px-2 py-1"
            >
              <div v-if="article.is_active">
                <div v-if="article.channel.channelname == 'Mobile phone'">
                  <nuxt-link prefetch :to="`/m/${article.slug}`">
                    <div class="d-flex">
                      <div class="custom-latest-text mr-3">
                        {{ article.title }}
                        <p class="mt-4 text-muted">
                          {{ article.release_date }}
                        </p>
                      </div>
                      <div class="ml-auto">
                        <b-img
                          class="custom-latest-image"
                          :src="article.photo"
                          :alt="article.Seoimgalt"
                        ></b-img>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div v-else>
                  <nuxt-link prefetch :to="`/${article.slug}`">
                    <div class="d-flex">
                      <div class="custom-latest-text mr-3">
                        {{ article.title }}
                        <p class="mt-4 text-muted">
                          {{ article.release_date }}
                        </p>
                      </div>
                      <div class="ml-auto">
                        <b-img
                          class="custom-latest-image"
                          :src="article.photo"
                          :alt="article.Seoimgalt"
                        ></b-img>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <hr class="custom-latest-item-hr" v-if="index < 4" />
              </div>
            </b-list-group-item> -->
          </b-list-group>
        </div>

        <!-- <div class="blog pt-3 blog-sticky">
          <div class="blog-scroll">
            <div class="latest-home-card">
              <h5 class="custom-latest-title ml-2">Blog</h5>
              <hr class="custom-latest-hr" />
              <div v-if="$fetchState.pending">
                <b-img
                  height="160"
                  :blank="true"
                  blank-color="#bbb"
                  class="mb-3 px-2 w-100"
                  style="border-radius: 10px;"
                ></b-img>
                <b-img
                  :blank="true"
                  blank-color="#bbb"
                  class="w-100 px-2"
                  height="160"
                  style="border-radius: 10px;"
                ></b-img>
              </div>
              <div v-else class="mb-4" v-for="(i, index) in blog" :key="index">
                <nuxt-link :to="`/blogDetail/${i.slug}`">
                  <b-card class="pl-2 pr-2" no-body style="border: none;">
                    <b-card-img
                      height="160"
                      :src="i.photo"
                      style="border-radius: 10px;"
                    ></b-card-img>
                    <b-card-text
                      text-tag="p"
                      class="custom-card-text-title pt-2 pb-4 pl-1"
                    >
                      {{ i.title }}
                    </b-card-text>
                  </b-card>
                  <hr class="mx-3 my-0" v-if="index == 0" />
                </nuxt-link>
              </div>
            </div>
            <div class="qanda mb-4 latest-home-card">
              <h5 class="custom-latest-title ml-2">Q and A</h5>
              <hr class="custom-latest-hr" />
              <b-row>
                <b-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  v-for="(j, index) in qandA"
                  :key="index"
                >
                  <div class="pl-2 pr-2 mb-3">
                    <nuxt-link prefetch :to="`/qandADetail/${j.slug}`">
                      <b-card class="pl-2 pt-2" no-body>
                        <div @click="setViewQandA(j.view, j.slug)">
                          <h6>
                            <strong>{{ j.title }}</strong>
                          </h6>
                          <p>
                            {{ j.details.slice(0, 40) + "..." }}
                          </p>
                        </div>
                      </b-card>
                    </nuxt-link>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </div> -->
      </b-col>
      <!-- latest end -->

      <!-- home card start -->
      <b-col cols="12" sm="12" md="5" lg="5" class="index-home-card" xl="5">
        <div id="myDIV">
          <div class="home-cards">
            <VclHomeCard v-if="$fetchState.pending" />
            <h4 v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </h4>
            <HomeCard
              v-else
              v-for="(article, index) in HomeArticles"
              :key="index"
              :article="article"
              :data-index="index"
            />
            <VclHomeCard v-if="showCl" />
            <!-- <moon-loader
              v-if="!loaded"
              color="#000000"
              class="spinner-bottom"
              :size="40"
            ></moon-loader> -->
          </div>
        </div>
      </b-col>
      <!-- home card end -->
    </b-row>
    <div>
      <!-- toast start -->
      <b-toast
        toaster="b-toaster-bottom-center"
        id="my-toast"
        variant="dark"
        solid
      >
        <template v-slot:toast-title>
          <div class="d-flex flex-grow-1 align-items-baseline">
            <b-img
              blank
              blank-color="black"
              class="mr-2"
              width="12"
              height="12"
            ></b-img>
            <strong class="mr-auto">End!</strong>
            <!-- <small class="text-muted mr-2">42 seconds ago</small> -->
          </div>
        </template>
        No more data are available
      </b-toast>
      <!-- tost end -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MoonLoader } from "@saeris/vue-spinners";

import axios from "axios";
export default {
  layout: "default",
  components: { MoonLoader },
  head() {
    return {
      title: this.seoObject.page_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.seoObject.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.seoObject.meta_keyword
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: this.seoObject.page_title
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.seoObject.page_title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.seoObject.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.seoObject.page_title
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article.text"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: ""
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.seoObject.description
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.seoObject.meta_image
        }
      ]
    };
  },
  data() {
    return {
      loading: false,
      showCl: true,
      nextUrl: "",
      blog: [],
      qandA: [],
      seoObject: {}
    };
  },
  async fetch() {
    //seo
    var self = this;

    // await self.$axios
    //   .$get(process.env.baseUrl + "/s/h/Homepage")
    //   .then(function(posts) {
    //     self.seoObject = posts;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    var tokenStr1 =
      "dhhdofhofhwefieo90zSeheoip.Nwwuhehewuheo#ddofhh$$iohdoishNb<annsiasias>abssbuis<snosoiasnios>";
    // var tokenStr2 =
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY";
    // self.$axios.setHeader(
    //   "Authorization",
    //   `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY${tokenStr1}`
    // );
    // await self.$axios
    //   .$get(process.env.baseUrl, {
    //     headers: {
    //       Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY`
    //     }
    //   })
    //   .then(function(posts) {
    //     self.$store.dispatch("home/FetchHomeArticles", posts.results);
    //     self.nextUrl = posts.next;
    //   })
    //   .catch(function(error) {
    //     console.log("No Net" + error);
    //   })
    //   .finally(function() {});

    // await this.$axios
    //   .$get(process.env.baseUrl + `/latestdata`)
    //   .then(posts => this.$store.dispatch("home/FetchLatestArticles", posts));

    // blog
    // await this.$axios
    //   .$get(process.env.baseUrl + `/blog/api/v1/home_card`)
    //   .then((posts) => (this.blog = posts));

    // qand a
    // await this.$axios
    //   .$get(process.env.baseUrl + `/q&a/api/v1/qanda_home`)
    //   .then((posts) => (this.qandA = posts));
  },
  computed: mapState({
    HomeArticles: state => state.home.HomeArticles,
    LatestArticles: state => state.home.LatestArticles,
    heightOfScreen() {
      if (process.browser) {
        return (
          (window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight) - 220
        );
      }
    }
  }),
  methods: {
    scroll() {
      // window.onscroll = () => {
      //   // this.lazyload();
      //   let bottomOfWindow =
      //     Math.max(
      //       window.pageYOffset,
      //       document.documentElement.scrollTop,
      //       document.body.scrollTop
      //     ) +
      //       window.innerHeight ===
      //     document.documentElement.offsetHeight;

      //   let bottomOfWindowTwo =
      //     window.innerHeight + document.documentElement.scrollTop >=
      //     document.body.offsetHeight;

      //   const scrollY = window.scrollY;
      //   const visible = document.documentElement.clientHeight;
      //   const pageHeight = document.documentElement.scrollHeight;

      //   let bottomOfWindowThree = visible + scrollY >= pageHeight;
      //   if (bottomOfWindowTwo) {
      //     if (this.$route.path === "/") {
      //       this.showCl = true;
      //       this.loadData();
      //     }
      //   }
      // };
    },
    async loadData() {
      // if (this.nextUrl != null) {
      //   var self = this;
      //   self.$axios.setHeader(
      //     "Authorization",
      //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY"
      //   );
      //   await this.$axios
      //     .$get(self.nextUrl)
      //     .then(function(posts) {
      //       posts.results.forEach(element => {
      //         self.$store.dispatch("home/More", element);
      //       });
      //       self.nextUrl = posts.next;
      //       self.loaded = true;
      //     })
      //     .catch(function(error) {
      //       console.log("No Net" + error);
      //     })
      //     .finally(function() {});

      //   self.showCl = false;
      // } else {
      //   this.showCl = false;
      // }
    }
  },
  mounted() {
    // this.check();
    this.scroll();
    this.$nextTick(() => {
      // this.$nuxt.$loading.start();
      // setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

.side-bar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 65px;
}

.fresh-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 65px;
}
/* .blog-scroll {
  height: 500px;
  overflow-x: hidden;
  overflow-y: scroll;
} */
@media (min-height: 760px) {
  .side-bar-scroll {
    height: 100% !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
  }
}

.side-bar-scroll {
  /* height: 375px; */
  overflow-x: hidden;
  /* overflow-y: scroll; */
  scrollbar-width: thin;
}

/* .blog-sticky {
  position: sticky;
  top: 50px;
} */

.footer-name {
  cursor: pointer;
  color: #757575;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
}

 .footer-name a{
   color: #757575 !important;

 }
/* .home{

} */
.latest-home-card {
  background: #fff;
  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.custom-latest-title {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 20px;
  color: rgb(20, 23, 24);
  padding: 0 12px;
  /* border-bottom: 1px solid #eee; */
}
.custom-latest-hr {
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
}
.custom-latest-item-hr {
  margin: 0px;
}
.custom-list-item {
  border: none !important;
  /* padding: 0px !important; */
  cursor: pointer;
}
.custom-latest-image {
  width: 80px;
  height: 80px;
  left: 10px;
  top: 10px;
  border-radius: 8px;
}
.custom-latest-text {
  margin-left: 20px;
  margin-top: 10px;
  text-align: left;
  line-height: 20px;
  font-size: 14px;
}

.spinner {
  align-self: center;
  margin-bottom: 10px;
}
.spinner-bottom {
  margin: 10px;
  left: 37%;
}
a {
  color: black !important;
  text-decoration: none !important;
}
.social-icons {
  height: 25px;
  width: 25px;
  margin-right: 25px;
  cursor: pointer;
}
.custom-card-text-title {
  margin-top: 0px !important;
  color: rgb(27, 30, 33);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
}
.chanel {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #343a40;
  color: white;
  border-radius: 7px;
  margin-bottom: 0px;
}
</style>
