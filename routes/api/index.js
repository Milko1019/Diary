const router = require("express").Router();
const entryRoutes = require("./entries");
const userRoutes = require("./users");

// routes
router.use("/entries", entryRoutes);// /entries
router.use("/users", userRoutes);
//router.use(userRoutes); // /users/

module.exports = router;