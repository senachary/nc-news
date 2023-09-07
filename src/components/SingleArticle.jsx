import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../api";
import CommentsCard from "./CommentsCard";

const SingleArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [voteCount, setVoteCount] = useState(0)
    const [newComment, setNewComment] = useState("")

    useEffect(() => {
        api.fetchSingleArticle(article_id).then((article) => {
            setIsLoading(false);
            setArticle(article);
            setVoteCount(article.votes)
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

    const handVoteClick = () => {
        setVoteCount(prevVoteCount => prevVoteCount + 1)
        
        const newVote = voteCount + 1;
        api.patchArticle(article_id, newVote)
            .then(updatedVoteCount => {
            setVoteCount(updatedVoteCount)
            })
            .catch((err) => {
            console.log(err)
        })
    }

    const handleCommentChange = (e) => {
        setNewComment(e.target.value)
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        
        const newCommentObj = {
            comment_id: Math.random(),
            body: newComment,
            article_id: article_id,
            votes: 0,
            created_at: Date.now()
        }
        
        const updatedComments = [newCommentObj, ...comments] //place newcomment at top of list
        setComments(updatedComments)
        setNewComment("")
    }

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
                    <p className="article-votes">{voteCount} votes</p>
                    <button className="vote-button" onClick={handVoteClick}>👍</button>
                        </div>
                        <section>
                            <div className="comment-post-div">
                                <form method="post" onSubmit={handleCommentSubmit}>
                                    <textarea id="comment-form" rows="10" placeholder="Post comment..."
                                        value={newComment}
                                        onChange={handleCommentChange}
                                    ></textarea>
                                    <button className="comment-button">Reply</button>
                                </form>
                            </div>
                        </section>
            <div>
                {comments.map(comment => {
                    return <CommentsCard comments={comment} key={comment.comment_id}/>
                 })}
            </div>
            </>
            )}
        </section>
    )
}

export default SingleArticle;