import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Form from '../components/Form';
import API from '../utils/Api';


class Search extends Component {

    state = {
        result: [],
        search: ""
    }

    componentDidMount() {
        this.searchBook("To Kill A Mocking Bird");
    }

    searchBook = query => {

        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);

    }


    render() {
        return (
            <div className="main-container">
                <NavBar />
                <Jumbotron />

                <Container>
                    <Form
                        name={this.state.value}
                        onChange={this.handleInputChange}
                        onClick={this.handleFormSubmit}
                    />
                </Container>
            </div>

        )
    }
}

export default Search;