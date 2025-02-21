const updateForm = (event, id) => {
  event.preventDefault();
  const form = document.forms["updateData"];

  const name = form["name"].value;
  const price = form["price"].value;
  const detail = form["detail"].value;
  const image = document.getElementById("image").files[0];
  const types = document.getElementById("types").value;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("detail", detail);
  formData.append("image", image);
  formData.append("cateid", types);

  axios({
    method: "put",
    url: `/webtoons/itemupdate/${id}`,
    data: formData,
  })
    .then((res) => {
      alert("수정 성공!!");
      window.location.href = "/webtoons/itemadmin";
    })
    .catch((e) => {});
};

const binImg = () => {
  const form = document.forms["updateData"];
  const filenamee = document.querySelector(`.filenamee`);
  const imgpreview = document.getElementById(`select-img`);
  const selectimg = document.getElementById(`image`);
  const fReader = new FileReader();

  filenamee.innerHTML = `<div>${form.image.files[0].name}</div>`;
  fReader.readAsDataURL(form.image.files[0]);

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
