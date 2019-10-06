import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Form from '../components/Form';
import BookDetail from "../components/BookDetails";
import API from '../utils/Api';



class Search extends Component {

    state = {
        books: [],
        query: ""
    }


    handleInputChange = event => {
        this.setState({

            query: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.searchBooks(this.state.query)
            .then(response => {
                this.setState({
                    books: response,
                    query: ""
                })
                // console.log(this.state.books)
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="main-container">
                <Jumbotron />

                <Container>
                    <Form
                        inputValue={this.state.query}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </Container>
                <Container>

                    {this.state.books.map((book,index) => (
                        <BookDetail
                            key={index}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            link={book.volumeInfo.previewLink}
                            image={book.thumbnail}
                            description={book.textSnippet}
                        />
                    )
                    )}
                </Container>
            </div>

        )
    }
}

export default Search;