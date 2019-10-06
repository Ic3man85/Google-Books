import React from 'react';
import './form.css';


function Form(props) {
    return (
        <form>
            <h1 className="search-heading">Book Search</h1>

            <input
                type="text"
                value={props.inputValue}
                onChange={props.handleInputChange}
                className="search-input"
                placeholder="Search for a book"
            />
            <button type="submit" className="search-btn" onClick={props.handleFormSubmit}>
                Search
            </button>
        </form>
    );
}

export default Form;