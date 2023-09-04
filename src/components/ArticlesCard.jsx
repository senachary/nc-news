const ArticlesCard = ({articles}) => {
    return (
        <div className="articles-list">
            <h2 className="article-title">{articles.title}</h2>
            <p>{articles.author}</p>
            <p>{articles.topic}</p>
            <p>{articles.votes}</p>
            <p>{ articles.comment_count}</p>
        </div>
    )
}

export default ArticlesCard;