$(function(){

$(".rate-stare").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
});
$('.product-slider__inner').slick({
        dots:true,
        infinite: true,
        slidesToShow:4 ,
        slidesToScroll: 4,
        arrows:false,
});
        

 var mixer = mixitup ( '.products__inner-box' );

});
