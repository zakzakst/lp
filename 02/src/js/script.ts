'use strict';

import { VoiceList } from './_module/voice-list';

// ページ表示アニメーション
(() => {
  setTimeout(() => {
    const el = document.querySelector('.hero-section');
    el.classList.add('is-animated');
  }, 500);
})();

// お客様の声スクリプトの実行
(() => {
  const voiceList = new VoiceList('js-voice-list');
  voiceList.init();
})();

// ヘッダースクリプトの実行
import { Header } from './_module/header';
(() => {
  const header = new Header(
    'js-header-button',
    'js-header-menu'
  );
  header.init();
})();

// トップへ戻るスクリプトの実行
import { FooterGoTop } from './_module/footer-go-top';
(() => {
  const footerGoTop = new FooterGoTop('js-footer-go-top');
  footerGoTop.init();
})();

// 文言分割スクリプトの実行
import { SplitText } from './_module/split-text';
(() => {
  const splitText = new SplitText('js-split-text');
  splitText.init();
})();

// スクロールアニメーションスクリプトの実行
import { ScrollAnim } from './_module/scroll-anim';
(() => {
  const scrollAnim = new ScrollAnim('js-scroll-anim');
  scrollAnim.init();
})();
