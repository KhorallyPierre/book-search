import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
    // this piece of state is getting defined here bc all children elements need access to it
    const [books, setBooks] = useState([])
    // the goal of the following functions are to modify the books piece of state in some way, then pass them down to other component files
    //this is an eventHandler function
    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {id: 123, title:title}
        ]
        setBooks(updatedBooks);
    };
    return <div> 
        {books.length}
        <BookCreate onCreate={createBook}/> </div>
}

export default App;