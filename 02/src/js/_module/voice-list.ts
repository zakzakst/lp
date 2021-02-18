import $ from 'jquery';
import 'slick-carousel';

export class VoiceList {
  el: JQuery;
  slickConf: Object;
  constructor(elId: string) {
    this.el = $(`#${elId}`);
    this.slickConf = {
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: true,
      dotsClass: 'carousel-01__pager-item',
      appendDots: $('#js-carousel-01-pager'),
      vertical: false,
    };
  }

  /**
   * 初期化
   */
  init(): void {
    /* @ts-ignore */
    this.el.slick(this.slickConf);
  }
}
