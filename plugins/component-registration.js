import Vue from 'vue'

// common components start
import NavBar from '~/components/user/NavBar'
import Carousel from '~/components/user/Carousel'
import Breadcrumb from '~/components/user/Breadcrumb'
import SideBar from '~/components/user/SideBar'
import VclChannelCommonCard from '~/components/user/vue-content-loading-cards/VclChannelCommonCard'
import ChannelCommonCard from '~/components/user/cards/ChannelCommonCard'


Vue.component('NavBar', NavBar)
Vue.component('Carousel', Carousel)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('SideBar', SideBar)
Vue.component('VclChannelCommonCard', VclChannelCommonCard)
Vue.component('ChannelCommonCard', ChannelCommonCard)

// common components end

// Home Page start
import HomeCard from '~/components/user/cards/HomeCard'
import LatestCard from '~/components/user/cards/LatestCard'
import VclHomeCard from '~/components/user/vue-content-loading-cards/VclHomeCard'

Vue.component('HomeCard', HomeCard)
Vue.component('LatestCard', LatestCard)
Vue.component('VclHomeCard', VclHomeCard)
// Home Page End

// Top & High Rated start
// Top & High Rated End

// author start
import AuthorSmallCard from '~/components/user/cards/AuthorSmallCard'
import AuthorVclCard from '~/components/user/vue-content-loading-cards/AuthorVclCard'
Vue.component('AuthorSmallCard', AuthorSmallCard);
Vue.component('AuthorVclCard', AuthorVclCard);
// author end

// detail start
import VclDetailCard from '~/components/user/vue-content-loading-cards/VclDetailCard'
import StarRating from 'vue-star-rating'
Vue.component('VclDetailCard', VclDetailCard)
Vue.component('star-rating', StarRating);
// Detail end 

// Channel start
import ChannelCover from '~/components/user/ChannelCover'
Vue.component('ChannelCover', ChannelCover);
// Channel End

