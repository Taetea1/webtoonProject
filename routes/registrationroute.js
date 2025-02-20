const express = require("express");
const router = express.Router();
const registrationControl = require("../controllers/registrationcontroller");

router.get("/registration", registrationControl.moveAddminPage);
router.get("/write/:id", registrationControl.moveWrite);

router.post(
  "/post/test",
  registrationControl.upload,
  registrationControl.createTest
);

router.put("/update", registrationControl.dataUpdate);

router.delete("/delete/:id", registrationControl.deleteData);

module.exports = router;
