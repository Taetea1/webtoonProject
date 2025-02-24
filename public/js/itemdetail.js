const putcart = (id) => {
  let num = document.querySelector(".amount").innerText;
  console.log(num);
  axios({
    method: "post",
    url: "/webtoons/cartpost",
    data: { id, num },
  })
    .then((res) => {
      alert("장바구니에 담겼습니다.");
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};

const plus = () => {
  const amount = document.querySelector(".amount");
  amount.innerHTML = Number(amount.innerText) + 1;
  document.querySelector(".minus").disabled = false;
};
const minus = () => {
  const amount = document.querySelector(".amount");
  if (amount.innerText > 1) {
    amount.innerHTML = Number(amount.innerText) - 1;
  }
  if (amount.innerHTML <= 1) {
    document.querySelector(".minus").disabled = true;
  }
};
