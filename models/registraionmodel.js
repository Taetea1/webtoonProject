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

// 해당하는 데이터 하나만 가져오기
const getOne = async (userId) => {
  const query = `SELECT * FROM category WHERE id = ?`;
  const [rows] = await pool.query(query, [Number(userId)]);
  return rows;
};

// 등록하기
const postData = async (data) => {
  try {
    const query =
      "INSERT INTO category (name, summary, mainurl, bannerurl, author) VALUES (?, ?, ?, ?, ?)";
    await pool.query(query, [
      data.name,
      data.summary,
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

// 해당 아이디를 가진 모든 데이터 삭제
const deleteRow = async (id) => {
  const query = `DELETE FROM category where id = ${Number(id)}`;
  try {
    await pool.query(query, [id]);
  } catch (e) {
    console.log("삭제 실패");
  }
};

// 해당 아이디를 가진 데이터 수정
const updateRow = async (data) => {
  const query = `UPDATE category SET name = ?, summary= ?, mainurl= ?, bannerurl= ?, author= ? where id= ?`;
  try {
    await pool.query(query, [
      data.name,
      data.summary,
      data.mainurl,
      data.bannerurl,
      data.author,
      Number(data.id),
    ]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getWebtoons,
  getOne,
  postData,
  deleteRow,
  updateRow,
};
