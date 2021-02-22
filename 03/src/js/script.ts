'use strict';
import { Loader } from './_module/loader';
import { Hero } from './_module/hero';
import { FooterGoTop } from './_module/footer-go-top';
import { ScrollAnim } from './_module/scroll-anim';
import { Header } from './_module/header';

// ページ表示スクリプトの実行
(() => {
  // MVスクリプトの初期化
  const hero = new Hero('js-hero-bg');
  hero.init();
  // ローダースクリプトの実行
  const loader = new Loader(
    'js-loader',
    'js-loader-text',
    'js-loader-progress',
    () => {
      // MVスクリプトの開始
      hero.start();
    }
  );
  loader.init();
})();

// トップへ戻るスクリプトの実行
(() => {
  const footerGoTop = new FooterGoTop('js-footer-go-top');
  footerGoTop.init();
})();

// スクロールアニメーションスクリプトの実行
(() => {
  const scrollAnim = new ScrollAnim('js-scroll-anim');
  scrollAnim.init();
})();

// ヘッダースクリプトの実行
(() => {
  const header = new Header(
    'js-header-button',
    'js-header-menu',
    'js-header-close'
  );
  header.init();
})();
