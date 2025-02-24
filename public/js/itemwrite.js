const detailcontent = document.getElementById("content").innerText;

const updateForm = (event, id) => {
  event.preventDefault();
  const form = document.forms["updateData"];

  const name = form["name"].value;
  const price = form["price"].value;
  const detail = editor.getMarkdown();
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
  const fReader = new FileReader();

  filenamee.innerHTML = `<div>${form.image.files[0].name}</div>`;
  fReader.readAsDataURL(form.image.files[0]);

  fReader.onloadend = (event) => {
    const path = event.target.result;
    imgpreview.innerHTML = `<div class="preimgbox"><img class="preimg" src="${path}" alt="선택한 이미지" /></div>`;
  };
};

// 토스 에디터
const editor = new toastui.Editor({
  el: document.querySelector("#content"), //에디터 적용 요소
  height: "300px", // 에디터 영역 높이 값
  initialEditType: "markdown", // 최초로 보여줄 에디터 타입 (markdown || wysiwyg)
  initialValue: `${detailcontent}`, // 내용의 초기 값(반드시 마크다운 문자열 형태)
  previewStyle: "vertical", // 마크다운 프리뷰 스타일 (tab || vertical)
});
