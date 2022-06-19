import firebase from './firebase.js';
import { getDatabase, onValue, remove, ref } from "firebase/database";

import { useState, useEffect } from 'react';


const UserBookshelf = () => {

    // initialize the stateful variable
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            const data = response.val();
            console.log(data);

            const newState = [];

            for (const key in data) {
                newState.push(
                    {
                        key: key,
                        bookObject: data[key]
                    }
                );
            };

            setBooks(newState);
            console.log(newState);
        })
    }, []);

    const handleRemoveBook = (bookKey) => {
        console.log(bookKey);

        const database = getDatabase(firebase);

        // best practice: use that / to tell the database to go there, but it's not always needed - just use it in case
        const dbRef = ref(database, `/${bookKey}`);

        remove(dbRef);
    }

    return(
        <aside>
            <h2>My Bookshelf</h2>
            {
                books.map( (book) => {
                    return(
                        <li key={book.key}>
                            <p>{book.bookObject.title}</p>
                            <button onClick={() => { handleRemoveBook(book.key) }}>Remove</button>
                        </li>
                    )
                    
                })



            }

        
        

        </aside>
    )
}

export default UserBookshelf;