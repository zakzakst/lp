'use strict';

export function card03() {
  console.log('card03');
}

class test {
  charClass: string;
  colors: string[];
  constructor() {
    this.charClass = 'card-03__char';
    this.colors = [
      '#f0f',
      '#ff0',
      '#0ff'
    ];
  }
  /**
   * アニメーション用にテキストを加工する
   * @param text 加工するテキスト
   */
  makeAnimText(text: string) {
    let result: string = '';
    text.split('').forEach(c => {
      result += `
        <span class="${this.charClass}">
          ${c}
          <span>${c}</span>
          <span>${c}</span>
          <span>${c}</span>
        </span>
      `;
    });
    return result;
  }

  /**
   * ランダムのスタイルを取得する
   */
  getRandomStyle() {}
}
