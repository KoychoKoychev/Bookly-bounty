import { useState } from "react";
import Topic from "../topic/Topic.js";
import "./Personalize.css";

export default function Personalize(props) {

    const topics = ["Art", "Business", "Biography", "Comedy", "Culture", "Education", "News", "Philosophy", "Psychology", "Technology", "Travel"]
    const [selected, setSelected] = useState([])
    const [sucFlag, setFlag] = useState(false)

    const savePrefs = () => {
        const customTopic = document.querySelector(".input-field").value;
        if ((selected.length < 3 && customTopic === "") || selected.length < 2) {
            alert("You have to select at least 3 topics")
        } else {
            if (customTopic === "") {
                localStorage.setItem("topicPrefs", JSON.stringify(selected))
            } else {
                localStorage.setItem("topicPrefs", JSON.stringify([...selected, customTopic]))
            }
            setFlag(true)
        }
    }
    if (!sucFlag) {
        return (
            <div className="container background">
                <p className="welcome-text gray">Personalize Suggestion</p>
                <p className="semi-text gray-slim">Choose <b>min. 3 topics</b> you like, we will give you more often that relate to it.</p>
                <input className="input-field gray" placeholder="Placeholder" />
                <div className="topic-list">
                    {topics.map(el => <Topic key={el.toLowerCase()} content={el} list={selected} modifyList={setSelected} />)}
                </div>
                <p className="semi-text gray-slim">{selected.length} topics Selected</p>
                <button className="start btn-text" onClick={savePrefs}>Submit</button>
                <a className="skip-btn btn-text" href="/library">Skip</a>
            </div>
        )
    } else {
        return(
            <div className="container background">
                <img src="/images/Illustration 4.png" alt="success img" className="sucess-img"/>
                <p className="tittle text-pos gray">You are ready to go!</p>
                <p className="semi-text gray-slim text-center">Congratulation, any interesting topics will be shortly in your hands.</p>
                <a className="start btn-text" href="/library">Finish</a>

            </div>
        )
    }
}