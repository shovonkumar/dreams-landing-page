$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll > 350) {
      $(".back_to_top").fadeIn();
    } else {
      $(".back_to_top").fadeOut();
    }

    if (scroll > 150) {
      $(".navbar").addClass("nav_bg_sticky");
    } else {
      $(".navbar").removeClass("nav_bg_sticky");
    }
  });

  $(".back_to_top").click(function () {
    $("html, body").animate({ scrollTop: 0 });
  });
});

// Venobox Activation

new VenoBox({
  selector: ".my-image-links",
  numeration: true,
  infinigall: true,
  share: true,
  spinner: "rotating-plane",
});

// // Wow JS Activation

new WOW().init();

// Swiper JS

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
