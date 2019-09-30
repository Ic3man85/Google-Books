import React from 'react';
import './form.css';


const Form = (props) => {
    return (
        <form>
            <h1 className="search-heading">Book Search</h1>

            <input
                type="text"
                name="Search"
                value={props.query}
                onChange={props.handleInput}
                className="search-input"
                placeholder="Search for a book"
            />
            <button type="submit" className="search-btn" onClick={props.handleSubmitForm}>
                Search
            </button>
        </form>
    );
}

export default Form;