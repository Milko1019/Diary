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

// /entries/api/search/entry/you

router.route("/api/search/entry/:title")
.get(entries.findByTitle);

router.route("/api/entry/:id")
.delete(entries.remove)
// /entries/api/entry/:id

// router.route("/api/image")
// .post(entries.create)
// .get(entries.findById);


module.exports = router;