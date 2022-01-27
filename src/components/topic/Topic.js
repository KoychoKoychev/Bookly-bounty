import { useState } from "react"
import "./Topic.css"

export default function Topic({content,list}) {

    const [select,setSelect] = useState("passive")

    return(
        <button onClick={(ev)=>{
            setSelect(select==="passive"?"active":"passive")
            }}
        className={`${select} topic-text sel`}>{content}</button>
    )
}