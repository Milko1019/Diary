const router = require("express").Router();
const entries = require("../../controllers/entry");

// Matches with "/api/entries"
router.route("/")
  .get(entries.findAll)
 ;

  // Matches with "/api/entries/:id"
router
.route("/:id")
.get(entries.findById)
.put(entries.update)
.delete(entries.remove);

router.route("/api/entry")
.post(entries.create);

module.exports = router;