import $ from 'jquery';
import 'slick-carousel';

export const carousel01 = () => {
  $(function() {
    $('#js-carousel-01-items ul').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: true,
      dotsClass: 'carousel-01__pager-item',
      appendDots: $('#js-carousel-01-pager'),
      vertical: false,
    });
  });
}
