import { Ibook } from "./book.interface";

interface Props {
    book: Ibook;
    updateShelf: Function;
}
const ShelfUpdateComponent = ({ book, updateShelf }: Props) => {
    const handleChange = (value: string) => {
        updateShelf(book, value)
    };
    return (
        <div className="book-shelf-changer">
            <select
                value={book.shelf ? book.shelf : "none"}
                onChange={(e) => handleChange(e.target.value)}
            >
                <option disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
};
export default ShelfUpdateComponent;
