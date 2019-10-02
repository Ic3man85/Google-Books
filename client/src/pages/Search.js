import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Form from '../components/Form';
import API from '../utils/Api';



class Search extends Component {

    state = {
        books: [],
        query: ""
    }


    // searchBooks = () => {
    //     let URL = "https://www.googleapis.com/books/v1/volumes?q=" + this.state.query;
    //     axios
    //         .get(URL)
    //         .then(res => {
    //             //console.log(res);
    //             this.setState({
    //                 books: res.data.items
    //             });
    //             console.log(this.state.books)
    //         })
    //         .catch(err => console.log(err));
    // };


    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({

            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.searchBooks(this.state.query)
            .then(res => {

                this.setState({
                    books: res.data.items
                })
                this.setState({
                    query: ""
                })
                console.log(this.state.books);
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="main-container">
                <Jumbotron />

                <Container>
                    <Form
                        value={this.value}
                        onChange={this.handleInputChange}
                        onClick={this.handleFormSubmit}
                    />
                </Container>
            </div>

        )
    }
}

export default Search;