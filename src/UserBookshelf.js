import firebase from './firebase.js';
import { getDatabase, onValue, remove, ref } from "firebase/database";
import bookicon from './bookicon.png';
import { useState, useEffect } from 'react';


const UserBookshelf = () => {

    // initialize the stateful variables
    const [books, setBooks] = useState([]);
    const [isDisplayed, setIsDisplayed] = useState(false);

    const handleClick = () => {
        setIsDisplayed(!isDisplayed);
    }

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

        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${bookKey}`);

        remove(dbRef);
    }

    return (
        <aside className="bookshelf">
            <button
                className="bookshelf-btn"
                onClick={handleClick}
            >
                {
                    isDisplayed 
                        ? 'Hide Bookshelf'
                        : 'My Bookshelf'
                }

            </button>

            {
                isDisplayed
            
                ? <ul className="bookshelf-list">

                    {
                        books.map((book) => {
                            return (
                                <li
                                    className="bookshelf-item"
                                    key={book.key}
                                >
                                    {
                                        (book.bookObject.cover_image) ?
                                            <img className="book-cover" src={book.bookObject.cover_image} alt={`Book cover for ${book.title}`} />
                                            : <img className="book-cover icon" src={bookicon} alt={`Icon of stacked books. Book cover not available for ${book.bookObject.title}`} />
                                    }

                                    <h3>{book.bookObject.title}</h3>
                                    {
                                        (book.bookObject.author_name) ?
                                            <h4>By: {book.bookObject.author_name[0]}</h4>
                                            : <h4> Author Unknown</h4>
                                    }

                                    {
                                        (book.bookObject.publish_year) ?
                                            <h5>Published: {book.bookObject.publish_year[0]}</h5>
                                            : <h5> Year Published Unknown</h5>
                                    }

                                    {
                                        (book.bookObject.id_amazon) ?
                                            <p>
                                                <a className="cta-bookshelf" href={"https://www.amazon.com/s?k=" + book.bookObject.id_amazon[0]}>Find Out More</a>
                                            </p>
                                            : (book.bookObject.id_librarything) ?
                                                <p >
                                                    <a className="cta-bookshelf" href={"https://www.librarything.com/work/" + book.bookObject.id_librarything[0]}>Find Out More</a>
                                                </p>
                                                : 
                                                <p >
                                                    <a className="cta-bookshelf" href={"https://www.google.com/search?tbm=bks&q=" + book.bookObject.title + " by " + book.bookObject.author_name}>Find Out More</a>
                                                </p>
                                    }
                                    <button className="remove-btn" onClick={() => { handleRemoveBook(book.key) }}>Remove</button>
                                </li>
                            )

                        })
                    }
                </ul>
                : null
            }

        </aside>
    )
}

export default UserBookshelf;