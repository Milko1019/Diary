import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";


class Login extends Component {
    state = {
        email: String,
        password: String

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email.length > 0 && this.state.password.length > 0) {
            console.log("before api call",this.state.email,this.state.password)
            API.saveLogin({
                email: this.state.email,
                password: this.state.password
            
            })
                .then(() => {
                    console.log("API",this.state.email + this.state.password)
                    this.props.history.push("/profile")
                })
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
                                <h1>Login</h1>
                                <form>
                                    <Input
                                         name="email"
                                        //value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder="Email (required)"
                                    />
                                    <Input
                                       // value={this.state.password}
                                        onChange={this.handleChange}
                                         name="password"
                                        placeholder="Password (required)"
                                    />
                                    <FormBtn
                                        disabled={!(this.state.email && this.state.password)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Login
                                     </FormBtn>
                                </form>
                            </div>
                        </>
                    </Col>
                    <Col size="md-2" />
                </Row>
            </Container>
        );
    }
}

export default Login;
