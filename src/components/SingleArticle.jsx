import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../api";

const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.fetchSingleArticle(article_id).then((article) => {
            setIsLoading(false);
            setArticle(article);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <section>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
            <>
            <h2 className="article-title-h2">{article.title}</h2>
            <div className="article-body">
                <p>{article.body}</p>
                <img src={article.article_img_url} alt="" id="single-article-image"/>
            </div>
            </>
            )}
        </section>
    )
}

export default SingleArticle;