import ArticlesCard from "./ArticlesCard"
import { useEffect, useState } from "react"
import * as api from "../api"

const ArticlesList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        api.fetchArticles().then(data => {
            console.log(data.articles)
            setArticles(data.articles)
        })
            .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <section>
            {articles.map(article => {
                return <ArticlesCard key={article.article_id} articles={article}/>
            })}
        </section>
    )
}

export default ArticlesList;