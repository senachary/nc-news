import TopicsCard from "./TopicsCard";
import * as api from "../api"
import { useEffect, useState } from "react";

const TopicsList = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        api.fetchTopics().then(data => {
            setTopics(data.topics);
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section>
            <h2>Topics: </h2>
            <TopicsCard />
            {topics}
            <ul>
                {/* {topics.map(topic => {
                    return <TopicsCard key={topic} topic={topics} />
                })} */}
            </ul>
        </section>
    );
};


export default TopicsList;