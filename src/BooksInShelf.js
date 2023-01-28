const BooksInShelf = ({ searchedBook, settingUpBookshelf, books }) => {
  let searchedBookShelf = books.find(
    (book) => book.title === searchedBook.title
  ).shelf;

  console.log(searchedBookShelf, "searchedBookShelf");
  return (
    <>
      <div className="book-shelf-changer">
        <select
          onChange={(e) => settingUpBookshelf(searchedBook, e.target.value)}
          defaultValue={searchedBookShelf}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option
            value="currentlyReading"
            id="currentlyReading"
            className={`${
              searchedBookShelf === "currentlyReading"
                ? "optioncolorGreen"
                : "optioncolorBlack"
            }`}
          >
            Currently Reading
          </option>
          <option
            value="wantToRead"
            id="wantToRead"
            className={`${
              searchedBookShelf === "wantToRead"
                ? "optioncolorGreen"
                : "optioncolorBlack"
            }`}
          >
            Want to Read
          </option>
          <option
            value="read"
            id="read"
            className={`${
              searchedBookShelf === "read"
                ? "optioncolorGreen"
                : "optioncolorBlack"
            }`}
          >
            Read
          </option>
          <option value="none">None</option>
        </select>
      </div>
    </>
  );
};
export default BooksInShelf;

// $(function () {
//   var temp = "a";
//   $("#MySelect").val(temp);
// });
