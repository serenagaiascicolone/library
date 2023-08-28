const express = require("express");

const router = express.Router();
const bookController = require("../controller/book");
const { checkAuth } = require('../middleware/checkAuth');

router.get("/", bookController.getbooks);
router.get("/:id", bookController.getbook);

// router.post("/", bookController.addbook);

router.post("/", checkAuth, bookController.addbook);

router.put("/:id", checkAuth, bookController.editbook);
router.patch("/:id", checkAuth, bookController.editbook);
// router.patch("/:id", bookController.editbook);

router.delete("/:id", checkAuth, bookController.deletebook);
// router.delete("/:id", bookController.deletebook);

module.exports = router;