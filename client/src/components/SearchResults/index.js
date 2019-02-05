import React from "react";
import { List, ListItem } from "../List";
import Modal from "../Modal";
import DeleteBtn from "../Deletebtn";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          {this.state.entries.length ? (
              <List>
                  {this.state.entries.map(entry => (
                  <ListItem key={entry._id}>
                      <Modal show={this.state.show} handleClose={this.hideModal}>
                          <p>{entry.title}</p>
                          <p>{entry.data}</p>
                          <p>{entry.entry}</p>
                      </Modal>
                      <button type="button btn-primary" onClick={this.showModal}>
                          <strong>
                              {entry.title} {entry.data}
                          </strong>
                      </button>
                      <DeleteBtn onClick={() => this.deleteEntry(entry._id)} />
                  </ListItem>
                  ))}
              </List>
          ) :
          (<h3>No Results to Display</h3>)
            }
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
