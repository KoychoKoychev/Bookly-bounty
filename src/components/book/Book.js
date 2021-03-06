import "./Book.css"

export default function Book({ _id, imgUrl, title, authorName }) {
    return (
        <a href={`/listen:${_id}`}>
            <div className="book-cont">
                <div className="img-cont">
                    <img className="book-cover" src={imgUrl} alt="book-tumbnail" />
                </div>
                <div className="book-info">
                    <p className="book-title">{title}</p>
                    <p className="book-author">{authorName}</p>
                </div>
            </div>
        </a>
    )
}