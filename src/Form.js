// importing useState hook 
import { useState } from 'react';


const Form = (props) => {
    console.log('form rendered');

    // initializing state to check when form has been changed
    const [searchValue, setSearchValue] = useState('');

    console.log(props);


    const handleChange = (event) => {
        console.log(event.target.form[0].value);
        setSearchValue(event.target.form[0].value);

    }





    return (
        <form
            action=""
            onSubmit={
                (event) => {
                    props.handleSubmit(event, searchValue)

                }
            }

        >
            <label htmlFor="userSearch">Search Books by Title:</label>

            <div className="input-and-search">
                <input
                    type="text" id="userSearch"

                    onChange={handleChange}
                    value={searchValue}
                >
                </input>

                <button >Search!</button>
            </div>

        </form>
    )
}

export default Form;