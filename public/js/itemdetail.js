const originprice = Number(
  document.querySelector(".pricebox").innerText.replace(/,/g, "")
);

const plus = () => {
  const prices = document.querySelector(".pricebox");
  const amount = document.querySelector(".amount");

  amount.innerHTML = Number(amount.innerText) + 1;
  prices.innerHTML = (Number(amount.innerText) * originprice).toLocaleString();

  document.querySelector(".minus").disabled = false;
};
const minus = () => {
  const prices = document.querySelector(".pricebox");
  const amount = document.querySelector(".amount");
  if (amount.innerText > 1) {
    amount.innerHTML = Number(amount.innerText) - 1;
    prices.innerHTML = (
      Number(amount.innerText) * originprice
    ).toLocaleString();
  }
  if (amount.innerHTML <= 1) {
    document.querySelector(".minus").disabled = true;
  }
};
const putcart = (id) => {
  let num = document.querySelector(".amount").innerText;
  // let price = document.querySelector(".pricebox").innerText.replace(/,/g, "");
  // 장바구니에 없는 것도 num 보내주기
  axios({
    method: "get",
    url: `/webtoons/getgetcart/${id}`,
  })
    .then((res) => {
      let result = res.data;
      console.log(result);
      if (result === false) {
        axios({
          method: "post",
          url: "/webtoons/cartpost",
          data: { id },
        })
          .then((res) => {
            Swal.fire({
              title: "장바구니에 담겼습니다!",
              text: "장바구니에서 확인해주세요",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        axios({
          method: "put",
          url: "/webtoons/cartput",
          data: { id, num, originprice },
        })
          .then((res) => {
            Swal.fire({
              title: "장바구니에 추가로 담겼습니다!",
              text: "장바구니에서 확인해주세요",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
