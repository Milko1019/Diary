const router = require("express").Router();
const entryRoutes = require("./entries");
const userRoutes = require("./users");

// routes
router.use("/entries", entryRoutes);// /entries/api/entry
router.use("/users", userRoutes);
//router.use(userRoutes);

module.exports = router;