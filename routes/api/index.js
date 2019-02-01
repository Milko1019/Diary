const router = require("express").Router();
const entryRoutes = require("./entries");

// Book routes
router.use("/entries", entryRoutes);// /entries/api/entry

module.exports = router;