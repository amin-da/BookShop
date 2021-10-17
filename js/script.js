//functionality for navabr in scroll mode
window.onscroll = () => {
  if (window.scrollY > 60) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
  searchForm.classList.remove("active");
};

//loader functionality
function loader() {
  document.querySelector(".loader-conatiner").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 2500);
}

window.onload = () => {
  if (window.scrollY > 60) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
  fadeOut();
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

//swiper slider for home section
var swiper = new Swiper(".books-slider", {
  observer: true,
  observeParents: true,
  parallax: true,
  loop: true,
  autoplay: true,
  simulateTouch: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});

//swiper slider for feautred section
var swiper = new Swiper(".featured-slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  spaceBetween: 6,
  autoplay: {
    enabled: true,
    delay: 3000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
   
    450: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});

//swiper slider for arrivals section
var swiper = new Swiper(".arrivals-slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 10,
  slideToClickedSlide: true,
  autoplay: {
    enabled: true,
    delay: 3000
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

//swiper slider for reviews section
var swiper = new Swiper(".reviews-slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 10,
  slideToClickedSlide: true,
  autoplay: {
    enabled: true,
    delay: 3000
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

//swiper slider for blogs section
var swiper = new Swiper(".blogs-slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 10,
  slideToClickedSlide: true,
  autoplay: {
    enabled: true,
    delay: 3000
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
