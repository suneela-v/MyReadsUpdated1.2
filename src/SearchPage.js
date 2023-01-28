import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

import BooksInShelf from "./BooksInShelf";
import BooksNotInShelf from "./BooksNotInShelf";
import { Link } from "react-router-dom";

const SearchPage = ({ books, settingUpBookshelf, shelves }) => {
  const [showSearchPage, setShowSearchpage] = useState(true);
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  let bookTitles = books.map((book) => book.title);

  const handleChange = (e) => {
    setQuery(e.target.value);
    searchForBooks(query);
  };
  const searchForBooks = async (query) => {
    let searchquery = query;
    const searchResult = await BooksAPI.search(searchquery);
    setSearchedBooks(searchResult);
    let titles = books.map((book) => book.title);
    console.log(titles, "  titles");
  };

  console.log(books, "books");
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            {" "}
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              name="query"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks?.map((searchedBook) => {
              return (
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${searchedBook?.imageLinks.smallThumbnail})`,
                        }}
                      ></div>

                      {bookTitles.includes(searchedBook.title) ? (
                        <BooksInShelf
                          searchedBook={searchedBook}
                          settingUpBookshelf={settingUpBookshelf}
                          books={books}
                        />
                      ) : (
                        <BooksNotInShelf
                          searchedBook={searchedBook}
                          settingUpBookshelf={settingUpBookshelf}
                        />
                      )}
                    </div>
                    <div className="book-title">{searchedBook?.title}</div>
                    <div className="book-authors">
                      {searchedBook?.authors?.[0]}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default SearchPage;
