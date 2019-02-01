import axios from "axios";

export default {
    // Gets all books
    getEntries: function() {
      return axios.get("/api/entries");
    },
    // Gets the book with the given id
    getEntry: function(id) {
      return axios.get("/api/entries/" + id);
    },
    // Deletes the book with the given id
    deleteEntry: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveEntry: function(entryData) {
      return axios.post("/api/entry", entryData);
    },

    getEntriesList: function() {
        return axios.get("api/entries/list");
    }

  };