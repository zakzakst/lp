'use strict';

import { gsap } from "gsap";

export class HeaderMenu {
  itemEl: Element;
  linksEl: Element;
  isOpen: Boolean;
  constructor(itemEl: Element) {
    this.itemEl = itemEl;
    this.linksEl = this.itemEl.nextElementSibling;
    this.isOpen = false;
  }

  /**
   * 初期化
   */
  init(): void {
    this.onClickItem();
  }

  /**
   * リンクを開く
   */
  openLinks(): void {
    const self = this;
    gsap.to(this.linksEl, {
      height: 'auto',
      onComplete() {
        self.itemEl.classList.add('is-open');
        self.isOpen = true;
      },
    });
  }

  /**
   * リンクを閉じる
   */
  closeLinks(): void {
    const self = this;
    gsap.to(this.linksEl, {
      height: 0,
      onComplete() {
        self.itemEl.classList.remove('is-open');
        self.isOpen = false;
      },
    });
  }

  /**
   * リンクを開閉する
   */
  toggleLinks(): void {
    if (this.isOpen) {
      this.closeLinks();
    } else {
      this.openLinks();
    }
  }

  /**
   * メニュークリック時の挙動
   */
  onClickItem(): void {
    this.itemEl.addEventListener('click', e => {
      e.preventDefault();
      this.toggleLinks();
    });
  }
}
