import { Ibook } from "./book.interface";
import ShelfUpdateComponent from "./ShelfUpdateComponent";

interface Props {
    book: Ibook;
    updateShelf: Function;
}
const BookComponent = ({ book, updateShelf }: Props) => {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:book.imageLinks?`url(${book.imageLinks.thumbnail})`:`empty`,
                    }}
                ></div>
                <ShelfUpdateComponent book={book} updateShelf={updateShelf} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
    );
};
export default BookComponent;
