const router = require('express').Router()
const trekkings=require("../controller/trekkings")

router.get("/trekkings", trekkings.getAllData)
router.get("/trekkings/:id", trekkings.getById)
router.post("/trekkings", trekkings.postData)
router.delete("/trekkings/:id", trekkings.deleteById)
router.patch("/trekkings/:id", trekkings.patchById)
router.put("/trekkings/:id", trekkings.putById)

module.exports=router


