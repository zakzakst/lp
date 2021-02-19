'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export class FooterGoTop {
  el: HTMLElement;
  showOffset: string;
  constructor(elId: string) {
    this.el = document.getElementById(elId);
    this.showOffset = '-400px';
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.onClickEl();
    this.handlerShowEl();
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

  /**
   * 一定量のスクロール後に表示する
   */
  handlerShowEl(): void {
    const self = this;
    ScrollTrigger.create({
      trigger: document.body,
      start: `top ${self.showOffset}`,
      onEnter() {
        self.el.classList.add('is-show');
      },
      onLeaveBack() {
        self.el.classList.remove('is-show');
      }
    });
  }
}
