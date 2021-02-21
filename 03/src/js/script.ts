'use strict';
import { Hero } from './_module/hero';
import { FooterGoTop } from './_module/footer-go-top';
import { ScrollAnim } from './_module/scroll-anim';

// MVスクリプトの実行
(() => {
  const hero = new Hero('js-hero-bg');
  hero.init();
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
