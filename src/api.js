import axios from "axios";

export const fetchArticles = () => {
    return (
        axios.get("https://sen-nc-news.onrender.com/api/articles")
            .then(({ data }) => {
            return data
        })
    )
}

export const fetchSingleArticle = (article_id) => {
    return (
        axios.get(`https://sen-nc-news.onrender.com/api/articles/${article_id}`)
            .then((res) => {
                return res.data.article
        })
    )
}

export const fetchComments = (article_id) => {
    return (
        axios.get(`https://sen-nc-news.onrender.com/api/articles/${article_id}/comments`)
            .then((res) => {
                return res.data.comments
            })
    )
}

export const fetchTopics = () => {
    return (
        axios.get("https://sen-nc-news.onrender.com/api/topics")
            .then(({data}) => {
            return data
        })
    )
}