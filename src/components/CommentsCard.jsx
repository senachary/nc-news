const CommentsCard = ({comments}) => {
    return (
        <div className="comment-div">
            <h4 className="comment-author">{comments.author}: </h4>
            <p className="comment-body">{comments.body}</p>
        </div>
    )
}

export default CommentsCard