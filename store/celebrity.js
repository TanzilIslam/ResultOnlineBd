import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    CelebrityArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_CELEBRITY_ARTICLES(state, payload) {
        state.CelebrityArticles = payload
    },
    SET_MORE_CELEBRITY_ARTICLES(state, payload) {
        state.CelebrityArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },
    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
        state.CelebrityArticles.push(payload)
    }
}

export const actions = {

    FetchCelebrityArticles({ commit }, posts) {
        commit('SET_CELEBRITY_ARTICLES', posts)
    },
    FetchMoreCelebrityArticles({ commit, rootState }) {
        return ApiService.GetMoreCelebrityArticles(rootState.celebrity.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_CELEBRITY_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },
    SetTagNextDataLink({ commit }, posts) {
        commit('SET_TAG_NEXT_DATA_LINK', posts)
    },
    SetMoreTagArticles({ commit }, posts) {
        commit('SET_MORE_TAG_ARTICLES', posts)
    }
}
