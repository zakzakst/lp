'use strict';
import { FooterGoTop } from './_module/footer-go-top';

// トップへ戻るスクリプトの実行
(() => {
  const footerGoTop = new FooterGoTop('js-footer-go-top');
  footerGoTop.init();
})();
