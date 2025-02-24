let isbincheck = [0, 0, 0, 0];

const binImg = () => {
  const form = document.forms["mainForm"];
  const filenamee = document.querySelector(`.filenamee`);
  const imgpreview = document.getElementById(`select-img`);
  const fReader = new FileReader();

  filenamee.innerHTML = `<div>${form.image.files[0].name}</div>`;
  fReader.readAsDataURL(form.image.files[0]);

  fReader.onloadend = (event) => {
    const path = event.target.result;
    imgpreview.innerHTML = `<div class="preimgbox"><img class="preimg" src="${path}" alt="선택한 이미지" /></div>`;
  };

  isbincheck[0] = 1;

  check();
};

const checkBin = (id) => {
  const input = document.getElementById(id).value;
  if (id === "name") {
    if (input.length === 0) {
      isbincheck[1] = 0;
    } else {
      isbincheck[1] = 1;
    }
  } else if (id === "price") {
    if (input.length === 0) {
      isbincheck[2] = 0;
    } else {
      isbincheck[2] = 1;
    }
  } else if (id === "detail") {
    if (input.length === 0) {
      isbincheck[3] = 0;
    } else {
      isbincheck[3] = 1;
    }
  }
  check();
};

const check = () => {
  console.log(isbincheck);
  const btn = document.querySelector(".btn");
  const bincheck = isbincheck.filter((x) => x === 1);
  if (bincheck.length === 4) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
};

const createData = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const detail = document.getElementById("detail").value;
  const image = document.getElementById("image").files[0];
  const types = document.getElementById("types").value;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("detail", detail);
  formData.append("image", image);
  formData.append("types", types);
  axios({
    headers: { "Content-Type": "multipart/form-data" },
    method: "post",
    url: "/webtoons/post/item",
    data: formData,
  })
    .then((res) => {
      alert("등록 성공");
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};

const deletewebtoons = (id) => {
  axios({
    method: "delete",
    url: `/webtoons/itemdelete/${id}`,
  })
    .then((res) => {
      alert("삭제 성공");
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};

const updatePage = (id) => {
  window.location.href = `http://localhost:3000/webtoons/itemwrite/${id}`;
};
