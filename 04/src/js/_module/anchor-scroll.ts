'use strict';

export class AnchorScroll {
  els: HTMLCollection;
  constructor(elsClass: string) {
    this.els = document.getElementsByClassName(elsClass);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.els.length) return;
    this.onClickEl();
  }

  /**
   * ページ内リンク先に移動する
   * @param targetId リンク先のid
   */
  moveToAnchor(targetId: string): void {
    const targetEl = document.querySelector(targetId);
    const targetRect = targetEl.getBoundingClientRect();
    const targetTop = window.pageYOffset + targetRect.top;
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  }

  /**
   * クリック時の挙動を設定
   */
  onClickEl(): void {
    [...this.els].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        const target = <HTMLElement>e.target;
        const targetId = target.getAttribute('href');
        this.moveToAnchor(targetId);
      });
    });
  }
}
