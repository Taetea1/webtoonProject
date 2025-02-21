const header = document.querySelector(".headerbox");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});
