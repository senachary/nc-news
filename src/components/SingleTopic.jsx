import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../api";

const SingleTopic = () => {
    const { slug } = useParams();
    const [topic, setTopic] = useState([])
    const [articles, setArticles] = useState([])

    useEffect(() => {
        api.fetchTopics().then(({ data }) => {
            const selectedTopic = data.find((chosenTopic) => chosenTopic.slug === slug)
            if (selectedTopic) {
                setTopic(selectedTopic)
            } else {
                console.log(`${slug} not found`)
            }
        })
            .catch((err) => {
                console.log(err)
            });
        
        api.fetchArticles().then(( data ) => {
            const filteredArticles = data.articles.filter((article) => {
                return article.topic === slug
            })
            setArticles(filteredArticles)
        })
            .catch((err) => {
            console.log(err)
        })
        
    }, [slug])

    return (
        <section>
            <div>
                <h2 className="single-topic-h2">Articles for {topic.slug}</h2>
                <div>
                    <ul>
                        {articles.map((article) => (
                            <div className="articles-list">
                            <div className="article-title-div">
                                    <Link to={`/articles/${article.article_id}`}>
                                    <h2 className="article-title-h2">
                                    {article.title}
                                    </h2>
                                    </Link>
                                <p className="article-author">/u/{article.author}</p>
                            </div>
                            <div>
                                <img src={article.article_img_url} alt="" className="article-image"/>
                            </div>
                            <div className="votes-likes">
                                <p className="article-votes">{article.votes} votes</p>
                            </div>
                            <p className="article-info">{article.topic}</p>
                            <p className="article-info">{article.comment_count} comments</p>
                        </div>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );

};

export default SingleTopic