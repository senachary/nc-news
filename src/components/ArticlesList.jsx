import ArticlesCard from "./ArticlesCard"
import { useEffect, useState } from "react"
import * as api from "../api"

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState('votes');
    const [sortOrder, setSortOrder] = useState('desc');

    
    useEffect(() => {
        api.fetchArticles().then(data => {
            setIsLoading(false)
            setArticles(data.articles)
        })
            .catch((err) => {
            console.log(err);
        })
    }, [])

    const sortByVotesAsc = (a, b) => a.votes - b.votes
    const sortByVotesDesc = (a, b) => b.votes - a.votes
    const sortByCommentsAsc = (a, b) => a.comment_count - b.comment_count
    const sortByCommentsDesc = (a, b) => b.comment_count - a.comment_count


    const handleToggleSort = (criteria) => {
        if (criteria === sortBy) {
            setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
        } else {
            setSortBy(criteria)
            setSortOrder('desc')
        }
    }

    const sortedArticles = [...articles]
    
    if (sortBy === 'votes') {
        if (sortOrder === 'desc') {
            sortedArticles.sort(sortByVotesDesc);
        } else {
            sortedArticles.sort(sortByVotesAsc);
        }
    } else if (sortBy === 'comments') {
        if (sortOrder === 'desc') {
            sortedArticles.sort(sortByCommentsDesc);
        } else {
            sortedArticles.sort(sortByCommentsAsc);
        }
    }

    

    return (
        <section>
            {isLoading ? (<p>Loading posts... </p>) : (
            <>
            <div>
                <button className="sort-by-button" onClick={() => handleToggleSort('votes')}>Sort By Votes</button>
                <button className="sort-by-button" onClick={() => handleToggleSort('comments')}>Sort By Comments</button>
            </div>          
            {sortedArticles.map(article => {
                return <ArticlesCard key={article.article_id} articles={article}/>
            })}
            </>
            )}
        </section>
    )
}

export default ArticlesList;