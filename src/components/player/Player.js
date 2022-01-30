import { useParams } from "react-router-dom";
import "./Player.css";
import Playcomp from "./parts/Playcomp";
import Pause from "./parts/Pause";
import Bar from "./parts/Bar";
import useAudioPlayer from './parts/usePlayer';
import { useEffect } from "react";


export default function Player(props) {
    const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
    const booksData = require("./data.json")
    const params = useParams()
    const bookId = params.id.replace(":", "");

    useEffect(()=>{
        if(curTime===duration){
            setPlaying(false)
        }
    })

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
                <img className="book-play-cover" src={booksData[bookId].imgUrl} alt="book cover" />
            </div>
            <img className="book-play-background" src={booksData[bookId].imgUrl} alt="book cover" />
            <div className="book-play-info">
                <p className="book-play-head">{booksData[bookId].title}</p>
                <p className="book-play-author">{booksData[bookId].author}</p>
            </div>
            <div className="player-ctrl">
                <audio id="audio">
                    <source src={booksData[bookId].audioUrl} type="audio/mp3" />
                    Your browser does not support the audio tag.
                </audio>
                <div className="controls">
                    <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)} />
                    {playing ?
                        <Pause handleClick={() => setPlaying(false)} /> :
                        <Playcomp handleClick={() => setPlaying(true)} />
                    }
                </div>
            </div>
        </div>
    )
}
