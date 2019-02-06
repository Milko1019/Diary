const router = require("express").Router();
const entryRoutes = require("./entries");
const userRoutes = require("./users");

// routes
router.use("/entries", entryRoutes);
router.use("/users", userRoutes);

module.exports = router;