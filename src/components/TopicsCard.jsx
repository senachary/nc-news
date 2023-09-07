import {Link} from "react-router-dom"

const TopicsCard = ({ topic }) => {
    if (!topic) {
        return null
    }
    return (
        <div className="topic-card">
            <Link to={`/topics/${topic.slug}`}><h2 className="topic-name">{topic.slug}</h2></Link>
            <p className="topic-desc">{topic.description}</p>
        </div>
    );
};

export default TopicsCard;