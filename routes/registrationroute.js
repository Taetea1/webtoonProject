const express = require("express");
const router = express.Router();
const registrationControl = require("../controllers/registrationcontroller");
const upload = require("../middlewares/upload");

router.get("/", registrationControl.getAllWebtoon);
router.get("/registration", registrationControl.moveAddminPage);
router.get("/itemadmin", registrationControl.moveitemAddminPage);
router.get("/write/:id", registrationControl.moveWrite);
router.get("/itemwrite/:id", registrationControl.moveitemWrite);
router.get("/move/detail/:id", registrationControl.moveDetail);
router.get("/move/itemdetail/:id", registrationControl.moveitemDetail);
router.get("/cartpage", registrationControl.movecartPage);
router.get("/getgetcart/:id", registrationControl.getcartData);
router.get("/duplecheck", registrationControl.getdupletitle);

router.post(
  "/post/test",
  upload.fields([{ name: "image" }, { name: "image2" }]),
  registrationControl.createTest
);
router.post(
  "/post/item",
  upload.fields([{ name: "image" }, { name: "image2" }]),
  registrationControl.createitem
);
router.post(
  "/cartpost",
  upload.fields([{ name: "image" }, { name: "image2" }]),
  registrationControl.cartitem
);

router.put(
  "/update/:id",
  upload.fields([{ name: "image" }, { name: "image2" }]),
  registrationControl.dataUpdate
);
router.put(
  "/cartput",
  upload.fields([{ name: "image" }, { name: "image2" }]),
  registrationControl.cartupdate
);
router.put(
  "/itemupdate/:id",
  upload.fields([{ name: "image" }, { name: "image2" }]),
  registrationControl.itemdataUpdate
);

router.delete("/delete/:id", registrationControl.deleteData);
router.delete("/itemdelete/:id", registrationControl.deleteitemData);
router.delete("/allcartitem", registrationControl.deleteallcartData);
router.delete("/onecartitem/:id", registrationControl.deleteonecartData);

module.exports = router;
