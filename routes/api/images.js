const router = require("express").Router();
const images = require("../../controllers/image");

router.route("/api/image")
    .post(images.create)
    .get(images.findById);

module.exports = router;