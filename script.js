const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function elemAnimation() {
  let fixed = document.querySelector(".fixed-image");
  let elems = document.querySelectorAll(".elem");
  let elemC = document.querySelector(".elem-container");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
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

elemAnimation();
swiperAnimation();
