'use strict';

import $ from 'jquery';

export class FooterGoTop {
  $el: JQuery;
  speed: number; // ミリ秒
  constructor(elId: string) {
    this.$el = $(`#${elId}`);
    this.speed = 500;
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.$el) return;
    this.onClickEl();
  }

  /**
   * トップへ戻る
   */
  goTop(): void {
    $('body, html').animate({
      scrollTop: 0
    }, this.speed);
  }

  /**
   * クリック時の挙動を設定
   */
  onClickEl(): void {
    this.$el.on('click', e => {
      e.preventDefault();
      this.goTop();
    });
  }
}
