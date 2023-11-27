const express = require("express");
const {handledeleteuserbyid,handlegetuser,handleupdateuserbyid,handlepost,handlegetbyid} = require("../controler/index");
const router = express.Router();

router.route("/").get(handlegetuser).post(handlepost);
router.route("/:id")
.get(handlegetbyid)
.patch(handleupdateuserbyid)
.delete(handledeleteuserbyid);

module.exports = router;





