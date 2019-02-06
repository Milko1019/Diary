import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import { Col, Row, Container } from "../components/Grid";
import Display from "../components/Display";

class Search extends Component{

    state = {
        search: "",
        entries: [],
        results: [],
        error: ""        
    };

    // componentDidMount() {
    //     API.getEntries()
    //       .then(res => this.setState({ entries: res.data.message }))
    //       .catch(err => console.log(err));
    // }
    
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
            API.searchEntry(this.state.search)
                .then(res => {
                    console.log("The result from api",res);
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data, error: "" },()=>{
                    console.log("The state from api",this.state.results);
                });
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
                               {this.state.results.map((entry)=> (
                                  <Display 
                                     title = {entry.title} 
                                     date = {entry.date}
                                     key ={entry._id}>
                                     </Display>
                               ))}
                        </div>
                        </Col>
                    <Col size="md-2" />
                </Row>
            </Container>
        );
    }

}

export default Search;