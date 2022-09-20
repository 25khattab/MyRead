import { useState } from "react";
import * as bookApi from "../utils/BooksAPI";
import { Link } from "react-router-dom";
import { Ibook } from "./book.interface";
import BookComponent from "./BookComponent";

interface Props {
    books: Array<Ibook>;
    handleSelect: Function;
}
const SearchComponent = ({ books, handleSelect }: Props) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Ibook[]>();
    const handleQuery = (query:string) => {
        setQuery(query)
        bookApi.search(query,40).then((result) => {
            
                console.log(result)
            
          setResults(result)
        })
      }
    const ShowResults = results && results.length > 0 && results.map((result) => {
        books.map((book) => {
          if (book.id === result.id) {
            result.shelf = book.shelf
          }
          return book
        })
        return result
      })
    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={query}
                            onChange={(e) => handleQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {ShowResults&&ShowResults.length>0&&ShowResults.map((book) => (
                            <li key={book.id}>
                                <BookComponent
                                    book={book}
                                    updateShelf={handleSelect}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};
export default SearchComponent;
