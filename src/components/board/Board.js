import { useState } from "react";
import "./Board.css";

export default function Board(props) {

    const pages = {
        "1": {
            url: "images/Illustration.png",
            loc: 1,
            title: "Tittle One",
        },
        "2": {
            url: "images/Illustration 2.png",
            loc: 2,
            title: "Tittle Two",
        },
        "3": {
            url: "images/Illustration 3.png",
            loc: 3,
            title: "Tittle Three",
        }
    }

    const [page, setPage] = useState(1)
    const currPage = pages[page];

    return (
        <div>
            <img src={currPage.url} alt="background" className="img" />
            <p className="tittle">{currPage.title}</p>
            <p className="text">Lorem ipsum dolor sit amet la maryame dor sut colondeum.</p>
            <div className="nav">
                <button onClick={() => setPage(1)} className={currPage.loc === 1 ? "cur" : "loc"}></button>
                <button onClick={() => setPage(2)} className={currPage.loc === 2 ? "cur" : "loc"}></button>
                <button onClick={() => setPage(3)} className={currPage.loc === 3 ? "cur" : "loc"}></button>
            </div>
            <div className="btns" style={{ display: currPage.loc === 3 ? "none" : "flex" }}>
                <a className="skip btn-text" href="/welcome">Skip</a>
                <button onClick={(e) => setPage(page + 1)} className="next btn-text">Next</button>
            </div>
            <div className="btns" style={{ display: currPage.loc === 3 ? "flex" : "none" }}>
                <a className="start btn-text" href="/welcome">Lets Get Started</a>
            </div>
        </div>
    );
}
