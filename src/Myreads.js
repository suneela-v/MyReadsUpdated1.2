import { useState } from "react";
const some = <p>some</p>;
const Myreads = ({ books, shelves, settingUpBookshelf }) => {
  console.log(books, shelves);
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {shelves?.map((shelf) => {
          return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books
                        ?.filter((book) => book.shelf === shelf)
                        ?.map((book) => (
                          <li>
                            <div className="book">
                              <div className="book-top">
                                <div
                                  className="book-cover"
                                  style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                                  }}
                                ></div>
                                <div className="book-shelf-changer">
                                  <select
                                    onChange={(e) =>
                                      settingUpBookshelf(book, e.target.value)
                                    }
                                    defaultValue={book.shelf}
                                  >
                                    <option value="none" disabled>
                                      Move to...
                                    </option>
                                    <option
                                      value="currentlyReading"
                                      className={`${
                                        book.shelf === "currentlyReading"
                                          ? "optioncolorGreen"
                                          : "optioncolorBlack"
                                      }`}
                                    >
                                      Currently Reading
                                    </option>
                                    <option
                                      value="wantToRead"
                                      className={`${
                                        book.shelf === "wantToRead"
                                          ? "optioncolorGreen"
                                          : "optioncolorBlack"
                                      }`}
                                    >
                                      Want to Read
                                    </option>
                                    <option
                                      value="read"
                                      className={`${
                                        book.shelf === "read"
                                          ? "optioncolorGreen"
                                          : "optioncolorBlack"
                                      }`}
                                    >
                                      Read
                                    </option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book?.title}</div>
                              <div className="book-authors">
                                {book?.authors?.[0]}
                              </div>
                            </div>
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Myreads;
