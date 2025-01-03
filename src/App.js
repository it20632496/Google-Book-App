import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/Booklist";
import BookDetail from "./components/BookDetail";
import Bookshelf from "./components/Bookshelf";
import { BookshelfProvider } from "./context/bookshelfcontext";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <BookshelfProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<SignUp />} />
        </Routes>
      </Router>
    </BookshelfProvider>
  );
}


export default App;

