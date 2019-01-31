const router = require("express").Router();
const entryRoutes = require("./entries");

// Book routes
router.use("/entries", entryRoutes);

module.exports = router;