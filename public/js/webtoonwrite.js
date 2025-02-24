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
    method: "get",
    url: "/webtoons/duplecheck",
    params: { title },
  })
    .then((res) => {
      if (res.data === false) {
        axios({
          method: "put",
          url: `/webtoons/update/${id}`,
          data: formData,
        })
          .then((res) => {
            Swal.fire({
              title: "수정되었습니다!",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/webtoons/registration";
              }
            });
          })
          .catch((e) => {});
      } else {
        Swal.fire({
          title: "중복된 제목입니다. 다시 입력해주세요!",
          icon: "info",
        });
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

const binImg = (num) => {
  const form = document.forms["updateData"];
  const imgpreview = document.getElementById(`select-img${num}`);
  const fReader = new FileReader();

  if (num === "2") {
    fReader.readAsDataURL(form.image2.files[0]);
  } else if (num === "") {
    fReader.readAsDataURL(form.image.files[0]);
  }

  fReader.onloadend = (event) => {
    const path = event.target.result;
    imgpreview.innerHTML = `<div class="preimgbox"><img class="preimg" src="${path}" alt="선택한 이미지" /></div>`;
  };
};
