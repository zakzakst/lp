'use strict';

// ヘッダースクリプトの実行
import { Header } from './_module/header';
(() => {
  const header = new Header(
    'js-header-button',
    'js-header-menu'
  );
  header.init();
})();

// ヒーロースクリプトの実行
import { Hero } from './_module/hero';
(() => {
  const hero = new Hero(
    'js-section-hero',
    'section-hero__mv-item',
    'section-hero__mv-img'
  );
  setTimeout(() => {
    hero.init();
  }, 1000);
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
