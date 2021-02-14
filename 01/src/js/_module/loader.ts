'use strict';

import { gsap } from "gsap";

export class Loader {
  el: HTMLElement;
  bgEl: HTMLElement;
  contentEl: HTMLElement;
  callback;
  constructor(elId: string, bgClass: string, contentClass: string, callback: any) {
    this.el = document.getElementById(elId);
    this.bgEl = document.querySelector(`.${bgClass}`);
    this.contentEl = document.querySelector(`.${contentClass}`);
    this.callback = callback;
  }

  /**
   * ローダーを閉じる
   */
  closeLoader() {
    if (!this.el) return;
    const self = this;
    const tl = gsap.timeline();
    tl
      .to(this.contentEl, {
        autoAlpha: 0,
        onComplete:() => {
          self.clearWindow();
        }
      })
      .to(this.bgEl, {
        duration: .3,
        xPercent: -100,
      }, '+=.5')
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
