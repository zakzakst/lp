'use strict';
import { Loader } from './_module/loader';
import { Hero } from './_module/hero';
import { FooterGoTop } from './_module/footer-go-top';
import { ScrollAnim } from './_module/scroll-anim';
import { Header } from './_module/header';
import { HeaderNav } from './_module/header-nav';
import { HeaderMenu } from './_module/header-menu';

// ページ表示スクリプトの実行
(() => {
  // MVスクリプトのインスタンス作成
  const hero = new Hero('js-hero-bg');
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

// ヘッダースクリプトの実行
(() => {
  // ヘッダー
  const header = new Header(
    'js-header-button',
    'js-header-menu',
    'js-header-close'
  );
  header.init();
  // ヘッダーナビゲーション
  const headerNav = new HeaderNav(
    'js-header-nav',
    'js-header-nav-wrapper',
    'js-header-detail'
  );
  headerNav.init();
  // ヘッダーメニュー
  const headerMenuItems = document.getElementsByClassName('js-header-menu-item');
  [...headerMenuItems].forEach(el => {
    const headerMenuItem = new HeaderMenu(el);
    headerMenuItem.init();
  })
})();
