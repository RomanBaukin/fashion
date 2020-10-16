$(document).ready(function () {
  var menuButton = $(".menu-button");
  var closeButton = $(".navbar-mobile__close");

  menuButton.on("click", function () {
    document.querySelector(".navbar-mobile").classList.toggle("navbar-mobile__visible");
  });
  closeButton.on("click", function () {
    document.querySelector(".navbar-mobile__visible").classList.toggle("navbar-mobile__visible");
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) $(".navbar-mobile__close").click();
  });

  // Табы
  var tabsItem = $('.tranding__tab');
  var contentItem = $('.tranding__flex');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('tranding__tab_active')
    contentItem.removeClass('tranding__flex_active');
    $(activeContent).addClass('tranding__flex_active');
    $(this).addClass('tranding__tab_active');
  })

  // Слайдер
  var commentsSlider = new Swiper('.comments__slider', {
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  })
  var storiesSlider = new Swiper('.stories__slider', {
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.stories__button_next',
      prevEl: '.stories__button_prev',
    },

  })
});
