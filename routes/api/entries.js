const router = require("express").Router();
const entries = require("../../controllers/entry");


// Matches with "/api/entries" // user input
router.route("/")
  ;

// Matches with "/api/entries/:id"
router
  .route("/:id")
  .get(entries.findById)
  .put(entries.update);


router.route("/api/entry")
  .post(entries.create)
  .get(entries.findAll);


router.route("/api/search/entry/:title")
  .get(entries.findByTitle);


router.route("/api/entry/:id")
  .delete(entries.remove)



module.exports = router;