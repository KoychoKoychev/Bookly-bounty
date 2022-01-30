import { useState } from "react"
import "./Topic.css"

export default function Topic({ content, list, modifyList }) {

    const [select, setSelect] = useState("passive")

    return (
        <button onClick={() => {
            setSelect(select === "passive" ? "active" : "passive")
            if (select === "passive") {
                modifyList([...list, content])

            } else {
                modifyList(list.filter(el => el !== content))
            }
        }}
            className={`${select} topic-text sel`}>{content}</button>
    )
}