import { Link } from "react-router-dom";
import { Ibook } from "./book.interface";
import ShelfComponent from "./ShelfComponent";
interface Props {
    books: Ibook[];
    updateShelf: Function;
}
const HomeComponent = ({ books, updateShelf }: Props) => {
    const ShelfType = [
        { title: "Currently Reading", type: "currentlyReading" },
        { title: "Want to Read", type: "wantToRead" },
        { title: "Read", type: "read" },
    ];
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {ShelfType.map((shelf) => (
                <div className="list-books-content" key={shelf.type}>
                    <ShelfComponent
                        books={books}
                        title={shelf.title}
                        type={shelf.type}
                        updateShelf={updateShelf}
                    />
                </div>
            ))}
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
};
export default HomeComponent;
