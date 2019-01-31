const router = require("express").Router();
const users = require("../../controllers/users");

// Matches with "/api/users"
router.route("/")
  .post(users.create);

module.exports = router;