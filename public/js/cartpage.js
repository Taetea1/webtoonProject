const allDelete = () => {
  axios({
    method: "delete",
    url: `/webtoons/allcartitem`,
  })
    .then((res) => {
      alert("삭제 성공");
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};
