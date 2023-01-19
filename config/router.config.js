const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home.controller");
const aboutController = require("../controllers/about.controller");
const worksController = require("../controllers/works.controller");

router.get("/", homeController.home);
router.get("/about", aboutController.about);
router.get("/works", worksController.works);

module.exports = router;