let navBtn = document.getElementById("navbtn");
let header = document.getElementsByClassName("header")[0];
let html = document.getElementsByTagName("html")[0];

navBtn.addEventListener("click", name);

function name() {
  if (header.classList.contains("nav-open")) {
    html.classList.remove("noscroll");
    header.classList.remove("nav-open");
  } else {
    html.classList.add("noscroll");
    header.classList.add("nav-open");
  }
}
