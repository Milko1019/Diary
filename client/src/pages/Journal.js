import React, {Component} from "react";
import { Link } from "react-router-dom";
// import Search from "./Search";
import API from "../utils/API";
import DeleteBtn from "../components/Deletebtn";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";

class Journal extends Component{
    state={
        entries: [],
        date: Date,
        title: String,
        entry: String
    }

    componentDidMount() {
        this.loadEntries();
    }

    loadEntries = () => {
        API.getEntries()
          .then(res =>
            this.setState({ entries: res.data, date: "", title: "", entry: "" })
          )
          .catch(err => console.log(err));
    };

    deleteEntry = id => {
        console.log("Id:",id)
        API.deleteEntry(id)
          .then(res => {
            console.log("The response",res)  
            this.loadEntries()})
          .catch(err => console.log(err));
    };

    render (){
        return(
            <Container fluid>
                <br />
                    <Row>
                        <Col size="md-2" />
                        <>  
                        <Col size="md-8">
                            <div className="card mb-3">
                                <h1>Journal Entries</h1>
                                {this.state.entries.length ? (
                                    <List>
                                        {this.state.entries.map(entry => (
                                        <ListItem key={entry._id}>
                                            <Link to={"/entries/" + entry._id}>
                                            <strong>
                                                {entry.title} {entry.data} {entry.entry}
                                            </strong>
                                            </Link>
                                            <DeleteBtn onClick={() => this.deleteEntry(entry._id)} />
                                        </ListItem>
                                        ))}
                                    </List>
                                ) :
                                (<h3>No Results to Display</h3>)
                                }

                            
                                {/* <Link to={`${props.match.url}/search`} role="button" className="btn btn-link">
                                    Search for Specific Entries
                                </Link>{" "}
                                <Link to="/journal" role="button" className="btn btn-link">
                                    Look at Most Recent Entries
                                </Link>
                                <Route exact path={`${props.match.url}/search`} component={Search} /> */}
                            </div>
                            </Col>
                        </>
                        <Col size="md-2" />
                    </Row>
            </Container>
        )
    }

}

export default Journal;