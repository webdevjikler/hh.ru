// фиксированное меню начало
jQuery(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop()>50){
          $('.header').addClass('fixed'),
          $('.header-block__logo').addClass('w-logo');
          $('.header-button').addClass('b-small');
      }
      else if ($(this).scrollTop()<50){
          $('.header').removeClass('fixed'),
          $('.header-block__logo').removeClass('w-logo');
          $('.header-button').removeClass('b-small');
      }
  });
});
// фиксированное меню конец

  // slick slider
  jQuery(document).ready(function($) {
      $('.main-block').slick({
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          fade: true,
          speed: 800,
          autoplaySpeed: 5000,
          responsive: [
      {
      breakpoint: 1300,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1
      }
      },
      {
      breakpoint: 1200,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1
      }
      },
      {
      breakpoint: 992,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1
      }
      },
      {
      breakpoint: 576,
      settings: {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1
        }
      }]
    });
  });
