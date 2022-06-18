
const DisplayBooks = (props) => {
    console.log('Rendered DisplayBooks component');
    console.log(props.books);

    return (
        <section>
            <h2>Your Results! </h2>
            {

                props.books.length === 0 ? (
                    <h2>Sorry, no results 🥺 </h2>
                ) : (
                    <div className="search-results">
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
                                                <h4>By: {book.author_name[0]}</h4>
                                                : <h4> Author Unknown</h4>
                                        }

                                        {
                                            (book.publish_year) ?
                                                <h4>Published: {book.publish_year[0]}</h4>
                                                : <h4> Year Published Unknown</h4>
                                        }

                                        {
                                            (book.id_amazon) ?
                                                <h4>
                                                    <a href={"https://www.amazon.com/s?k=" + book.id_amazon[0]}>Find Out More</a>
                                                </h4>
                                                : (book.id_librarything) ?
                                                    <h4>
                                                        <a href={"https://www.librarything.com/work/" + book.id_librarything[0]}>Find Out More</a>
                                                    </h4>
                                                    : (book.id_goodreads) ?
                                                        <h4>
                                                            <a href={"https://www.librarything.com/work/" + book.id_goodreads[0]}>Find Out More</a>
                                                        </h4>
                                                        : <h4>
                                                            <a href={"https://www.google.com/search?tbm=bks&q=" + book.title + " by " + book.author_name}>Find Out More</a>
                                                        </h4>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                )
            }

        </section>
    )
}

export default DisplayBooks;