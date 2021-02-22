'use strict';

import { gsap } from "gsap";

export class Loader {
  el: HTMLElement;
  textEl: HTMLElement;
  progressEl: HTMLElement;
  callback: any;
  imgEls: NodeListOf<HTMLElement>;
  videoEls: HTMLCollection;
  targetElNum: number;
  loadedElNum: number;
  loadedPercent: number;
  constructor(
    elId: string,
    textElId: string,
    progressElId: string,
    callback: any
  ) {
    this.el = document.getElementById(elId);
    this.textEl = document.getElementById(textElId);
    this.progressEl = document.getElementById(progressElId);
    this.callback = callback;
    // loading属性が「lazy」の画像は読込を監視しない
    this.imgEls = document.querySelectorAll('img:not([loading="lazy"])');
    this.videoEls = document.getElementsByTagName('video');
    this.targetElNum = this.imgEls.length + this.videoEls.length;
    this.loadedElNum = 0;
    this.loadedPercent = 0;
  }

  /**
   * 初期化
   */
  init(): void {
    this.onLoadImg();
    this.onLoadVideo();
    this.onCompleteLoad();
  }

  /**
   * ローダーを更新
   */
  updateLoader(): void {
    this.textEl.textContent = `${this.loadedPercent}%`;
    this.progressEl.style.width = `${this.loadedPercent}%`;
  }

  /**
   * 画像・動画読み込み後の更新
   */
  elLoadDone(): void {
    this.loadedElNum += 1;
    // キャッシュなど画像・動画以外の読込を考慮し、90%までの進捗表示にする（window.onloadで100%にする）
    this.loadedPercent = Math.floor(this.loadedElNum / this.targetElNum * 90);
    this.updateLoader();
  }

  /**
   * ウインドウ固定を解除
   */
  clearWindow(): void {
    document.documentElement.style.overflow = null;
  }

  /**
   * ローダーを閉じる
   */
  closeLoader(): void {
    if (!this.el) return;
    const self = this;
    const tl = gsap.timeline();
    tl
      .to(this.el, {
        autoAlpha: 0,
      })
      .set(this.el, {
        display: 'none',
        onComplete:() => {
          self.clearWindow();
          self.callback();
        }
      });
  }

  /**
   * 画像読み込み後のイベント
   */
  onLoadImg(): void {
    [...this.imgEls].forEach(el => {
      el.addEventListener('load', () => {
        this.elLoadDone();
      });
    });
  }

  /**
   * 動画読み込み後のイベント
   */
  onLoadVideo(): void {
    [...this.videoEls].forEach(el => {
      el.addEventListener('loadeddata', () => {
        this.elLoadDone();
      });
    });
  }

  /**
   * ロード完了時のイベント
   */
  onCompleteLoad(): void {
    window.onload = () => {
      this.loadedElNum = this.targetElNum;
      this.loadedPercent = 100;
      this.updateLoader();
      setTimeout(() => {
        this.closeLoader();
      }, 500);
    };
  }
}
