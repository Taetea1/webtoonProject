const binImg = (num) => {
  const form = document.forms["mainForm"];
  const filenamee = document.querySelector(`.filenamee${num}`);
  const imgpreview = document.getElementById(`select-img${num}`);
  const selectimg = document.getElementById(`image${num}`);
  const fReader = new FileReader();

  if (num === "2") {
    filenamee.innerHTML = `<div>${form.image2.files[0].name}</div>`;

    fReader.readAsDataURL(form.image2.files[0]);
  } else if (num === "") {
    filenamee.innerHTML = `<div>${form.image.files[0].name}</div>`;

    fReader.readAsDataURL(form.image.files[0]);
  }

  fReader.onloadend = (event) => {
    const path = event.target.result;
    imgpreview.innerHTML = `<div class="preimgbox"><img class="preimg" src="${path}" alt="선택한 이미지" /></div>`;
  };

  // if (selectimg.value.length === 0) {
  //   isbincheck[0] = 0;
  // } else {
  //   isbincheck[0] = 1;
  // }
};

const createData = (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const comment = document.getElementById("comment").value;
  const image = document.getElementById("image").files[0];
  const image2 = document.getElementById("image2").files[0];

  const formData = new FormData();
  formData.append("name", title);
  formData.append("summary", comment);
  formData.append("image", image);
  formData.append("image2", image2);
  axios({
    headers: { "Content-Type": "multipart/form-data" },
    method: "post",
    url: "/webtoons/post/test",
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
    url: `/webtoons/delete/${id}`,
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
  window.location.href = `http://localhost:3000/webtoons/write/${id}`;
};
