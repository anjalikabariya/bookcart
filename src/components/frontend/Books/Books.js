import React from 'react'
import "./Books.css";

const Books = ({ bookItems, addBook }) => {
    return (
        <div className="books">
            {bookItems.map((bookItem, index) => (
                <div className="card" key={index}>
                    <div>
                        <img className="book-image" src={bookItem.image} alt={bookItem.name} />
                    </div>
                    <div>
                        <h3 className="book-name">{bookItem.name}</h3>
                    </div>
                    <div>
                        <div className="book-price">Price: {bookItem.price}</div>
                    </div>
                    <div><button className="add-to-cart" onClick={() => addBook(bookItem)}>Add to cart</button></div>
                </div>
            ))}
        </div>
    )
}

export default Books
