
const DisplayBooks = (props) => {
    console.log('Rendered DisplayBooks component');
    console.log("from DisplayBooks: ");
    console.log(props);

    return (
        <section>
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
                                        <button>Add To My Bookshelf</button>
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