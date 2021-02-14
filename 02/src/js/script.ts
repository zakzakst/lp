'use strict';

// ローダースクリプトとヒーロースクリプトの実行
import { Loader } from './_module/loader';
import { Hero } from './_module/hero';
(() => {
  // ヒーロー初期化
  const hero = new Hero(
    'js-section-hero',
    'section-hero__mv-item',
    'section-hero__mv-img'
  );
  hero.init();
  // ローダー初期化
  const loader = new Loader(
    'js-loader',
    'loader__bg',
    'loader__content',
    () => {
      // ローダーを閉じた後にヒーローアニメーションを実行
      hero.startAnim();
    }
  );
  // データ読み込み完了後、ローダーを閉じる
  window.onload = () => {
    setTimeout(() => {
      loader.closeLoader();
    }, 400);
  }
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

// FAQスクリプトの実行
import { FaqList } from './_module/faq-list';
(() => {
  const faqTabEls = document.getElementsByClassName('faq-list__tab-item');
  const faqContentEls = document.getElementsByClassName('faq-list__content');
  const faqList = new FaqList(faqTabEls, faqContentEls);
  faqList.init();
})();

// トップへ戻るスクリプトの実行
import { FooterGoTop } from './_module/footer-go-top';
(() => {
  const footerGoTop = new FooterGoTop('js-footer-go-top');
  footerGoTop.init();
})();

// スクロールアニメーションスクリプトの実行
import { ScrollAnim } from './_module/scroll-anim';
(() => {
  const scrollAnim = new ScrollAnim('js-scroll-anim');
  scrollAnim.init();
})();
