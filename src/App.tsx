import "./css/App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SearchComponent from "./components/SearchComponent";
import * as BooksApi from "./utils/BooksAPI";
import { Ibook } from "./components/book.interface";
import HomeComponent from "./components/HomeComponent";

function App() {
    const [books, setBooks] = useState(Array<Ibook>);
    const handleSelect = async (book: Ibook, bookShelf: string) => {
        if (books.includes(book)) {
            book.shelf = bookShelf;
        } else {
            books.concat(book);
            book.shelf = bookShelf;
        }
        await BooksApi.update(book, bookShelf);
        setBooks(books);
        getBooks();
    };
    const getBooks = async () => {
        const res = await BooksApi.getAll();
        setBooks(res);
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomeComponent books={books} updateShelf={handleSelect}/>
                    }
                />
                <Route
                    path="search"
                    element={
                        <SearchComponent
                            books={books}
                            handleSelect={handleSelect}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
