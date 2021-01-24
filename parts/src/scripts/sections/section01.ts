'use strict';

export const section01 = () => {
  console.log('teest')
  const hero = new Hero01();
  hero.init();
}

class Hero01 {
  heroEl: HTMLElement;
  mvItemEls: HTMLCollection;
  mvImgClassName: string;
  mvCurrent: number;
  mvCount: number;
  mvInterval: number;
  mvDuration: number;
  constructor() {
    this.heroEl = document.getElementById('js-hero');
    this.mvItemEls = document.getElementsByClassName('hero__mv-item');
    this.mvImgClassName = 'hero__mv-img';
    this.mvCurrent = 0;
    this.mvCount = this.mvItemEls.length;
    this.mvInterval = 5000;
    this.mvDuration = 4500;
  }

  /**
   * 初期化
   */
  init() {
    console.log(this.heroEl)
    // 要素が存在しない場合、処理を終了
    if (!this.heroEl) return;
    this.mvInit();
    // NOTE: 実際のページに組み込む際はページローダーのアニメーションなどと連携してスクリプトを実行する
    setTimeout(() => {
      this.heroEl.classList.add('is-animated');
      this.mvAnim();
    }, 1000);
  }

  /**
   * メインビジュアル初期化
   */
  mvInit(): void {
    [...this.mvItemEls].forEach(el => {
      // 背景画像設定タグの取得
      const imgEl = el.getElementsByClassName(this.mvImgClassName)[0];
      // 背景画像パスの取得
      // @ts-ignore
      const imgSrc = imgEl.dataset.imgSrc;
      // スタイルの設定
      imgEl.setAttribute('style', `background-image: url(${imgSrc})`);
    });
    // 最初の画像を表示
    this.mvItemEls[this.mvCurrent].classList.add('is-active');
  }

  /**
   * メインビジュアルアニメーション
   */
  mvAnim(): void {
    // 次の表示画像番号を取得
    const nextNum = this.mvCurrent === this.mvCount - 1 ? 0 : this.mvCurrent + 1;
    // 現在の画像を取得
    const currentItem = this.mvItemEls[this.mvCurrent];
    // 次の画像を取得
    const nextItem = this.mvItemEls[nextNum];
    // 現在の画像を非表示にする
    currentItem.classList.add('is-leave');
    // 次の画像を表示する
    nextItem.classList.add('is-active', 'is-enter');
    // 現在の表示画像番号を更新
    this.mvCurrent = nextNum;
    // アニメーションが完了したら不要なクラス名を削除
    setTimeout(() => {
      currentItem.classList.remove('is-active', 'is-leave');
      nextItem.classList.remove('is-enter');
    }, this.mvDuration);
    // 指定時間後に次の画像を表示
    setTimeout(() => {
      this.mvAnim();
    }, this.mvInterval);
  }
}
