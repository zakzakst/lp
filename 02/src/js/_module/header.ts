'use strict';

import { gsap } from "gsap";

export class Header {
  buttonEl: HTMLElement;
  menuEl: HTMLElement;
  menuItemsEls: NodeListOf<HTMLElement>;
  menuBgEl: HTMLElement;
  isOpen: Boolean;
  isBusy: Boolean;
  fixedContentEls: HTMLCollection;
  constructor(buttonId: string, menuId: string) {
    this.buttonEl = document.getElementById(buttonId);
    this.menuEl = document.getElementById(menuId);
    this.menuItemsEls = this.menuEl.querySelectorAll('.header-menu__items > li');
    this.menuBgEl = <HTMLElement>this.menuEl.querySelector('.header-menu__bg');
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
  }

  /**
   * メニューを開く
   */
  openMenu(): void {
    this.isBusy = true;
    this.fixWindow();
    this.buttonEl.classList.add('is-open');
    const self = this;
    const tl = gsap.timeline();
    tl
      .set(this.menuEl, {
        display: 'flex',
      })
      .to(this.menuBgEl, {
        duration: .5,
        scale: 1,
        opacity: 1,
      })
      .to(this.menuItemsEls, {
        y: 0,
        opacity: 1,
        stagger: {
          each: .1,
        },
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
      .to(this.menuItemsEls, {
        y: 50,
        opacity: 0,
        stagger: {
          each: .1,
          from: 'end',
        },
      })
      .to(this.menuBgEl, {
        duration: .5,
        scale: 0,
        opacity: 0,
      })
      .set([this.menuEl, this.menuBgEl, ...this.menuItemsEls], {
        clearProps: 'all',
        onComplete() {
          self.buttonEl.classList.remove('is-open');
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
}
