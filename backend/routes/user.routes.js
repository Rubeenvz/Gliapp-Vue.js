const controller = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.post("/user", controller.create);

router.get("/user", controller.retrieve);

router.put("/user", controller.update);

router.delete("/user", controller.remove);

module.exports = router;