import { useParams } from "react-router-dom";
import "./Player.css";


export default function Player(props) {
    const booksData = require("./data.json")
    const params = useParams()
    const bookId = params.id.replace(":", "");
    return (
        <div className="no-background">
            <div className="player-head">
                <a href="/library">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <p className="book-play-title">{booksData[bookId].title}</p>
                <p className="menu-ellipses">...</p>
            </div>
            <div className="play-cov-cont">
                <img className="book-play-cover" src={booksData[bookId].imgUrl} alt="book cover"/>
            </div>
                <img className="book-play-background" src={booksData[bookId].imgUrl} alt="book cover"/>
            <div className="book-play-info">
                <p className="book-play-head">{booksData[bookId].title}</p>
                <p className="book-play-author">{booksData[bookId].author}</p>
            </div>
        </div>
    )
}
