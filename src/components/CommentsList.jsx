import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as api from "../api"
import CommentsCard from "./CommentsCard"

const CommentsList = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
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
            {isLoading ? (<p>Loading comments... </p>) : (
            <>
            {comments.map(comment => {
                return <CommentsCard comments={comment} key={comment.created_at}/>
            })}
            </>
            )}
        </section>
    ) 
}

export default CommentsList