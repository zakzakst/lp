'use strict';

import $ from 'jquery';
import 'lightbox2';

import { FooterGoTop } from './_module/footer-go-top';
import { AnchorScroll } from './_module/anchor-scroll';

// トップへ戻るスクリプトの実行
(() => {
  const footerGoTop = new FooterGoTop('js-footer-go-top');
  footerGoTop.init();
})();

// ページ内リンクスクリプトの実行
(() => {
  const anchorScroll = new AnchorScroll('js-anchor-scroll');
  anchorScroll.init();
})();
