import Topic from "../topic/Topic.js";
import "./Personalize.css";

export default function Personalize(props) {

    const topics = ["Art", "Business", "Biography", "Comedy", "Culture", "Education", "News", "Philosophy", "Psychology", "Technology", "Travel"]
    const selected = [];

    return (
        <div className="container">
            <p className="welcome-text gray">Personalize Suggestion</p>
            <p className="semi-text gray-slim">Choose <b>min. 3 topics</b> you like, we will give you more often that relate to it.</p>
            <input className="input-field gray" placeholder="Placeholder" />
            <div className="topic-list">
                {topics.map(el => <Topic content={el}/>)}
            </div>
            <p className="semi-text gray-slim">{selected.length} topics Selected</p>
            <a className="start btn-text" href="javascipt:void(0)">Submit</a>
            <a className="skip-btn btn-text" href="/library">Skip</a>
        </div>
    )
}