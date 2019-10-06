import React from 'react';
// import './bookdetail.css';


function BookDetail(props) {
    return (
        <React.Fragment>
            <div className="book-details">
                <div className="heading">Results</div>
    
                <ul>
                    <li>{props.title}</li>
                    <li>{props.link}</li>
                    <li>Written by: {props.authors}</li>
                </ul>
                <button>View</button>
                <button>Save</button>
                <div className="container">
                    <div className="image">{props.image}</div>
                    <div className="description">{props.description}</div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default BookDetail;