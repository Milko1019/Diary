import React, {Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
// import Dropzone from 'react-dropzone';
// import request from 'superagent';


class Profile extends Component{
    state ={
        selectedFile: [],
        image: []
        
    }


    fileSelectedHandler= (event) => { 
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler= (event) => {
        event.preventDefault();
            if (this.state.selectedFile) {
                API.saveImage({
                name: this.state.selectedFile,
                
                })
                .then(res => {
                    API.getImage({});
                    console.log(res);
                    this.props.history.push("/Profile");
                })
                .catch(err => console.log(err));
                // .then ((res) => this.props.history.push("/Profile"))
                
            }
    }

    


    render(){
        return(
            <Container fluid>
                <br></br>
                <Row>
                    <Col size="md-3" />
                        <Col size="md-6">
                            <div className="card mb-3" size="md-6">
                                <h1>Profile</h1>
                                <br></br>
                               <img className="profileImg" src="https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/Tips-for-Hiking-and-Camping-in-the-Snow-3.jpg" alt="camp"></img>
                               {/* <img className="profileImg" src={`data:image/png image/jpg;base64,${this.state.image}`} /> */}
                               <br></br>
                               <input
                                style={{display: `none`}}
                                type="file" 
                                onChange={this.fileSelectedHandler}
                                ref={fileInput => this.fileInput = fileInput}/>
                                <button onClick={() => this.fileInput.click()}>Pick Image File </button>
                               <button className="btn-primary mb-3" onClick={this.fileUploadHandler}> Upload</button>
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

export default Profile;