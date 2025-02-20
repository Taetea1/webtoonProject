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

const moveAddminPage = async (req, res) => {
  const data = await registrationModel.getWebtoons();
  res.render("registration", { data });
};

// 등록
const createTest = async (req, res) => {
  const { name, summary } = req.body;
  const mainurl = req.file ? `/uploads/${req.file.filename}` : null;

  await registrationModel.postData({ name, summary, mainurl });
  res.send("200");
};

// 해당 아이디 삭제
const deleteData = async (req, res) => {
  await registrationModel.deleteRow(req.params.id);
  res.send("200");
};

// 수정 페이지로 이동
const moveWrite = async (req, res) => {
  const data = await registrationModel.getOne(req.params.id);
  res.render("webtoonwrite", { data });
};

// 데이터 업데이트
const dataUpdate = async (req, res) => {
  await registrationModel.updateRow(req.body);
  res.send("200");
};

module.exports = {
  moveAddminPage,
  createTest,
  deleteData,
  moveWrite,
  dataUpdate,
  upload: upload.single("image"),
};
