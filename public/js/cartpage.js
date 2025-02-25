document.addEventListener("DOMContentLoaded", function () {
  // 모든 버튼 가져오기
  const buttons = document.querySelectorAll(".minus");

  buttons.forEach((button) => {
    const id = button.id;
    const countElement = document.querySelector(`.amount${id}`);

    if (countElement.innerText === "1") {
      const minus = document.querySelector(`.minus${id}`);
      minus.disabled = true;
    } else {
      minus.disabled = false;
    }
  });
});

const buywrap = document.querySelector(".buywrap");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    buywrap.classList.add("fix");
  } else {
    buywrap.classList.remove("fix");
  }
});

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
    .then((res) => {
      window.location.reload();
    })
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
    console.log(amount.innerHTML);
    document.querySelector(`.minus${id}`).disabled = true;
  }

  axios({
    method: "put",
    url: "/webtoons/cartput",
    data: { id, num, originprice },
  })
    .then((res) => {
      window.location.reload();
    })
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
