<template>
  <div class="author-profile">
    <div class="author-cover">
      <b-img
        alt="cover photo of author Profile"
        v-if="$fetchState.pending"
        :blank="true"
        class="w-100 rounded"
        blank-color="gray"
        height="300"
      ></b-img>

      <b-card
        v-else
        overlay
        :img-src="
          `http://cdn.resultonlinebd.com/media/channel_profile/jkmjmkj.jpg`
        "
        :img-alt="AuthorArticles.authorsname"
        text-variant="white"
        class="rounded cover"
        img-height="300"
      >
        <div
          class="d-flex justify-content-center main-sec"
          style="padding-top:50px;"
        >
          <div>
            <b-img
              v-if="loadImg"
              :blank="true"
              blank-color="#777"
              class="logo mt-4"
            ></b-img>

            <b-img
              v-else
              :src="
                'http://cdn.resultonlinebd.com/media/' +
                  AuthorArticles.authorsprofilrimg
              "
              class="logo"
              :alt="AuthorArticles.authorsname"
            ></b-img>
          </div>
          <div>
            <div class="vl"></div>
          </div>
          <div class="pl-3 pt-4">
            <h4 class="text-light">
              {{ AuthorArticles.authorsname }}
            </h4>
            <div class="d-flex" style="cursor: pointer;">
              <div class="mr-4 pt-1">
                <svg
                  @click="authorWeb"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-globe"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.018 7.5h2.49c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM2.255 4H4.09a9.266 9.266 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.024 7.024 0 0 0 2.255 4zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855-.173.324-.33.682-.468 1.068H7.5V1.077zM7.5 5H4.847a12.5 12.5 0 0 0-.338 2.5H7.5V5zm1 2.5V5h2.653c.187.765.306 1.608.338 2.5H8.5zm-1 1H4.51a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm1 2.5V8.5h2.99a12.495 12.495 0 0 1-.337 2.5H8.5zm-1 1H5.145c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm-2.173 2.472a6.695 6.695 0 0 1-.597-.933A9.267 9.267 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM1.674 11H3.82a13.651 13.651 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm8.999 3.472A7.024 7.024 0 0 0 13.745 12h-1.834a9.278 9.278 0 0 1-.641 1.539 6.688 6.688 0 0 1-.597.933zM10.855 12H8.5v2.923c.67-.204 1.335-.82 1.887-1.855A7.98 7.98 0 0 0 10.855 12zm1.325-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm.312-3.5h2.49a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.91 4a9.277 9.277 0 0 0-.64-1.539 6.692 6.692 0 0 0-.597-.933A7.024 7.024 0 0 1 13.745 4h-1.834zm-1.055 0H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
                  />
                </svg>
              </div>
              <div class="h5 my-auto">
                <b-icon
                  @click="active2 = !active2"
                  icon="reply"
                  variant="white"
                ></b-icon>
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </div>
    <b-tabs :no-nav-style="true" class="pt-2" content-class="mt-0 mb-0">
      <b-tab title-link-class="text-dark" active @click="goLatest()">
        <template v-slot:title>
          <b-img
            src="~assets/user/icons/fresh.svg"
            style="height: 20px; width: 20px;"
            alt="fresh icon"
          ></b-img>
          Fresh
        </template>
        <div class="latest-under-line"></div>
      </b-tab>
      <b-tab title-link-class="text-dark" @click="goAbout()">
        <template v-slot:title>
          <b-img
            src="~assets/user/icons/about.svg"
            style="height: 22px; width: 22px;"
            alt="about icon"
          ></b-img>
          About
        </template>
        <div class="about-under-line"></div>
      </b-tab>
      <hr class="line" />
    </b-tabs>
    <div v-show="showLatestDiv">
      <AuthorVclCard v-if="$fetchState.pending" />
      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <b-row class="hide-in-mobile" v-else>
        <b-col
          class=""
          sm="6"
          md="3"
          lg="3"
          xl="3"
          v-for="(a, index) in AuthorArticles.List"
          :key="index"
        >
          <div v-if="a.is_active">
            <AuthorSmallCard
              :ArticleCover="'http://cdn.resultonlinebd.com/media/' + a.photo"
              :ArticleTitle="a.title"
              :ArticlePublish="a.release_date"
              :ArticleSlug="a.slug"
              :ArticleView="a.view"
              :article="a.channel__slug_channel"
              :imgAlt="a.Seoimgalt"
            />
          </div>
        </b-col>
      </b-row>
      <b-row no-gutters class="mobile-row  hide-in-dekstop">
        <b-col
          class="mobile-colmun"
          cols="12"
          sm="6"
          md="3"
          lg="3"
          xl="3"
          v-for="(a, index) in AuthorArticles.List.slice(0, 1)"
          :key="a.id"
        >
          <div v-if="a.is_active">
            <AuthorSmallCard
              :ArticleCover="'http://cdn.resultonlinebd.com/media/' + a.photo"
              :ArticleTitle="a.title"
              :ArticlePublish="a.release_date"
              :ArticleSlug="a.slug"
              :ArticleView="a.view"
              :article="a.channel__slug_channel"
              :imgAlt="a.Seoimgalt"
            />
          </div>
        </b-col>
        <b-col
          class="p-3"
          cols="6"
          sm="6"
          md="3"
          lg="3"
          xl="3"
          v-for="(a, index) in AuthorArticles.List.slice(
            1,
            AuthorArticles.List.length
          )"
          :key="a.id"
        >
          <div v-if="a.is_active">
            <AuthorSmallCard
              :ArticleCover="'http://cdn.resultonlinebd.com/media/' + a.photo"
              :ArticleTitle="a.title"
              :ArticlePublish="a.release_date"
              :ArticleSlug="a.slug"
              :ArticleView="a.view"
              :article="a.channel__slug_channel"
              :imgAlt="a.Seoimgalt"
            />
          </div>
        </b-col>
      </b-row>

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
    </div>
    <div v-show="showAboutDiv">
      <b-container>
        <h3>{{ AuthorArticles.authorsname }}</h3>
        <div class="about-text" v-html="AuthorArticles.about"></div>
      </b-container>
    </div>
    <vs-dialog width="470px" not-center v-model="active2">
      <template #header>
        <h6 class="pt-3">Share this page</h6>
      </template>
      <ShareModal
        :pathUrl="`/authorProfile/${this.$route.params.authorName}`"
      />
    </vs-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "default",
  head() {
    return {
      title: this.AuthorArticles.page_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.AuthorArticles.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.AuthorArticles.meta_keyword
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: this.AuthorArticles.page_title
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.AuthorArticles.page_title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.AuthorArticles.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.AuthorArticles.page_title
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
          content: this.AuthorArticles.description
        },
        {
          hid: "og:image",
          name: "og:image",
          content:
            "http://cdn.resultonlinebd.com/media/" +
            this.AuthorArticles.authorsprofilrimg
        }
      ]
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + `/channel/${self.$route.params.authorName}`)
      .then(function(posts) {
        self.$store.dispatch(
          "authorProfile/FetchAuthorArticles",
          posts.results
        );
        self.nextLink = posts.next;
      });

    self.loadImg = false;
  },
  computed: mapState({
    AuthorArticles: state => state.authorProfile.AuthorArticles
  }),

  data() {
    return {
      loadMoreLoading: false,
      showLatestDiv: true,
      showAboutDiv: false,
      Loading: false,
      nextLink: "",
      loadImg: true,
      active2: false,
      place: `http://test.resultonlinebd.com/authorProfile/${this.$route.params.authorName}`
    };
  },
  methods: {
    shareToFb() {
      window.open(
        "https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com/authorProfile/" +
          this.$route.params.authorName,
        "_blank"
      );
    },
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
    async loadData() {
      this.loadMoreLoading = true;
      if (this.nextLink != null) {
        var self = this;
        await self.$axios.$get(self.nextLink).then(function(posts) {
          posts.results.List.forEach(element => {
            self.$store.dispatch("authorProfile/AddMore", element);
          });

          self.nextLink = posts.next;
        });
      } else {
        // alert("null");
      }
      this.loadMoreLoading = false;
    },
    authorWeb() {
      window.open(this.AuthorArticles.authorsweblink, "_blank");
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
/* .author-profile{
  
} */
.logo {
  height: 100px !important;
  width: 100px;
  border-radius: 10px;
  padding: 5px;
}
.vl {
  border-left: 3px solid rgb(230, 233, 230);
  height: 92%;
  margin-top: 6px;
  margin-left: 15px;
}
a {
  color: black !important;
  text-decoration: none;
}
.about-text {
  text-align: justify;
}
</style>
