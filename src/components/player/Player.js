import { useParams } from "react-router-dom";
import "./Player.css";

export default function Player(props) {
    const params = useParams()
    return(
        <div>
            {params.id}
        </div>
    )
}
