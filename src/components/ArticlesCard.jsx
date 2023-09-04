const ArticlesCard = ({articles}) => {
    return (
        <div className="articles-list">
            <div className="article-title-div">
                <h2 className="article-title-h2">{articles.title}</h2>
                <p className="article-author">/u/{articles.author}</p>
                <p className="article-votes">{articles.votes} votes</p>
            </div>
            <div>
                <img src={articles.article_img_url} alt="" className="article-image"/>
            </div>
            <p className="article-info">{articles.topic}</p>
            <p className="article-info">{articles.comment_count} comments</p>
        </div>
    )
}

export default ArticlesCard;