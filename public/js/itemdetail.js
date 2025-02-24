const putcart = (id) => {
  axios({
    method: "post",
    url: "/webtoons/cartpost",
    data: { id },
  })
    .then((res) => {
      alert("장바구니에 담겼습니다.");
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};
