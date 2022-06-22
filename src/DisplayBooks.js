import firebase from './firebase.js';
import { getDatabase, push, ref } from "firebase/database";
import bookicon from './bookicon.png';

const DisplayBooks = (props) => {

    // storing a book of interest in the database ('bookshelf')
    const handleAddBook = (bookObject) => {

        alert(`You have successfully added ${bookObject.title} to your shelf`)

        const database = getDatabase(firebase);
        const dbRef= ref(database);

        push(dbRef, bookObject);
    }

    return (
        <section className="results wrapper">
            <h2>Results Below </h2>
            {
                props.books.length === 0 ? (
                    <p className="no-results">No results 📃</p>
                ) : (
                    <section className="search-results">
                        {
                            props.books.map((book) => {

                                return (
                                    <div
                                        className="book-container"
                                        key={book.key}
                                    >
                                        {
                                            (book.cover_image) ?
                                            <img className="book-cover" src={book.cover_image} alt={`Book cover for ${book.title}`} />
                                                : <img className="book-cover icon" src={bookicon} alt={`Icon of stacked books. Book cover not available for ${book.title}`} />
                                        }
                                        <h3>{book.title}</h3>

                                        {
                                            (book.author_name) ?
                                                <h5>By: {book.author_name[0]}</h5>
                                                : <h5> Author Unknown</h5>
                                        }

                                        {
                                            (book.publish_year) ?
                                                <h6>Published: {book.publish_year[0]}</h6>
                                                : <h6> Year Published Unknown</h6>
                                        }

                                        {
                                            (book.id_amazon) ?
                                                <p>
                                                    <a className="cta" href={"https://www.amazon.com/s?k=" + book.id_amazon[0]}>Find Out More</a>
                                                </p>
                                                : (book.id_librarything) ?
                                                    <p >
                                                        <a className="cta" href={"https://www.librarything.com/work/" + book.id_librarything[0]}>Find Out More</a>
                                                    </p>
                                                    : <p >
                                                        <a className="cta" href={"https://www.google.com/search?tbm=bks&q=" + book.title + " by " + book.author_name}>Find Out More</a>
                                                    </p>
                                        }
                                        < button onClick={() => { handleAddBook(book) }} > Add To My Bookshelf </button>
                                    </div>
                                )
                            })
                        }
                    </section>

                )
            }

        </section>
    )
}

export default DisplayBooks;