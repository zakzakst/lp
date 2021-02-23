'use strict';

export class SplitText {
  els: HTMLCollection;
  constructor(elClass: string) {
    this.els = document.getElementsByClassName(elClass);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.els.length) return;
    // 各要素のテキストを分割してspanタグでくくる
    [...this.els].forEach(el => {
      const text = el.textContent;
      const newText = this.splitBySpan(text);
      el.innerHTML = newText;
    });
  }

  /**
   * テキストを分割してspanタグでくくる
   * @param text 分割したいテキスト
   * @returns 分割後のテキスト
   */
  splitBySpan(text: string): string {
    let result = '';
    text.split('').forEach(c => {
      result += `<span>${c}</span>`;
    });
    return result;
  }
}
