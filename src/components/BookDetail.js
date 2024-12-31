import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const { title, authors, description, imageLinks, averageRating } =
    book.volumeInfo;

  return (
    <div>
      <img src={imageLinks?.thumbnail} alt={title} />
      <h1>{title}</h1>
      <p>Author(s): {authors?.join(", ") || "Unknown Author"}</p>
      <p>Rating: {averageRating || "N/A"}</p>
      <p>{description}</p>
    </div>
  );
}

export default BookDetail;
