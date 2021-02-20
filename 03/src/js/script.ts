'use strict';
import { Loader } from './_module/loader';
import { VoiceList } from './_module/voice-list';
import { Header } from './_module/header';
import { FooterGoTop } from './_module/footer-go-top';
import { SplitText } from './_module/split-text';
import { ScrollAnim } from './_module/scroll-anim';

// ページ表示アニメーション
(() => {
  const el = document.querySelector('.hero-section');
  const loader = new Loader('js-loader', () => {
    // ローダーを閉じた後にヒーローアニメーションを実行
    el.classList.add('is-animated');
  });
  // データ読み込み完了後、ローダーを閉じる
  window.onload = () => {
    setTimeout(() => {
      loader.closeLoader();
    }, 400);
  }
})();

// お客様の声スクリプトの実行
(() => {
  const voiceList = new VoiceList('js-voice-list');
  voiceList.init();
})();

// ヘッダースクリプトの実行
(() => {
  const header = new Header(
    'js-header-button',
    'js-header-menu'
  );
  header.init();
})();

// トップへ戻るスクリプトの実行
(() => {
  const footerGoTop = new FooterGoTop('js-footer-go-top');
  footerGoTop.init();
})();

// 文言分割スクリプトの実行
(() => {
  const splitText = new SplitText('js-split-text');
  splitText.init();
})();

// スクロールアニメーションスクリプトの実行
(() => {
  const scrollAnim = new ScrollAnim('js-scroll-anim');
  scrollAnim.init();
})();
