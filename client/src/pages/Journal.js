import React, {Component} from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import API from "../utils/API";
import { List } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
import Modal from "../components/Modal"
import ListItemDetail from "../components/ListItemDetail"

class Journal extends Component{
    state={
        entries: [{}],
        date: "",
        title: String,
        entry: String,
        cdate: "",
        ctitle: String,
        centry: String,
        searchbar: true,
        show: false
    }

    componentDidMount() {
        this.loadEntries();
    }

    loadEntries = () => {
        console.log("Load Entry")
        API.getEntries()
        
          .then(res =>
            {console.log(res.data)
            this.setState({ entries: res.data,  title: "", date: "", entry: "" })}
          )
          .catch(err => console.log(err));
    };

   
    displaySearchBar=() =>{
        this.setState({searchbar:false},() => {console.log("Search bar")})
    }

    showModal = (curretEntry) => {
        console.log(curretEntry,"Show Modal");
        this.setState({ 
            show: true,
            centry: curretEntry.entry,
            ctitle:curretEntry.title,
            cdate: curretEntry.date
         });
    };
    
    hideModal = () => {
        this.setState({ show: false });
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
                                        <ListItemDetail key={entry._id}
                                                  showModal={this.showModal}
                                                   title = {entry.title}
                                                   date = {entry.date}
                                                   entry = {entry.entry}
                                                   id={entry._id}
                                                   loadEntries={this.loadEntries}>
                                           
                                        </ListItemDetail>
                                        ))}
                                    </List>
                                ) :
                                (<h3>No Results to Display</h3>)
                                }
                                {this.state.show ? <>
                                            <Modal show={this.state.show} handleClose={this.hideModal}>
                                                <p>{this.state.ctitle}</p>
                                                <p>{this.state.cdate}</p>
                                                <p>{this.state.centry}</p>
                                            </Modal> </>: 
                                <div></div>}

                                {this.state.searchbar ? 
                                <button className="btn btn-link" onClick = {this.displaySearchBar} >Search for Specific Entries</button>

                                    :
                                 <Search />}
                                
                                <Link to="/journal" role="button" className="btn btn-link">
                                    Look at Most Recent Entries
                                </Link>
                                
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