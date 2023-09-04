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
                console.log(res)
                return res.data.article
        })
    )
}