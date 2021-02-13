'use strict';

export class Header {
  buttonEl: HTMLElement;
  menuEl: HTMLElement;
  isOpen: Boolean;
  constructor(buttonId: string, menuId: string) {
    this.buttonEl = document.getElementById(buttonId);
    this.menuEl = document.getElementById(menuId);
    this.isOpen = false;
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
    this.buttonEl.classList.add('is-open');
    this.menuEl.classList.add('is-open');
    this.isOpen = true;
  }

  /**
   * メニューを閉じる
   */
  closeMenu(): void {
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
   * クリック時の挙動を設定
   */
  onClickButton(): void {
    this.buttonEl.addEventListener('click', e => {
      e.preventDefault();
      this.toggleMenu();
    });
  }
}
