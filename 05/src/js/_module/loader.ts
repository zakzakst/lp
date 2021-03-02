'use strict';

import { gsap } from "gsap";

export class Loader {
  el: HTMLElement;
  callback;
  constructor(elId: string, callback: any) {
    this.el = document.getElementById(elId);
    this.callback = callback;
  }

  /**
   * ローダーを閉じる
   */
  closeLoader() {
    if (!this.el) return;
    const self = this;
    const tl = gsap.timeline();
    // TODO: オープンアニメーションを追加
    this.clearWindow();
    tl
      .to(this.el, {
        autoAlpha: 0,
      })
      .set(this.el, {
        display: 'none',
        onComplete:() => {
          self.callback();
        }
      });
  }

  /**
   * ウインドウ固定を解除
   */
  clearWindow() {
    document.documentElement.style.overflow = null;
  }
}
