import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BookshelfContext } from "../context/bookshelfcontext";

function BookList() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("bestsellers");
  const { addToBookshelf } = useContext(BookshelfContext); // Access addToBookshelf function

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => setBooks(response.data.items || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
            <button onClick={() => addToBookshelf(book.volumeInfo)}>
              Add to Bookshelf
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
