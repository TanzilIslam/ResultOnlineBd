<template>
  <div class="blog-page">
    <div class="text-center pt-2" v-if="$fetchState.pending">
      <VclChannelCommonCard />
    </div>
    <div v-else>
      <!-- cover -->
      <b-row no-gutters class="mt-2 mb-4">
        <b-col
          cols="12"
          sm="6"
          md="3"
          lg="3"
          xl="3"
          v-for="(i, index) in cover"
          :key="index"
        >
          <div v-if="i.is_active">
            <nuxt-link :to="`/b/${i.slug}`">
              <b-card
                overlay
                :img-src="i.photo"
                img-alt="Card Image"
                text-variant="white"
                img-height="400"
                class="cover-card"
              >
                <div class="text-holder">
                  <b-card-text text-tag="p" class="cover-title">
                    {{ i.title }}
                  </b-card-text>
                </div>
              </b-card>
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
      <div>
        <b-row>
          <b-col cols="12" class="mt-4 mb-3">
            <div class="d-flex align-self-center mb-2">
              <b-img
                src="~/assets/user/tabs/r.png"
                style="height: 35px; width: 35px;"
              ></b-img>
              <h5 class="ml-2 mt-1"><strong>Fresh</strong></h5>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
            class="mb-5"
            v-for="(i, index) in home.slice(0, 2)"
            :key="index"
          >
            <div v-if="i.is_active">
              <nuxt-link :to="`/b/${i.slug}`">
                <b-card
                  class="cover-card"
                  img-height="280"
                  no-body
                  :img-src="i.photo"
                  img-top
                >
                  <b-card-text class="card-title-one">
                    {{ i.title }}
                  </b-card-text>
                </b-card>
              </nuxt-link>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="4" lg="4" xl="4">
            <div
              class="mb-3"
              v-for="(i, index) in home.slice(2, 4)"
              :key="index"
            >
              <div v-if="i.is_active">
                <nuxt-link :to="`/b/${i.slug}`">
                  <div class="d-flex">
                    <div class="">
                      <b-img height="136" width="205" :src="i.photo"></b-img>
                    </div>
                    <div class="card-title-two ml-2">
                      <h6>
                        <strong>{{ i.title }}</strong>
                      </h6>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- Bottom Cards -->
      <div v-for="(item, index) in bottomCards" :key="index">
        <b-row>
          <b-col
            cols="12"
            md="12"
            lg="12"
            xl="12"
            class="mb-2 mt-2 bottom-section-title"
          >
            <div v-if="item.is_active">
              <h5>
                <b-img
                  height="40"
                  width="40"
                  class="rounded shadow-sm"
                  :src="item.cat_icon"
                ></b-img>
                <nuxt-link prefetch :to="`/allBlogPost/${item.cat_slug}`"
                  ><strong>{{ item.cat_name }}</strong></nuxt-link
                >
              </h5>
              <h6 class="mb-3" style="font-size: 20px;">
                {{ item.cat_description }}
              </h6>
            </div>
          </b-col>

          <b-col
            v-for="(i, index) in item.List"
            :key="index"
            class="mb-4"
            cols="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <div v-if="i.is_active">
              <nuxt-link :to="`/b/${i.slug}`">
                <b-card class="cover-card-two" no-body img-top>
                  <b-card-img
                    width="436"
                    height="280"
                    :src="'http://cdn.resultonlinebd.com' + i.photo"
                    class="card-image-bottom"
                  ></b-card-img>
                  <b-card-text text-tag="p" class="card-title-small mt-4">
                    {{ i.title }}
                  </b-card-text>
                  <!-- <b-card-text text-tag="p" class="des">
                  {{ i.decribe_post.slice(0, 80) }}
                </b-card-text> -->
                </b-card>
              </nuxt-link>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <!-- Pagination Start End -->
    <div class="myPagination">
      <div class="text-center mt-5 mb-3">
        <b-button variant="dark" @click="loadData">Load More</b-button>
      </div>
    </div>
    <!-- Pagination End -->
  </div>
</template>
<script>
export default {
  layout: "default",
  data() {
    return {
      bottomCards: {},
      nextDataLink: "",
      cover: [],
      home: [],
      seoObject: {}
    };
  },
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
  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + "/s/h/BlogPage")
      .then(function(posts) {
        self.seoObject = posts;
      })
      .catch(function(error) {
        console.log(error);
      });
    await self.$axios
      .$get(process.env.baseUrl + "/blog/api/v1/")
      .then(function(posts) {
        self.bottomCards = posts.results;
        self.nextDataLink = posts.next;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});

    await self.$axios
      .$get(process.env.baseUrl + "/blog/api/v1/cover")
      .then(function(posts) {
        self.cover = posts.results;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});
    await self.$axios
      .$get(process.env.baseUrl + "/blog/api/v1/blog_home")
      .then(function(posts) {
        self.home = posts.results;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});
  },
  methods: {
    async loadData() {
      if (this.nextDataLink != null) {
        var self = this;
        await self.$axios
          .$get(self.nextDataLink)
          .then(function(posts) {
            posts.results.forEach(element => {
              self.bottomCards.push(element);
            });
            self.nextDataLink = posts.next;
          })
          .catch(function(error) {
            console.log("No Net" + error);
          })
          .finally(function() {});
      } else {
        // alert("Null");
      }
    }
  }
};
</script>

<style scoped>
/* .blog-page{

} */

.card-img-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  ) !important;
}
.cover-title {
  padding-left: 10px !important;
  padding-bottom: 10px;
  line-height: 1.2;
  font-size: 24px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  font-family: "Cambay";
  font-weight: 500;

  /* background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0)),
    to(rgba(0, 0, 0, 0.9))
  ); */
  /* background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  ); */
}
.cover-card {
  border-radius: 0px !important;
  border: none;
}

.card-title-one {
  color: rgb(18, 20, 22);
  font-size: 18px;
  font-family: ProximaNova-Bold, helvetica, Arial, sans-serif;
  margin: 5px 0px 0px;
  line-height: 1.22;
  font-weight: bold;
}
.img-card {
  width: 100% !important;
}
.card-title-two {
  color: rgb(18, 20, 22);
  font-size: 14px;
  /* font-family: ProximaNova-Bold, helvetica, Arial, sans-serif; */
  /* margin: 5px 0px 0px; */
  line-height: 1.29;
}
.bottom-section-title {
  color: rgb(18, 20, 22);
  font-family: ProximaNova-Bold, helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 30px;
  margin: 0px;
  font-weight: bold;
}
.cover-card-two {
  border: none;
  /* width: 93% !important; */
}
.card-image-bottom {
  border-radius: 10px !important;
}
.card-title-small {
  color: rgb(18, 20, 22);
  font-size: 14px;
  font-family: ProximaNova-Bold, helvetica, Arial, sans-serif;
  margin: 5px 0px 0px;
  line-height: 1.29;
  font-weight: bold;
}
.des {
  color: rgb(79, 70, 70) !important;
  font-size: 14px;
  line-height: 18px;
  margin: 0px;
  padding-right: 10px;
  font-weight: normal !important;
}
a {
  text-decoration: none;
  color: rgb(18, 20, 22) !important;
}
</style>
