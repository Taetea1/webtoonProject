const express = require("express");
const router = express.Router();
const registrationControl = require("../controllers/registrationcontroller");

router.get("/", registrationControl.getAllWebtoon);
router.get("/registration", registrationControl.moveAddminPage);
router.get("/itemadmin", registrationControl.moveitemAddminPage);
router.get("/write/:id", registrationControl.moveWrite);
router.get("/itemwrite/:id", registrationControl.moveitemWrite);
router.get("/move/detail/:id", registrationControl.moveDetail);

router.post(
  "/post/test",
  registrationControl.upload,
  registrationControl.createTest
);
router.post(
  "/post/item",
  registrationControl.upload,
  registrationControl.createitem
);

router.put(
  "/update/:id",
  registrationControl.upload,
  registrationControl.dataUpdate
);
router.put(
  "/itemupdate/:id",
  registrationControl.upload,
  registrationControl.itemdataUpdate
);

router.delete("/delete/:id", registrationControl.deleteData);
router.delete("/itemdelete/:id", registrationControl.deleteitemData);

module.exports = router;
