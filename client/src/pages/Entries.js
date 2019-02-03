import React, {Component} from "react";
import { Input, TextArea, FormBtn } from "../components/Form/index";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";


class Entries extends Component{
    state = {
        date: Date,
        title: String,
        entry: String
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.date && this.state.entry) {
          API.saveEntry({
            title: this.state.title,
            date: this.state.date,
            entry: this.state.entry
            
          })
          .then (() => this.props.history.push("/Profile"))
            // .then(res => this.loadEntry())
            .catch(err => console.log(err));
        }
    };

    render() {
        return(
            <Container fluid>
            <br></br>
                <Row>
                    <Col size="md-2" />
                        <Col size="md-8">
                            <>
                            <br />
                                <div className="card mb-3 ">
                                    <h1>Entry</h1>
                                    <form>
                                        <Input
                                            // value={this.state.title}
                                            onChange={this.handleInputChange}
                                            name="title"
                                            placeholder="Title (optional)"
                                        />
                                        <Input
                                            // value={this.state.date}
                                            onChange={this.handleInputChange}
                                            name="date"
                                            placeholder="Date (required)"
                                        />
                                        <TextArea
                                            // value={this.state.entry}
                                            onChange={this.handleInputChange}
                                            name="entry"
                                            placeholder="What's On Your Mind (required)"
                                        />
                                        <FormBtn
                                            disabled={!(this.state.date && this.state.entry)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Submit Entry
                                        </FormBtn>
                                    </form>
                                </div>
                            </>
                        </Col>
                    <Col size="md-2" />
                </Row>
            </Container>
        )
    }
}


export default Entries;