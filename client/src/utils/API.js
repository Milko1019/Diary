import axios from "axios";
// import { addMilliseconds } from "date-fns";

export default {

  // Gets all entries
  getEntries: function () {
    return axios.get("/entries/api/entry");
  },

  // Gets the entry with the given id
  getEntry: function (id) {
    return axios.get("/entries/api/entry/" + id);
  },

  // Deletes the entry with the given id
  deleteEntry: function (id) {
    return axios.delete("/entries/api/entry/" + id);
  },

  // Saves an entry to the database
  saveEntry: function (entryData) {
    return axios.post("/entries/api/entry", entryData);
  },

  searchEntry: function (title) {
    return axios.get("/entries/api/search/entry/" + title);
  },

  // Saves a user to the database
  saveLogin: function (entryData) {
    console.log("API Utils before axio call", entryData)
    return axios.post("/users/api/user/", entryData)
  },

  saveImage: function () {
    console.log("image save")
    return axios.post("/images/api/image/");
  },

  getImage: function () {
    console.log("image posted")
    return axios.get("/images/api/image/");
  }

};