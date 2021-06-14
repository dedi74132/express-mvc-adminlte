const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")

router.get("/", userController.index)
router.get("/create", userController.create)
router.post("/", userController.store)
router.get("/:id/edit", userController.edit)
router.put("/:id", userController.update)
router.get("/:id", userController.destroy)
module.exports = router
