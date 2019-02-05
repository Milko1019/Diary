import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import { Col, Row, Container } from "../components/Grid";

class Search extends Component{

    state = {
        search: "",
        entries: [],
        results: [],
        error: ""        
    };

    componentDidMount() {
        API.getEntriesList()
          .then(res => this.setState({ entries: res.data.message }))
          .catch(err => console.log(err));
    }
    
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
            API.getEntriesList(this.state.search)
                .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
                })
                .catch(err => this.setState({ error: err.message }));
    };
    
    render() {
        return (
            <Container fluid>
                <br></br>
                <Row>
                    <Col size="md-2" />
                        <Col size="md-8">
                        <div className="card mb-3 ">
                            
                            <h2 className="text-center">Search By Entry Name:</h2>
                                <br></br>
                                <SearchForm
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleInputChange={this.handleInputChange}
                                    entries={this.state.entries}
                                />
                                <SearchResults results={this.state.results} />
                        </div>
                        </Col>
                    <Col size="md-2" />
                </Row>
            </Container>
        );
    }

}

export default Search;