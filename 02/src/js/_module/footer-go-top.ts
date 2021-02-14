'use strict';

export class FooterGoTop {
  el: HTMLElement;
  speed: number; // ミリ秒
  constructor(elId: string) {
    this.el = document.getElementById(elId);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onClickEl();
  }

  /**
   * トップへ戻る
   */
  goTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * クリック時の挙動を設定
   */
  onClickEl(): void {
    this.el.addEventListener('click', e => {
      e.preventDefault();
      this.goTop();
    });
  }
}
