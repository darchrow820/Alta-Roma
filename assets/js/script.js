$(function () {
  // Menu toggle
  $(".menu-icon").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("opened");
    $("#nav").toggleClass("active");
  });

  // Popup toggle

  $(".callme_button").on("click", function () {
    $(".popup_inner").addClass("active");
  });

  $(".close_popup").on("click", function () {
    $(".popup_inner").removeClass("active");
  });
});
