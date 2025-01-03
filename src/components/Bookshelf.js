import React, { useContext } from "react";
import { BookshelfContext } from "../context/bookshelfcontext";

function Bookshelf() {
  const { bookshelf, removeFromBookshelf } = useContext(BookshelfContext);

  if (bookshelf.length === 0) return <p>Your bookshelf is empty!</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Bookshelf</h2>
      <div className="row">
        {bookshelf.map((book, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src={book.imageLinks?.thumbnail}
                alt={book.title}
                className="card-img-top"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">
                  {book.authors?.join(", ") || "Unknown Author"}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromBookshelf(book.title)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
