<template>
  <div class="technology-post">
    <b-row no-gutters class="mobile-row">
      <!-- sideBar Start -->
      <b-col class="pr-2 hide-in-mobile" cols="12" sm="12" md="3" lg="3" xl="3">
        <FixedChannelSideBar />
        <div class="mb-4 channel-side-bar-sticky">
          <div class="d-flex channel-side-bar-title">
            <b-icon
              v-b-toggle.sidebar-backdrop
              class="ml-3 p-1 my-auto menu-logo"
              scale="2"
              style="cursor: pointer;"
              icon="chevron-right"
            ></b-icon>
            <h5 class="mx-auto my-auto">
              Technology
            </h5>
          </div>
          <!--  -->

          <b-list-group
            v-bind:style="{
              height: heightOfScreen + 'px',
              overflowY: 'scroll'
            }"
            class="channel-side-bar channel-side-bar-list-group"
          >
            <button
              class="main-tag-button channel-side-bar-list-item btn btn-light"
              v-for="(item, index) in mainTagList.results"
              :key="index"
              @click="showMainTagPosts(item)"
              type="button"
            >
              <b-img
                :src="item.tag_icon"
                :alt="item.tag_name"
                class="shadow channel-side-bar-list-item-icon"
              ></b-img>
              {{ item.tag_name }}
            </button>
          </b-list-group>

          <div class="text-center py-3">
            <div
              v-if="mainTagList.next != null"
              @click="loadMoreMainTagListItem"
              class="more-button"
            >
              <b-icon
                icon="chevron-down"
                variant="dark"
                class="more-button-icon"
              ></b-icon>
            </div>

            <div
              v-else-if="mainTagList.previous != null"
              @click="loadLessMainTagListItem"
              class="more-button"
            >
              <b-icon
                icon="chevron-up"
                variant="dark"
                class="more-button-icon"
              ></b-icon>
            </div>
          </div>
        </div>
      </b-col>

      <b-col cols="12" class="hide-in-dekstop mobile-colmun">
        <FixedChannelSideBar />
        <div class="mobile-channel-bar">
          <div class="d-flex channel-side-bar-title">
            <b-icon
              v-b-toggle.sidebar-backdrop
              class="ml-3 p-1 my-auto menu-logo"
              scale="2"
              style="cursor: pointer;"
              icon="chevron-right"
            ></b-icon>
            <h5 class="mx-auto my-auto">
              Technology
            </h5>
          </div>
          <div class="pb-3">
            <vuescroll :ops="ops">
              <div class="d-flex">
                <div
                  class="mx-3 py-2"
                  v-for="(item, index) in mainTagList.results"
                  :key="index"
                >
                  <b-img
                    @click="showMainTagPosts(item)"
                    :alt="item.tag_name"
                    :src="item.tag_icon"
                    class="shadow channel-side-bar-list-item-icon"
                  ></b-img>
                </div>
              </div>
            </vuescroll>
          </div>
        </div>
      </b-col>
      <!-- Side Bar End -->

      <b-col class="mobile-colmun" cols="12" sm="12" md="9" lg="9" xl="9">
        <!-- Cover Start -->
        <div class="channel-cover hide-in-mobile">
          <b-card
            img-alt="technology cover"
            overlay
            img-height="80"
            img-src="~/assets/user/icons/channel-cover-technology.jpg"
            text-variant="white"
          >
            <b-card-text text-tag="h2" class="channel-cover-title">
              Technology</b-card-text
            >
          </b-card>
        </div>
        <!-- Cover End -->

        <!--Tab start -->
        <b-tabs :no-nav-style="true" class="pt-2" content-class="mt-0 mb-0">
          <b-tab title-link-class="text-dark" active @click="goLatest()">
            <template v-slot:title>
              <b-img
                alt="fresh"
                src="~assets/user/icons/fresh.svg"
                style="height: 20px; width: 20px;"
              ></b-img>
              Fresh
            </template>
            <div class="latest-under-line"></div>
          </b-tab>
          <b-tab title-link-class="text-dark" @click="goAbout()">
            <template v-slot:title>
              <b-img
                alt="about logo"
                src="~assets/user/icons/about.svg"
                style="height: 22px; width: 22px;"
              ></b-img>
              About
            </template>
            <div class="about-under-line"></div>
          </b-tab>
          <hr class="line" />
        </b-tabs>
        <!--Tab End -->

        <!-- Latest Div Start -->
        <div v-show="showLatestDiv">
          <!-- Sub Tags Start -->
          <div class="d-flex justify-content-start flex-wrap mt-2 mb-4">
            <vs-button
              flat
              v-for="(item, index) in subTagList"
              :key="index"
              :color="item.tag_creator__tagNameBG"
              @click="showSubTagPosts(item)"
              class="sub-tag"
              >{{ item.tag_creator__tag_name }}
            </vs-button>
          </div>
          <!-- Sub Tags End -->

          <VclChannelCommonCard v-if="$fetchState.pending" />
          <h4 v-else-if="$fetchState.error">
            Error while fetching posts: {{ $fetchState.error.message }}
          </h4>
          <b-row class="mobile-row" v-else>
            <b-col
              v-if="!dataLoading"
              cols="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              class="text-center"
            >
              <b-spinner
                style="width: 3rem; height: 3rem;"
                label="Large Spinner"
              ></b-spinner>
            </b-col>

            <b-col
              class="mobile-colmun"
              v-else
              md="4"
              lg="4"
              xs="12"
              sm="6"
              xl="4"
              v-for="(article, index) in TechnologyArticles"
              :key="index"
            >
              <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
              <ChannelCommonCard :article="article" :data-index="index" />
              <!-- </nuxt-link> -->
            </b-col>
          </b-row>
          <!-- Pagination Start End -->
          <div class="myPagination ">
            <div class="d-flex justify-content-center">
              <vs-button
                :loading="loadMoreLoading"
                color="#343a40"
                flat
                @click="loadData"
                ><strong>Load More</strong></vs-button
              >
            </div>
          </div>
          <!-- Pagination End -->
        </div>
        <!-- Latest Div End -->

        <!-- About Div Start -->
        <div v-show="showAboutDiv">
          <h3>this is abour apge of technology</h3>
          <h5 class="text-muted">Every body should know</h5>
        </div>
        <!-- About Div End -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import vuescroll from "vuescroll";
import { mapState } from "vuex";
export default {
  components: {
    vuescroll
  },
  layout: "default",
  head() {
    return {
      title: this.seoObject.Channel_title,
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
          content: this.seoObject.Channel_title
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.seoObject.Channel_title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.seoObject.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.seoObject.Channel_title
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
      .$get(process.env.baseUrl + "/s/all/technology")
      .then(function(posts) {
        self.seoObject = posts;
      })
      .catch(function(error) {
        console.log(error);
      });

    // Main Tag List Fetch
    await this.$axios
      .$get(process.env.channelMainTag + `technology`)
      .then(function(posts) {
        self.mainTagList = posts;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});

    // Channel Home Page Articles Fetch
    await this.$axios
      .$get(process.env.channelUrl + `Technology`)
      .then(posts =>
        this.$store.dispatch(
          "technology/FetchTechnologyArticles",
          posts.results
        )
      );
  },
  computed: mapState({
    TechnologyArticles: state => state.technology.TechnologyArticles,
    TagArticlesNextLink: state => state.technology.TagArticlesNextLink,
    heightOfScreen() {
      if (process.browser) {
        return (
          (window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight) - 145
        );
      }
    }
  }),
  data() {
    return {
      seoObject: {},
      mainTagList: [],
      subTagList: [],
      showLatestDiv: true,
      showAboutDiv: false,
      dataLoading: true,
      subTagSelected: false,
      mainTagSelected: false,
      parentSelected: true,
      loadMoreLoading: false,
      ops: {
        vuescroll: {
          mode: "slide",
          zooming: false
        },
        scrollPanel: {
          initialScrollY: 0,
          initialScrollX: 0,
          scrollingX: true,
          scrollingY: false,
          speed: 200
        },
        rail: {
          keepShow: false
        },
        bar: {
          keepShow: false,
          disable: true
        }
      }
    };
  },
  methods: {
    goLatest() {
      var self = this;
      self.showLatestDiv = true;
      self.showAboutDiv = false;
    },
    goAbout() {
      var self = this;
      self.showLatestDiv = false;
      self.showAboutDiv = true;
    },
    async loadMoreMainTagListItem() {
      var self = this;
      await this.$axios
        .$get(this.mainTagList.next)
        .then(function(posts) {
          posts.results.forEach(element => {
            self.mainTagList.results.push(element);
          });
          self.mainTagList.next = posts.next;
          self.mainTagList.previous = posts.previous;
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
    },
    async loadLessMainTagListItem() {
      var self = this;
      await self.$axios
        .$get(self.mainTagList.previous)
        .then(function(posts) {
          self.mainTagList = posts;
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
    },
    // show Main tag articles
    async showMainTagPosts(item) {
      this.dataLoading = false;
      var self = this;
      await this.$axios
        .$get(process.env.baseUrl + `/Listsub_Tag/${item.query_slug}`)
        .then(function(posts) {
          self.subTagList = posts.results.List;
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});

      await this.$axios
        .$get(process.env.baseUrl + `/channelpagetag/${item.query_slug}`)
        .then(function(posts) {
          posts.results.List.forEach(element => {
            element.photo = process.env.baseUrl + "/media/" + element.photo;
          });
          self.$store.dispatch(
            "technology/FetchTechnologyArticles",
            posts.results.List
          );
          self.$store.dispatch("technology/SetTagNextDataLink", posts.next);
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
      this.dataLoading = true;
      this.mainTagSelected = true;
      this.parentSelected = false;
    },
    // show sub tag articles
    async showSubTagPosts(item) {
      this.dataLoading = false;
      var self = this;
      await this.$axios
        .$get(process.env.baseUrl + "/targetData/" + item.tag_creator__tagSlug)
        .then(function(posts) {
          posts.results.List.forEach(element => {
            element.photo = process.env.baseUrl + "/media/" + element.photo;
          });

          self.$store.dispatch(
            "technology/FetchTechnologyArticles",
            posts.results.List
          );
          self.$store.dispatch("technology/SetTagNextDataLink", posts.next);
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
      this.dataLoading = true;
      this.subTagSelected = true;
      (this.parentSelected = false), (this.mainTagSelected = false);
    },
    async loadData() {
      // load home Articles
      this.loadMoreLoading = true;
      if (this.parentSelected) {
        try {
          await this.$store.dispatch("technology/FetchMoreTechnologyArticles");
        } catch (e) {
          // alert("No more data" + e);
        }
      }
      // load main tag articles
      else if (this.mainTagSelected) {
        if (this.TagArticlesNextLink == null) {
          // alert("null");
        } else {
          var self = this;
          await this.$axios
            .$get(self.TagArticlesNextLink)
            .then(function(posts) {
              posts.results.List.forEach(element => {
                element.photo = process.env.baseUrl + "/media/" + element.photo;

                self.$store.dispatch("technology/SetMoreTagArticles", element);
              });
              self.$store.dispatch("technology/SetTagNextDataLink", posts.next);
            })
            .catch(function(error) {
              console.log("No Net" + error);
            })
            .finally(function() {});
        }
      }

      // load sub tag articles
      else if (this.subTagSelected) {
        if (this.TagArticlesNextLink == null) {
          // alert("null");
        } else {
          var self = this;
          await this.$axios
            .$get(self.TagArticlesNextLink)
            .then(function(posts) {
              posts.results.List.forEach(element => {
                element.photo = process.env.baseUrl + "/media/" + element.photo;

                self.$store.dispatch("technology/SetMoreTagArticles", element);
              });
              self.$store.dispatch("technology/SetTagNextDataLink", posts.next);
            })
            .catch(function(error) {
              console.log("No Net" + error);
            })
            .finally(function() {});
        }
      }
      this.loadMoreLoading = false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>

<style scoped>
/* .technology-post{

} */

a {
  color: black !important;
  text-decoration: none;
}
</style>
