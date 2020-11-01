$(function () {

  $(document).ready(function () {
    $('.slider').slick({
      infinite: true,
      adaptiveHeight: true,
      prevArrow: ' <button class=" slick-btn slick-prev"><img src="img/slider/left.svg" alt="prev"></button>',
      nextArrow: ' <button class=" slick-btn slick-next"><img src="img/slider/right.png" alt="next"></button>',
      responsive: [
        {
          breakpoint: 742,
          settings: {
            arrows: false,
            dots: true,


          }
        },

      ]
    });
  });


  $("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
  });

  $(".overlay a").click(function () {
    $("#navToggle").toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
  });
  // $('.product-slider__inner').slick({
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1900,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       }
  //     },
  //     {
  //       breakpoint: 1441,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 801,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     },
  //   ]
  // });

  jQuery(document).ready(function () {
    jQuery(".eTimer").eTimer({
      etType: 2, etDate: "30.11.2020.17.10", etTitleSize: 19, etShowSign: 1, etSep: ":", etFontFamily: "Comic Sans MS", etTextColor: "#a3a3a3", etPaddingTB: 0, etPaddingLR: 0, etBackground: "#f6f0eb", etBorderSize: 0, etBorderRadius: 5, etBorderColor: "white", etShadow: " 0px 0px -2px 0px #333333", etLastUnit: 3, etNumberFontFamily: "Arial", etNumberSize: 26, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 7, etNumberBackground: "#ef7f1a", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 2px 0px 5px 0px rgba(0, 0, 0, 0.5)"
    });
  });
});
