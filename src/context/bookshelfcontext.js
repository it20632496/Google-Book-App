
import React, { createContext, useState } from "react";

export const BookshelfContext = createContext();

export const BookshelfProvider = ({ children }) => {
  const [bookshelf, setBookshelf] = useState([]);

  const addToBookshelf = (book) => {
    setBookshelf((prev) => [...prev, book]);
  };

  const removeFromBookshelf = (bookTitle) => {
    setBookshelf((prev) => prev.filter((book) => book.title !== bookTitle));
  };

  return (
    <BookshelfContext.Provider value={{ bookshelf, addToBookshelf, removeFromBookshelf }}>
      {children}
    </BookshelfContext.Provider>
  );
};

