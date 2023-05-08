import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    // this piece of state is getting defined here bc all children elements need access to it
    const [books, setBooks] = useState([])
    // the goal of the following functions are to modify the books piece of state in some way, then pass them down to other component files
    //this is an eventHandler function
    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title: title }
        ]
        setBooks(updatedBooks);

    };
    return (
        <div className="app">
            <BookList books={books}/>
            <BookCreate onCreate={createBook} /> 
        </div>
    )
}

export default App;