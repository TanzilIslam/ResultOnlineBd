import axios from 'axios'

const apiClient = axios.create({
    baseURL: process.env.baseUrl,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY'
    }
})


export default {
    SetView(slug) {
        return apiClient.put(process.env.baseURL + '/count/' + slug, {
            view: 1
        })

    },

    GetMoreHomeArticles(pageNumber) {
        return apiClient.get('/?page=' + pageNumber)
    },

    GetMoreTopArticles(pageNumber) {
        return apiClient.get('/TopContent?page=' + pageNumber)
    },
    GetMoreRecommendedArticles(pageNumber) {
        return apiClient.get(`recommended_data?page=` + pageNumber)
    },

    GetMoreHighRatedArticles(pageNumber) {
        return apiClient.get(`/high_ratetd?page=` + pageNumber)
    },

    GetAuthorArticles(authorName) {
        return apiClient.get('/channel/' + authorName)
    },

    GetDetailArticle(slug) {
        return apiClient.get('/details/' + slug)
    },
    GetMoreProgrammingArticles(pageNumber) {
        return apiClient.get(process.env.channelPagination
            + pageNumber + `&search=Programming`)
    },
    GetMoreCelebrityArticles(pageNumber) {
        return apiClient.get(process.env.channelPagination
            + pageNumber + `&search=Celebrity`)
    },
    GetMoreGamingArticles(pageNumber) {
        return apiClient.get(process.env.channelPagination
            + pageNumber + `&search=Gaming`)
    },
    GetMoreHistoryArticles(pageNumber) {
        return apiClient.get(process.env.channelPagination
            + pageNumber + `&search=History`)
    },

    GetMoreHealthArticles(pageNumber) {
        return apiClient.get(process.env.channelPagination
            + pageNumber + `&search=Health`)
    },
    GetMoreTechnologyArticles(pageNumber) {
        return apiClient.get(process.env.channelPagination
            + pageNumber + `&search=Technology`)
    },

    GetMoreDesignLibraryArticles(pageNumber) {
        return apiClient.get(process.env.channelPagination
            + pageNumber + `&search=Design+library`)
    },
    GetMoreMobileArticles(pageNumber) {
        return apiClient.get(process.env.channelPagination + pageNumber + `&search=Mobile+phone`)
    }
}
