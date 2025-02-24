const registrationModel = require("../models/registraionmodel");
const multer = require("multer");
const path = require("path");

// 이미지 업로드 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// 모든 데이터 가져오기
const getAllWebtoon = async (req, res) => {
  const data = await registrationModel.getWebtoons();
  res.render("main", { data });
};

// 등록페이지로 이동
const moveAddminPage = async (req, res) => {
  const data = await registrationModel.getWebtoons();
  res.render("registration", { data });
};
// 아이템등록페이지로 이동
const moveitemAddminPage = async (req, res) => {
  const itemdata = await registrationModel.getitems();
  const data = await registrationModel.getWebtoons();
  res.render("itemadmin", { itemdata, data });
};

// 상세페이지로 이동
const moveDetail = async (req, res) => {
  const data = await registrationModel.getOne(req.params.id);
  const itemdata = await registrationModel.getcateitem(req.params.id);
  res.render("detail", { data, itemdata });
};

// 아이템 상세페이지로 이동
const moveitemDetail = async (req, res) => {
  const itemdata = await registrationModel.getitemOne(req.params.id);
  const data = await registrationModel.getOne(itemdata[0].cateid);
  res.render("itemdetail", { data, itemdata });
};

// 장바구니 페이지로 이동
const movecartPage = async (req, res) => {
  const data = await registrationModel.getcart();
  res.render("cartpage", { data });
};

// db에 저장
const createTest = async (req, res) => {
  const { name, author, summary } = req.body;
  const mainurl = req.files.image
    ? `/uploads/${req.files.image[0].filename}`
    : null;
  const bannerurl = req.files.image2
    ? `/uploads/${req.files.image2[0].filename}`
    : null;

  await registrationModel.postData({
    name,
    author,
    summary,
    mainurl,
    bannerurl,
  });
  res.send("200");
};

// item을 db에 저장
const createitem = async (req, res) => {
  const { name, price, detail, image, types } = req.body;
  const url = req.files.image
    ? `/uploads/${req.files.image[0].filename}`
    : null;

  await registrationModel.postitemData({
    name,
    price,
    detail,
    image,
    types,
    url,
  });
  res.send("200");
};

// 해당 아이디 삭제
const deleteData = async (req, res) => {
  await registrationModel.deleteRow(req.params.id);
  res.send("200");
};

// 해당 아이디 아이템 삭제
const deleteitemData = async (req, res) => {
  await registrationModel.deleteitemRow(req.params.id);
  res.send("200");
};
// 해당 아이디 장바구니아이템 삭제
const deleteonecartData = async (req, res) => {
  await registrationModel.deleteonecartRow(req.params.id);
  res.send("200");
};

// 모든 장바구니 아이템 삭제
const deleteallcartData = async (req, res) => {
  await registrationModel.deleteallcartRow();
  res.send("200");
};

// 수정 페이지로 이동
const moveWrite = async (req, res) => {
  const data = await registrationModel.getOne(req.params.id);
  res.render("webtoonwrite", { data });
};

// 아이템 수정 페이지로 이동
const moveitemWrite = async (req, res) => {
  const data = await registrationModel.getitemOne(req.params.id);
  const webtoondata = await registrationModel.getWebtoons();
  res.render("itemwrite", { data, webtoondata });
};

// 데이터 업데이트
const dataUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, author } = req.body;

    // 현재 저장된 데이터 가져오기
    const existingData = (await registrationModel.getOne(id)) || {};

    const mainurl = req.files?.image
      ? `/uploads/${req.files.image[0].filename}`
      : existingData[0].mainurl;
    const bannerurl = req.files?.image2
      ? `/uploads/${req.files.image2[0].filename}`
      : existingData[0].bannerurl;

    await registrationModel.updateRow({
      id,
      name,
      mainurl,
      bannerurl,
      author,
    });
    res.send("200");
  } catch (error) {
    console.error("업데이트 실패:", error);
    res.status(500).send("업데이트 실패");
  }
};
// 아이템 데이터 업데이트
const itemdataUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, detail, cateid } = req.body;

    // 현재 저장된 데이터 가져오기
    const existingData = (await registrationModel.getitemOne(id)) || {};

    const url = req.files?.image
      ? `/uploads/${req.files.image[0].filename}`
      : existingData[0].url;

    await registrationModel.updateitemRow({
      name,
      price,
      detail,
      url,
      cateid,
      id,
    });
    res.send("200");
  } catch (error) {
    console.error("업데이트 실패:", error);
    res.status(500).send("업데이트 실패");
  }
};

// 장바구니 담기
const cartitem = async (req, res) => {
  // 현재 아이템데이터 가져오기
  const existingData = (await registrationModel.getitemOne(req.body.id)) || {};
  const itemid = existingData[0].id;
  const name = existingData[0].name;
  const price = existingData[0].price;
  const detail = existingData[0].detail;
  const url = existingData[0].url;

  let amount = req.body.num;

  await registrationModel.putCartItem({
    itemid,
    name,
    price,
    detail,
    url,
    amount,
  });
  res.send("200");
};

module.exports = {
  deleteonecartData,
  movecartPage,
  deleteallcartData,
  cartitem,
  getAllWebtoon,
  moveAddminPage,
  createTest,
  moveDetail,
  deleteData,
  moveWrite,
  dataUpdate,
  moveitemAddminPage,
  createitem,
  moveitemDetail,
  moveitemWrite,
  itemdataUpdate,
  deleteitemData,
  upload: upload.fields([{ name: "image" }, { name: "image2" }]),
};
