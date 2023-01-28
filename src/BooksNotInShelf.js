const BooksNotInShelf = ({ searchedBook, settingUpBookshelf }) => {
  return (
    <>
      <div className="book-shelf-changer">
        <select
          onChange={(e) => settingUpBookshelf(searchedBook, e.target.value)}
        >
          <option>add to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    </>
  );
};
export default BooksNotInShelf;
