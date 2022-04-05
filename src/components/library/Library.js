import { useState } from "react"
import Book from "../book/Book"
import "./Library.css"

export default function Library() {

    const [searchParams,setParams] = useState("");

    const booksList = [
        {
            _id:"theBlackWitch",
            title:"The Black Witch",
            author:"Laurie Forest",
            imgUrl:"/images/books/Image Placeholder 1.png"
        },
        {
            _id:"aPromisedLand",
            title:"A Promised Land",
            author:"Barrack Obama",
            imgUrl:"/images/books/Image Placeholder 2.png"
        },
        {
            _id:"harryPotter",
            title:"Harry Potter and the Prisoner of Azkaban",
            author:"J.K. Rowling",
            imgUrl:"/images/books/Image Placeholder 3.png"
        },
        {
            _id:"theKidnapperAccomplice",
            title:"The Kidnapper's Accomplice",
            author:"C. J. Archer",
            imgUrl:"/images/books/Image Placeholder 4.png"
        },
        {
            _id:"lightMage",
            title:"Light Mage",
            author:"Author Name",
            imgUrl:"/images/books/Image Placeholder 5.png"
        },
        {
            _id:"lightMage2",
            title:"Light Mage",
            author:"Author Name",
            imgUrl:"/images/books/Image Placeholder 5.png"
        },    
    ]

    return (
        <div className="no-background">
            <div className="head-location">
                <img src="/images/Logo Small.svg" alt="bookly logo" />
                <span className="large-heading">Bookly</span>
            </div>
            <p className="heading-section">My Books</p>
            <input className="input-field gray input-pos" 
            placeholder="Search Books or Author..." 
            onInput={(ev)=>{
                const params = ev.target.value.toLowerCase().trim();
                setParams(params)
            }}/>
            <div className="books-list">
                {booksList
                .filter(el=>JSON.stringify(el).toLowerCase().includes(searchParams))
                .map(el=><Book key={el._id} _id={el._id} imgUrl={el.imgUrl} title={el.title} authorName={el.author}/>)}
            </div>
        </div>
    )
}