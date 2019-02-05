const router = require("express").Router();
const users = require("../../controllers/user");

// Matches with "/api/users"
router.route("/api/user/")
      .post(users.create); //users/api/user
       
module.exports = router;   //users/api/user/