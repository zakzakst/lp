'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export class Header2 {
  el: HTMLElement;
  scrollTargetEl: HTMLElement;
  navItemEls: HTMLCollection;
  activeTargetEls: HTMLCollection;
  showOffset: string;
  constructor(
    elId: string,
    scrollTargetElId: string,
    activeTargetElClass: string
  ) {
    this.el = document.getElementById(elId);
    this.scrollTargetEl = document.getElementById(scrollTargetElId);
    this.navItemEls = document.getElementsByClassName('header__nav-item');
    this.activeTargetEls = document.getElementsByClassName(activeTargetElClass);
    this.showOffset = '-60px';
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.el) return;
    this.handlerShowEl();
    this.onScrollNavActive();
  }

  /**
   * ターゲット要素を過ぎた後にヘッダーを表示
   */
  handlerShowEl(): void {
    const self = this;
    ScrollTrigger.create({
      trigger: this.scrollTargetEl,
      start: `bottom ${self.showOffset}`,
      onEnter() {
        self.el.classList.add('is-active');
      },
      onLeaveBack() {
        self.el.classList.remove('is-active');
      }
    });
  }

  /**
   * アクティブナビゲーションの変更
   * @param id ナビゲーションのID
   */
  changeActiveNav(id: string) {
    [...this.navItemEls].forEach(el => {
      el.classList.remove('is-active');
    });
    const navEl = document.getElementById(`header-nav-item--${id}`);
    navEl.classList.add('is-active');
  }

  /**
   * スクロール連動ナビゲーションアクティブ表示
   */
  onScrollNavActive(): void {
    const self = this;
    [...this.activeTargetEls].forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        // アンカーリンクで移動した時に0だとアクティブにならないため、1pxで設定
        start: 'top 1px',
        onEnter() {
          self.changeActiveNav(el.id);
        },
        onEnterBack() {
          self.changeActiveNav(el.id);
        }
      });
    });
  }
}
