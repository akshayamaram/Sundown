const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


function page3Animation() {
    var elementContainer = document.querySelector(".elements-container");
    var fixedElement = document.querySelector(".fixed-element");

    elementContainer.addEventListener("mouseenter", function () {
      fixedElement.style.display = "block";
    });

    elementContainer.addEventListener("mouseleave", function () {
      fixedElement.style.display = "none";
    });

    var elemz = document.querySelectorAll(".elements");
    elemz.forEach(function (imgTracker) {
      imgTracker.addEventListener("mouseenter", function () {
        var img = imgTracker.getAttribute("data-image");
        fixedElement.style.backgroundImage = `url(${img})`;
      });
    });
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });
}

function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var fullScreen = document.querySelector("#full-screen");
    var navimg = document.querySelector("nav img");
    var fullnav1 = document.querySelector("full-nav1");
    var flag = 0;

    menu.addEventListener("click", function () {
      if (flag == 0) {
        fullScreen.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
        // fullnav1.style.display = "block";
      } else {
        fullScreen.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
      }
    });
}

function loadAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(() => {
      loader.style.top = "-100%";
    }, 2500);
}

swiperAnimation()
page3Animation()
menuAnimation()
loadAnimation()




