import React from "react";
import { Input } from "../components/Form/index";
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
    return (
        <>
            <Container fluid>
                <br></br>
                <Row>
                    <Col size="md-2" />
                    <Col size="md-8">
                        <>
                            <br />
                            <div className="card mb-3 ">
                                <h1>How are you today?</h1>
                                <form>
                                    <Input
                                        name="mood"
                                        //value={this.state.email}
                                        // onChange={this.handleChange}
                                        placeholder="Mood"
                                    />
                                    {/* <Input
                                        <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                        </div>
                                    /> */}
                            {/* <FormBtn
                                disabled={!(this.state.email && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >
                                Login
                             </FormBtn> */}
                                </form>
                            </div>
                        </>
                    </Col>
                    <Col size="md-2" />
                </Row>
            </Container>
        </>
    )
}

export default Home;