$(function () {
  $("html").niceScroll();
});

new WOW().init();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
  $(".owl-carousel").owlCarousel({
    margin: 500,
    loop: true,
    autoWidth: true,
    items: 1,
  });
});
$(".owl-carousel").owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 500,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
