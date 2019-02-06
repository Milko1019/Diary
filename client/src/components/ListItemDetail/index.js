import React, { Component } from "react";
import DeleteBtn from "../Deletebtn";
import API from "../../utils/API";


class ListItemDetail extends Component{ 
    state = {
        id : this.props.id || ""
    }

    passListDetails =() =>{
        var itemEntry = {
            title: this.props.tile,
            date: this.props.date,
            entry: this.props.entry,
            id: this.props.id,
        }
        this.props.showModal(itemEntry)
    
    };

    deleteEntry = id => {
        console.log("Id:",id,this.props.id,"entry",this.props.entry)
        API.deleteEntry(id) 
            // .then (() => this.props.history.push("/Journal"))
            .then(res => this.props.loadEntries())
            .catch(err => console.log(err));
            console.log("The response") 
    };


    render(){
       return(<div >
        <strong> 
           <li className="list-group-item" onClick={this.passListDetails}> {this.props.title} {this.props.date} 
           <DeleteBtn onClick={() => this.deleteEntry(this.state.id)} />
           </li>
        </strong>
        
       </div> )
    }

}

export default ListItemDetail;