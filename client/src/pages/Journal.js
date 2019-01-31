import React from "react";
import { Link, Route } from "react-router-dom";
import Search from "./Search";
// import { List, ListItem } from "../components/List";





function Journal(props) {
    return(
        <>  
        <br />
            <div className="card mb-3">
            <h1>Journal</h1>
            <p>
                Journal
            </p>
            
            <Link to={`${props.match.url}/search`} role="button" className="btn btn-link">
                Search for Specific Entries
            </Link>{" "}
            <Link to="/journal" role="button" className="btn btn-link">
                Look at Most Recent Entries
            </Link>
            <Route exact path={`${props.match.url}/search`} component={Search} />
           </div>
        </>
    )
}

export default Journal;