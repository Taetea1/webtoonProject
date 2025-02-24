const updateForm = (event, id) => {
  event.preventDefault();
  const form = document.forms["updateData"];

  const title = form["name"].value;
  const author = form["author"].value;
  const image = document.getElementById("image").files[0];
  const image2 = document.getElementById("image2").files[0];

  const formData = new FormData();
  formData.append("name", title);
  formData.append("author", author);
  formData.append("image", image);
  formData.append("image2", image2);

  axios({
    method: "put",
    url: `/webtoons/update/${id}`,
    data: formData,
  })
    .then((res) => {
      alert("수정 성공!!");
      window.location.href = "/webtoons/registration";
    })
    .catch((e) => {});
};

const binImg = (num) => {
  const form = document.forms["updateData"];
  const filenamee = document.querySelector(`.filenamee${num}`);
  const imgpreview = document.getElementById(`select-img${num}`);
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
