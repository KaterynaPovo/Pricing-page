$(function () {
  "use strict";

  $(".plans-buttons > span").on("click", function () {
    $(this).siblings().removeClass("active").end().addClass("active");
  });

  $(".plans-buttons .monthly").on("click", function () {
    $(".basic .price-card--price-number").text("19");
    $(".professional .price-card--price-number").text("54");
    $(".company .price-card--price-number").text("89");
  });

  $(".plans-buttons .yearly").on("click", function () {
    $(".basic .price-card--price-number").text("12");
    $(".professional .price-card--price-number").text("36");
    $(".company .price-card--price-number").text("56");
  });
});
