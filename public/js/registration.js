let isbincheck = [0, 0, 0, 0];

const binImg = (num) => {
  const form = document.forms["mainForm"];
  const imgpreview = document.getElementById(`select-img${num}`);
  const fReader = new FileReader();

  if (num === "2") {
    fReader.readAsDataURL(form.image2.files[0]);
  } else if (num === "") {
    fReader.readAsDataURL(form.image.files[0]);
  }

  fReader.onloadend = (event) => {
    const path = event.target.result;
    imgpreview.innerHTML = `<div class="preimgbox"><img class="preimg preimg${num}" src="${path}" alt="선택한 이미지" /></div>`;
  };

  if (num === "2") {
    isbincheck[0] = 1;
  } else if (num === "") {
    isbincheck[1] = 1;
  }
  check();
};

const checkBin = (id) => {
  const input = document.getElementById(id).value;
  if (id === "title") {
    if (input.length === 0) {
      isbincheck[2] = 0;
    } else {
      isbincheck[2] = 1;
    }
  } else if (id === "author") {
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
  const btn = document.querySelector(".regibtn");
  const bincheck = isbincheck.filter((x) => x === 1);
  if (bincheck.length === 4) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
};

const createData = (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const image = document.getElementById("image").files[0];
  const image2 = document.getElementById("image2").files[0];

  // 이미지는 그냥 던지면 서버가 받지를 못해서 formdata에 직접 담아서 줘야함
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
      console.log(res.data);
      if (res.data === false) {
        axios({
          headers: { "Content-Type": "multipart/form-data" },
          method: "post",
          url: "/webtoons/post/test",
          data: formData,
        })
          .then((res) => {
            Swal.fire({
              title: "웹툰정보가 등록되었습니다!",
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

const deletewebtoons = (id) => {
  axios({
    method: "delete",
    url: `/webtoons/delete/${id}`,
  })
    .then((res) => {
      Swal.fire({
        title: "삭제되었습니다!",
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
};

const updatePage = (id) => {
  window.location.href = `http://localhost:3000/webtoons/write/${id}`;
};
