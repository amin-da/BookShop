//functionality for navabr in scroll mode
window.onscroll = () => {
  if (window.scrollY > 60) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
  searchForm.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 60) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

//search-form in responsive mode

let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

//Login form functionality

let loginFormContainer = document.querySelector(".login-form-container ");
//برای اینکه انمیشن فرم لاگین کار کند لازم است که خود المنت فرم هم
//گرفته شود و به صورت داینامیک کلاس های انیمیشن لایبرری انیمیت.سی اس اس به آن حذف و اضافه شوند
const loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginFormContainer.classList.toggle("active");
  loginForm.classList.add("animate__zoomInDown");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginFormContainer.classList.remove("active");
  loginForm.classList.remove("animate__zoomInDown");
};

//
