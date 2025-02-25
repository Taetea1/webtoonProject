const mysql = require("mysql2/promise");

// DB 연결
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "webtoons",
});

// 데이터 전부 가져오기
const getWebtoons = async () => {
  const query = "SELECT * FROM category";
  const [rows] = await pool.query(query);
  return rows;
};

// 아이템 데이터 전부 가져오기
const getitems = async () => {
  const query = "SELECT * FROM webtoongoods";
  const [rows] = await pool.query(query);
  return rows;
};

// 장바구니 아이템 전부 가져오기
const getcart = async () => {
  const query = "SELECT * FROM cart";
  const [rows] = await pool.query(query);
  return rows;
};
// 제목 중복 확인
const getdupletitles = async (title) => {
  const query = "SELECT * FROM category where name=?";
  const [rows] = await pool.query(query, [title]);
  return rows;
};

// 해당하는 데이터 하나만 가져오기
const getOne = async (userId) => {
  const query = `SELECT * FROM category WHERE id = ?`;
  const [rows] = await pool.query(query, [Number(userId)]);
  return rows;
};
// 해당하는 아이템 하나만 가져오기
const getitemOne = async (userId) => {
  const query = `SELECT * FROM webtoongoods WHERE id = ?`;
  const [rows] = await pool.query(query, [Number(userId)]);
  return rows;
};

// 카테고리id에 해당하는 아이템들만 가져오기
const getcateitem = async (userId) => {
  const query = `SELECT * FROM webtoongoods WHERE cateid = ?`;
  const [rows] = await pool.query(query, [Number(userId)]);
  return rows;
};
//id에 해당하는 장바구니아이템만 가져오기
const getidcart = async (userId) => {
  const query = `SELECT * FROM cart WHERE itemid = ?`;
  const [rows] = await pool.query(query, [Number(userId)]);
  return rows;
};

// 등록하기
const postData = async (data) => {
  try {
    const query =
      "INSERT INTO category (name, mainurl, bannerurl, author) VALUES (?, ?, ?, ?)";
    await pool.query(query, [
      data.name,
      data.mainurl,
      data.bannerurl,
      data.author,
    ]);
    return "데이터가 성공적으로 등록되었습니다.";
  } catch (e) {
    console.log("error", e);
    throw new Error("데이터 등록 실패");
  }
};

// 아이템 등록
const postitemData = async (data) => {
  try {
    const query =
      "INSERT INTO webtoongoods (cateid, name, price, url, detail) VALUES (?, ?, ?, ?, ?)";
    await pool.query(query, [
      data.types,
      data.name,
      data.price,
      data.url,
      data.detail,
    ]);
    return "데이터가 성공적으로 등록되었습니다.";
  } catch (e) {
    console.log("error", e);
    throw new Error("데이터 등록 실패");
  }
};

// 장바구니에 담기
const putCartItem = async (data) => {
  try {
    const query =
      "INSERT INTO cart (itemid, name, price, detail, url, amount ) VALUES (?, ?, ?, ?, ?, ?)";
    await pool.query(query, [
      data.itemid,
      data.name,
      data.price,
      data.detail,
      data.url,
      data.amount,
    ]);
    return "데이터가 성공적으로 등록되었습니다.";
  } catch (e) {
    console.log("error", e);
    throw new Error("데이터 등록 실패");
  }
};

// 해당 아이디를 가진 모든 데이터 삭제
const deleteRow = async (id) => {
  const query = `DELETE FROM category where id = ${Number(id)}`;
  try {
    await pool.query(query, [id]);
  } catch (e) {
    console.log("삭제 실패");
  }
};

// 해당 아이디를 가진 모든 아이템 삭제
const deleteitemRow = async (id) => {
  const query = `DELETE FROM webtoongoods where id = ${Number(id)}`;
  try {
    await pool.query(query, [id]);
  } catch (e) {
    console.log("삭제 실패");
  }
};

// 해당 아이디를 가진 장바구니 아이템 삭제
const deleteonecartRow = async (id) => {
  const query = `DELETE FROM cart where id = ?`;
  try {
    await pool.query(query, [id]);
  } catch (e) {
    console.log("삭제 실패");
  }
};

// 장바구니 모든 아이템 삭제
const deleteallcartRow = async () => {
  const query = "DELETE FROM cart";
  try {
    await pool.query(query);
  } catch (e) {
    console.log(e, "삭제 실패");
  }
};

// 해당 아이디를 가진 데이터 수정
const updateRow = async (data) => {
  const query = `UPDATE category SET name = ?, mainurl= ?, bannerurl= ?, author= ? where id= ?`;
  try {
    await pool.query(query, [
      data.name,
      data.mainurl,
      data.bannerurl,
      data.author,
      Number(data.id),
    ]);
  } catch (e) {
    console.log(e);
  }
};
// 해당 아이디를 가진 아이템 데이터 수정
const updateitemRow = async (data) => {
  const query = `UPDATE webtoongoods SET name = ?, price= ?, url= ?, cateid= ?, detail= ? where id= ?`;
  try {
    await pool.query(query, [
      data.name,
      data.price,
      data.url,
      data.cateid,
      data.detail,
      Number(data.id),
    ]);
  } catch (e) {
    console.log(e);
  }
};
// 해당 아이디를 가진 장바구니 데이터 수정
const updateCartItem = async (data) => {
  const query = `UPDATE cart SET name = ?, price= ?, url= ?,  detail= ?, amount= ? where itemid= ?`;
  try {
    await pool.query(query, [
      data.name,
      data.sumprice,
      data.url,
      data.detail,
      data.sumamount,
      Number(data.itemid),
    ]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getdupletitles,
  getidcart,
  updateCartItem,
  deleteonecartRow,
  putCartItem,
  deleteallcartRow,
  getcart,
  getWebtoons,
  getitems,
  getOne,
  getitemOne,
  postData,
  deleteRow,
  updateRow,
  postitemData,
  updateitemRow,
  deleteitemRow,
  getcateitem,
};
