const plus = (id) => {
  const prices = document.querySelector(`.pricebox${id}`);
  const amount = document.querySelector(`.amount${id}`);
  num = 1;
  const originprice =
    Number(
      document.querySelector(`.pricebox${id}`).innerText.replace(/,/g, "")
    ) / Number(amount.innerText);

  amount.innerHTML = Number(amount.innerText) + 1;
  prices.innerHTML = (Number(amount.innerText) * originprice).toLocaleString();

  document.querySelector(`.minus${id}`).disabled = false;

  axios({
    method: "put",
    url: "/webtoons/cartput",
    data: { id, num, originprice },
  })
    .then((res) => {})
    .catch((e) => {
      console.log(e);
    });
};
const minus = (id) => {
  const prices = document.querySelector(`.pricebox${id}`);
  const amount = document.querySelector(`.amount${id}`);
  num = -1;
  const originprice =
    Number(
      document.querySelector(`.pricebox${id}`).innerText.replace(/,/g, "")
    ) / Number(amount.innerText);

  if (amount.innerText > 1) {
    amount.innerHTML = Number(amount.innerText) - 1;
    prices.innerHTML = (
      Number(amount.innerText) * originprice
    ).toLocaleString();
  }
  if (amount.innerHTML <= 1) {
    document.querySelector(`.minus${id}`).disabled = true;
  }

  axios({
    method: "put",
    url: "/webtoons/cartput",
    data: { id, num, originprice },
  })
    .then((res) => {})
    .catch((e) => {
      console.log(e);
    });
};

const allDelete = () => {
  axios({
    method: "delete",
    url: `/webtoons/allcartitem`,
  })
    .then((res) => {
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};

const deleteone = (id) => {
  axios({
    method: "delete",
    url: `/webtoons/onecartitem/${id}`,
  })
    .then((res) => {
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};
