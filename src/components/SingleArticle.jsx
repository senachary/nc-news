import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../api";
import CommentsCard from "./CommentsCard";

const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.fetchSingleArticle(article_id).then((article) => {
            setIsLoading(false);
            setArticle(article);
        })
        .catch((err) => {
                console.log(err)
            });
        
        api.fetchComments(article_id).then(comments => {
                setIsLoading(false)
                setComments(comments)
            })
        .catch((err) => {
                console.log(err)
            })
    }, [article_id])

    return (
        <section>
            {isLoading ? (
                <p>Loading post...</p>
            ) : (
            <>
                <div className="article-body">
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <img src={article.article_img_url} alt="" id="single-article-image"/>
                        </div>
            <div>
                {comments.map(comment => {
                    return <CommentsCard comments={comment} key={comment.created_at}/>
                 })}
            </div>
            </>
            )}
        </section>
    )
}

export default SingleArticle;