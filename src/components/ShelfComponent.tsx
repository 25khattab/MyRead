import { Ibook } from "./book.interface";
import BookComponent from "./BookComponent";

interface Props {
    books: Ibook[];
    title: string;
    type:string,
    updateShelf: Function;
}
const ShelfComponent = ({ books,type, title, updateShelf }: Props) => {
    const show = books.filter((books) => books.shelf === type)
    return (
        <div>
            <div className="bookshelf" >
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid" >
                        {show.map((book) => (
                            <li key={book.id}>
                                <BookComponent 
                                    book={book}
                                    updateShelf={updateShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};
export default ShelfComponent;
