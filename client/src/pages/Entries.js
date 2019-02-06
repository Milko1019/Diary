import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../components/Form/index";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import DatePicker from "../components/DatePicker"


class Entries extends Component {
    state = {
        startDate: "",
        date: "YYYY-MM-DD",
        title: String,
        entry: String
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleDateChange = event => {
            const pickedDate = event.path.to.value;
            this.setState({
                pickedDate}
                );
    };
     
    //   handleChange(date, event) {
    //     const pickedDate = event.path.to.value;
    //     this.setState({
    //       startDate: date,
    //       pickedDate
    //     });
    //   }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.date && this.state.entry) {
            API.saveEntry({
                title: this.state.title,
                date: this.state.date,
                entry: this.state.entry
            })
                .then(() => this.props.history.push("/Profile"))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
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
                                        onChange={this.handleInputChange}
                                        name="title"
                                        placeholder="Title (optional)"
                                    />
                                    <DatePicker 
                                            // onChange={this.handleDateChange}
                                            onChange={this.handleInputChange}
                                            name="date"
                                            placeholder="Date (required)"
                                    />
                                    {/* <Input

                                        selected={this.state.startDate}
                                        // onChange={this}
                                        // dateFormat="yyyy/MM/dd"
                                        onChange={this.handleInputChange}
                                        name="date"
                                        placeholder="Date (required)"
                                    /> */}
                                    <TextArea
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