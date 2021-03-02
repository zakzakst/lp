'use strict';

import { gsap } from "gsap";

export class Header {
  buttonEl: HTMLElement;
  menuEl: HTMLElement;
  closeButtonEls: NodeListOf<HTMLElement>;
  menuContentEl: HTMLElement;
  isOpen: Boolean;
  isBusy: Boolean;
  fixedContentEls: HTMLCollection;
  constructor(buttonId: string, menuId: string, closeButtonClass: string) {
    this.buttonEl = document.getElementById(buttonId);
    this.menuEl = document.getElementById(menuId);
    this.closeButtonEls = this.menuEl.querySelectorAll(`.${closeButtonClass}`);
    this.menuContentEl = this.menuEl.querySelector('.header-menu__content');
    this.isOpen = false;
    this.isBusy = false;
    this.fixedContentEls = document.getElementsByClassName('js-fix-content');
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.buttonEl) return;
    this.onClickButton();
    this.onClickCloseButton();
  }

  /**
   * メニューを開く
   */
  openMenu(): void {
    this.isBusy = true;
    this.fixWindow();
    const self = this;
    const tl = gsap.timeline();
    tl
      .set(this.menuEl, {
        display: 'block',
      })
      .to(this.menuEl, {
        duration: .5,
        opacity: 1,
      })
      .to(this.menuContentEl, {
        duration: .5,
        x: 0,
        onComplete() {
          self.isOpen = true;
          self.isBusy = false;
        }
      });
  }

  /**
   * メニューを閉じる
   */
  closeMenu(): void {
    this.isBusy = true;
    const self = this;
    const tl = gsap.timeline();
    tl
      .to(this.menuContentEl, {
        duration: .5,
        x: 300,
      })
      .to(this.menuEl, {
        duration: .5,
        opacity: 0,
      })
      .set([this.menuEl, this.menuContentEl], {
        clearProps: 'all',
        onComplete() {
          self.clearWindow();
          self.isOpen = false;
          self.isBusy = false;
        }
      });
  }

  /**
   * メニューを開閉する
   */
  toggleMenu(): void {
    if (this.isBusy) return;
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  /**
   * ウインドウを固定
   */
  fixWindow() {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    this.fixFixedContent(scrollBarWidth);
    document.documentElement.style.overflow = 'hidden';
  }

  /**
   * ウインドウ固定を解除
   */
  clearWindow() {
    document.body.style.paddingRight = null;
    this.clearFixedContent();
    document.documentElement.style.overflow = null;
  }

  /**
   * ウインドウ位置を固定している要素のずれ調整
   */
  fixFixedContent(scrollBarWidth: number) {
    [...this.fixedContentEls].forEach(el => {
      const target = <HTMLElement>el;
      target.style.paddingRight = `${scrollBarWidth}px`;
    });
  }

  /**
   * ウインドウ位置を固定している要素のずれ調整を戻す
   */
  clearFixedContent() {
    [...this.fixedContentEls].forEach(el => {
      const target = <HTMLElement>el;
      target.style.paddingRight = null;
    });
  }

  /**
   * クリック時の挙動を設定
   */
  onClickButton(): void {
    this.buttonEl.addEventListener('click', e => {
      e.preventDefault();
      this.toggleMenu();
    });
  }

  /**
   * 閉じるボタンクリック時の挙動を設定
   */
  onClickCloseButton(): void {
    [...this.closeButtonEls].forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        this.toggleMenu();
      });
    });
  }
}
