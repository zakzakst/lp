'use strict';

export class Header {
  buttonEl: HTMLElement;
  menuEl: HTMLElement;
  isOpen: Boolean;
  fixedContentEls: HTMLCollection;
  constructor(buttonId: string, menuId: string) {
    this.buttonEl = document.getElementById(buttonId);
    this.menuEl = document.getElementById(menuId);
    this.isOpen = false;
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
    this.fixWindow();
    this.buttonEl.classList.add('is-open');
    this.menuEl.classList.add('is-open');
    this.isOpen = true;
  }

  /**
   * メニューを閉じる
   */
  closeMenu(): void {
    this.clearWindow();
    this.buttonEl.classList.remove('is-open');
    this.menuEl.classList.remove('is-open');
    this.isOpen = false;
  }

  /**
   * メニューを開閉する
   */
  toggleMenu(): void {
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
