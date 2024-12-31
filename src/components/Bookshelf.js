// src/components/Bookshelf.js

import React, { useContext } from "react";
import { BookshelfContext } from "../context/bookshelfcontext";

function Bookshelf() {
  const { bookshelf, removeFromBookshelf } = useContext(BookshelfContext);

  if (bookshelf.length === 0) return <p>Your bookshelf is empty!</p>;

  return (
    <div>
      <h2>Your Bookshelf</h2>
      <div className="bookshelf-grid">
        {bookshelf.map((book, index) => (
          <div key={index} className="bookshelf-item">
            <img
              src={book.imageLinks?.thumbnail}
              alt={book.title}
              className="book-thumbnail"
            />
            <h3>{book.title}</h3>
            <p>{book.authors?.join(", ") || "Unknown Author"}</p>
            <button onClick={() => removeFromBookshelf(book.title)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
