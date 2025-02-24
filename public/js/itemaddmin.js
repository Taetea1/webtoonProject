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

  document.querySelector(".imginfo").innerHTML = "";
};

const checkBin = (id) => {
  const input = document.getElementById(id).value;

  if (id === "name") {
    if (input.length !== 0) {
      document.querySelector(".nameinfo").innerHTML = "";
    }
  } else if (id === "price") {
    if (input.length !== 0) {
      document.querySelector(".priceinfo").innerHTML = "";
    }
  } else if (id === "content") {
    document.querySelector(".contentinfo").innerHTML = "";
  }
};

const createData = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const content = editor.getMarkdown();
  const image = document.getElementById("image").files[0];
  const types = document.getElementById("types").value;
  console.log(image);
  if (!image) {
    document.querySelector(".imginfo").innerHTML = `이미지를 선택해주세요.`;
  }
  if (name.length === 0) {
    document.querySelector(".nameinfo").innerHTML = `상품명을 입력해주세요.`;
  }
  if (price.length === 0) {
    document.querySelector(".priceinfo").innerHTML = `가격을 입력해주세요.`;
  }
  if (content.length === 0) {
    document.querySelector(
      ".contentinfo"
    ).innerHTML = `상품에 대한 상세내용을 입력해주세요.`;
  }

  if (
    image &&
    name.length !== 0 &&
    price.length !== 0 &&
    content.length !== 0
  ) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("detail", content);
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
  }

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
};

const updatePage = (id) => {
  window.location.href = `http://localhost:3000/webtoons/itemwrite/${id}`;
};

// 토스 에디터
const editor = new toastui.Editor({
  el: document.querySelector("#content"), //에디터 적용 요소
  height: "300px", // 에디터 영역 높이 값
  initialEditType: "markdown", // 최초로 보여줄 에디터 타입 (markdown || wysiwyg)
  placeholder: "상세내용을 입력해주세요.", // 내용의 초기 값(반드시 마크다운 문자열 형태)
  previewStyle: "vertical", // 마크다운 프리뷰 스타일 (tab || vertical)
});
