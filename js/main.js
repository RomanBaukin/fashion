$(document).ready(function () {
  var menuButton = $(".menu-button");
  var closeButton = $(".navbar-mobile__close");

  menuButton.on("click", function () {
    document.querySelector(".navbar-mobile").classList.toggle("navbar-mobile__visible");
  });
  closeButton.on("click", function () {
    document.querySelector(".navbar-mobile__visible").classList.toggle("navbar-mobile__visible");
  });
  // $(document).keyup(function (e) {
  //   if (e.keyCode === 27) $(".navbar-mobile__close").click();
  // });

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
    autoplay: {
      delay: 7000,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  })
  var storiesSlider = new Swiper('.stories__slider', {
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.stories__button_next',
      prevEl: '.stories__button_prev',
    },
  })

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least two letters",
        },
        email: {
          required: "Please enter your email address",
          email: "Format email address: name@domain.com",
        },
      },
    });
  });

  // Модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  $(document).keyup(function (e) {
    if (e.keyCode === 27) $(".modal__close").click();
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
    document.querySelector(".navbar-mobile__visible").classList.remove("navbar-mobile__visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }
});
