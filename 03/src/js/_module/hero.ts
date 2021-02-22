'use strict';
import $ from 'jquery';
import 'slick-carousel';

export class Hero {
  mvEl: JQuery;
  slickConf: Object;
  constructor(mvElId: string) {
    this.mvEl = $(`#${mvElId}`);
    this.slickConf = {
      // autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      fade: true,
      speed: 2000,
      swipe: false,
    };
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.mvEl) return;
    /* @ts-ignore */
    this.mvEl.slick(this.slickConf);
  }

  /**
   * 自動再生開始
   */
  start() {
    if (!this.mvEl) return;
    /* @ts-ignore */
    this.mvEl.slick('slickPlay');
  }
}
