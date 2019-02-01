import axios from "axios";

export default {
    // Gets all entries
    getEntries: function() {
      return axios.get("/entries/api/entry");
    },
    // Gets the entry with the given id
    getEntry: function(id) {
      return axios.get("/api/entries/" + id);
    },
    // Deletes the entry with the given id
    deleteEntry: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves an entry to the database
    saveEntry: function(entryData) {
      return axios.post("/entries/api/entry", entryData);
    },

    getEntriesList: function() {
        return axios.get("api/entries/list");
    }

  };