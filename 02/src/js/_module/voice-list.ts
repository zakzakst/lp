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
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: true,
      variableWidth: true,
      centerMode: true,
      prevArrow: '<div class="voice-list__arrow-prev"><span class="icon is-large"><i class="fas fa-angle-left fa-lg"></i></span></div>',
      nextArrow: '<div class="voice-list__arrow-next"><span class="icon is-large"><i class="fas fa-angle-right fa-lg"></i></span></div>',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
          },
        },
      ],
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
