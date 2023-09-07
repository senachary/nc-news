import ArticlesCard from "./ArticlesCard"
import { useEffect, useState } from "react"
import * as api from "../api"

const ArticlesList = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.fetchArticles().then(data => {
            setIsLoading(false)
            setArticles(data.articles)
        })
            .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <section>
            {isLoading ? (<p>Loading posts... </p>) : (
            <>
            {articles.map(article => {
                return <ArticlesCard key={article.article_id} articles={article}/>
            })}
            </>
            )}
        </section>
    )
}

export default ArticlesList;