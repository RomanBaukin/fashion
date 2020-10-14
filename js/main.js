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
});
