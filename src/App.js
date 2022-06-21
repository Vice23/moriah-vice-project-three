import './App.css';
import Form from './Form.js'
import DisplayBooks from './DisplayBooks.js'
import UserBookshelf from './UserBookshelf.js'
import LoadingSpinner from './LoadingSpinner';

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [books, setBooks] = useState([]);
  const [userInput, setUserInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [upArrow, setUpArrow] = useState(false);


  // side effect to call the API
  useEffect(() => {
    if (userInput && userInput !== null && userInput !== '') {
      // put a truthy value on a loading function
      setIsLoading(true);
      setErrorMessage(null);
      setUpArrow(false);

      axios({
        baseURL: 'https://openlibrary.org/',
        url: '/search.json',
        method: 'GET',

        // API params defined
        params: {
          q: userInput,
        }
      })
        .then((jsonData) => {
          // take the data that is returned from the API and store it in state

          const allBookInfo = jsonData.data.docs;
          allBookInfo.forEach((book) => {
            if (book.cover_i) {
              book.cover_image = `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`;
            }
          })

          setBooks(allBookInfo);
          setIsLoading(false);
          setUserInput("");
          setUpArrow(true);

        })
        .catch(() => {
          setErrorMessage("No results loaded. Please try again.");
          setIsLoading(false);
        });
    }
  }, [userInput, books])

  // this event will handle the use clicking add book
  const generateUserInput = function (event, userInput) {
    // create event listener
    // prevent default refresh bahaviour
    event.preventDefault();
    setUserInput(userInput);

  }

  return (
    <div >
      < div className="main-content">
        <UserBookshelf />

        <header id="header">
          <h1 className="heading">Book Buddy <span className="book-icon">📖</span> </h1>
        </header>


        <Form className="form" handleSubmit={generateUserInput} disabled={isLoading} />

        {
          isLoading
            ? <LoadingSpinner />
            : null
        }

        {
          errorMessage
            ? <p className="error">{errorMessage}</p>
            : <DisplayBooks books={books} />
        }
        {
          upArrow
            ? <a className="upArrow" alt=" Back to Top" href='#header'>⬆️ </a>
            : null
        }
      </ div>

      <footer>
        <p>Created by Moriah at <a href="https://junocollege.com" >Juno College</a>. Book icon created by <a href="https://www.flaticon.com/free-icons/book" >mikan933 - Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
