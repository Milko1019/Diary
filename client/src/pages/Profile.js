import React, {Component} from "react";
import { Col, Row, Container } from "../components/Grid";

class Profile extends Component{

    render(){
        return(
            <Container fluid>
                <br></br>
                <Row>
                    <Col size="md-3" />
                        <Col size="md-6">
                            <div className="card mb-3" size="md-6">
                                <h1>Profile</h1>
                                
                            </div>
                            <div className="profilebtn">
                                <a href="/entry" className="btn btn-secondary btn-lg active " role="button" aria-pressed="true">Entry</a>
                                <a href="/journal" className="btn btn-secondary btn-lg active " role="button" aria-pressed="true">Journal</a>
                                <a href="/journal/search" className="btn btn-secondary btn-lg active " role="button" aria-pressed="true">Search</a>
                            </div>
                        </Col>
                    <Col size="md-3" />
                </Row>
            </Container>
    )}
}

// const Profile = () => {
//     return(
//         <>
//         <br />
//             <div className="card mb-3" size="md-6">
//                 <h1>Profile</h1>
//             </div>
//             <div className="profilebtn">
//             <a href="/entry" className="btn btn-secondary btn-lg active " role="button" aria-pressed="true">Entry</a>
//             <a href="/journal" className="btn btn-secondary btn-lg active " role="button" aria-pressed="true">Journal</a>
//             <a href="/search" className="btn btn-secondary btn-lg active " role="button" aria-pressed="true">Search</a>
//             </div>
//         </>    
//     )
// }

export default Profile;