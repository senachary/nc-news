import axios from "axios";

export const fetchArticles = () => {
    return (
        axios.get("https://sen-nc-news.onrender.com/api/articles")
            .then(({ data }) => {
            return data
        })
    )
}