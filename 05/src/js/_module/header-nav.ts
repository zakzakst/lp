'use strict';

import { gsap } from "gsap";

export class HeaderNav {
  el: HTMLElement;
  wrapperEl: HTMLElement;
  detailEl: HTMLElement;
  navItemEls: HTMLCollection;
  detailLinksEls: HTMLCollection;
  currentTarget: string;
  constructor(elId: string, wrapperElId: string, detailElId: string) {
    this.el = document.getElementById(elId);
    this.wrapperEl = document.getElementById(wrapperElId);
    this.detailEl = document.getElementById(detailElId);
    this.navItemEls = this.el.getElementsByClassName('header__nav-item');
    this.detailLinksEls = this.wrapperEl.getElementsByClassName('header__detail-links');
    this.currentTarget = '';
  }

  /**
   * 初期化
   */
  init(): void {
    this.onMouseOverNav();
    this.onMouseOutNav();
  }

  /**
   * 詳細の内容を設定
   * @param targetId 表示する詳細のID
   */
  setContent(targetId: string): void {
    const target = document.getElementById(`js-header-detail-links-${targetId}`);
    target.style.display = 'flex';
    this.currentTarget = targetId;
  }

  /**
   * 詳細の内容をクリア
   */
  clearContent(): void {
    [...this.detailLinksEls].forEach(el => {
      const target = <HTMLElement>el;
      target.style.display = null;
    });
  }

  /**
   * 詳細を表示
   * @param targetId 表示する詳細のID
   */
  showDetail(targetId: string): void {
    this.setContent(targetId);
    const tl = gsap.timeline();
    tl
      .set(this.detailEl, {
        display: 'block',
      })
      .to(this.detailEl, {
        duration: .5,
        opacity: 1,
      });
  }

  /**
   * 詳細を非表示
   */
  hideDetail(): void {
    const self = this;
    const tl = gsap.timeline();
    tl
      .to(this.detailEl, {
        duration: .5,
        opacity: 0,
      })
      .call(() => {
        self.clearContent();
        self.currentTarget = '';
      })
      .set(this.detailEl, {
        clearProps: 'all',
      });
  }

  /**
   * 詳細の内容を変更
   * @param targetId 表示する詳細のID
   */
  changeDetail(targetId: string): void {
    const self = this;
    const tl = gsap.timeline();
    tl
      .set(this.detailEl, {
        height: this.detailEl.clientHeight,
      })
      .call(() => {
        self.clearContent();
        self.setContent(targetId);
      })
      .to(this.detailEl, {
        height: 'auto',
      });
  }

  /**
   * ナビゲーションのマウスオーバー時の挙動
   */
  onMouseOverNav(): void {
    [...this.navItemEls].forEach(el => {
      const item = <HTMLElement>el;
      const targetId: string = item.dataset.target;
      el.addEventListener('mouseover', () => {
        if (!this.currentTarget) {
          // 現在表示されている詳細がない場合、詳細を表示
          this.showDetail(targetId);
        } else if (this.currentTarget === targetId) {
          // 現在表示されている詳細と同じIDの場合、処理を終了
          return;
        } else {
          // 現在表示されている詳細と異なるIDの場合、内容を変更
          this.changeDetail(targetId);
        }
      });
    });
  }

  /**
   * ナビゲーションのマウスアウト時の挙動
   */
  onMouseOutNav(): void {
    this.wrapperEl.addEventListener('mouseleave', () => {
      this.hideDetail();
    });
  }
}
