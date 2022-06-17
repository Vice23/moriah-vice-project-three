import './App.css';
import Form from './Form.js'
import DisplayBooks from './DisplayBooks.js'

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  console.log('App rendered');

  const [books, setBooks] = useState([]);

  // piece of state to represent user input
  const [userInput, setUserInput] = useState(null);


  // side effect to call the API
  useEffect(() => {
    if (userInput) {
    axios({
      baseURL: 'http://openlibrary.org/',
      url: '/search.json',
      method: 'GET',

      // API params defined
      params: {
        q: userInput,
      }
    })
      .then((jsonData) => {

        // take the data that is returned from the API and store it in state
        setBooks(jsonData.data.docs);
        console.log(books);
      })
    }
  }, [userInput])

  // defining the function that will be passed as props to the Form 
  // when the function is called - by Form -- it will update state


  // this event will handle the use clicking add book
  const generateUserInput = (event, userInput) => {
    // create event listener
    // prevent default refresh bahaviour from
    event.preventDefault();

    console.log("user input:", userInput);
    setUserInput(userInput);
  }

  return (
    <div className="App">
      <h1>Book Buddy 📚</h1>

      <Form handleSubmit={generateUserInput} />
      <DisplayBooks />


    </div>
  );
}

export default App;
