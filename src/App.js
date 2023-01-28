import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Myreads from "./Myreads";
// import SearchPage from "./SearchPageBooks";
import SearchPage from "./SearchPage";

const App = () => {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState([]);
  const settingUpBookshelf = (bookNeedToBeMoved, bookshelf) => {
    updateBooks(bookNeedToBeMoved, bookshelf);
  };

  const updateBooks = async (bookNeedToBeMoved, bookshelf) => {
    const updatedbooks = await BooksAPI.update(bookNeedToBeMoved, bookshelf);
    getBooks();
    console.log(books, "books in update fn");
  };

  const getBooks = async () => {
    const books = await BooksAPI.getAll();
    console.log(books, "in getbooks 1");
    setBooks(books, "booksssssssssssssssssss");
    console.log(books, "in getbooks 2");
    let allShelves = books.map((book) => book.shelf);
    let shelves = [];
    allShelves.forEach((shelf) => {
      if (!shelves.includes(shelf)) {
        shelves.push(shelf);
      }
    });
    setShelves(shelves);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Myreads
              books={books}
              shelves={shelves}
              settingUpBookshelf={settingUpBookshelf}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              books={books}
              settingUpBookshelf={settingUpBookshelf}
              shelves={shelves}
            />
          }
        />
      </Routes>
    </>
  );
};
export default App;
