import TopicsCard from "./TopicsCard";
import * as api from "../api"
import { useEffect, useState } from "react";

const TopicsList = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.fetchTopics().then(({data}) => {
            setIsLoading(false);
            setTopics(data);
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section>
            {isLoading ? (<p>Loading topics... </p>) : (
            <ul>
            {topics.map(topic => (
                    <TopicsCard key={topic.slug} topic={topic} />
                ))}
            </ul>
            )}
        </section>
    );
};


export default TopicsList;