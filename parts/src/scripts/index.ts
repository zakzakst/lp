'use strict';

// ボタン
import { splitText as button04 } from './components/buttons/button04';
button04('js-button-04-text');
import { splitText as button10 } from './components/buttons/button10';
button10('js-button-04-text');
button10('js-button-04-hover-text');
import { splitCloneText as button12 } from './components/buttons/button12';
button12('js-button-12', 'button-12__char');

// カード
import { card03 } from './components/cards/card03';
card03();

// スクロールアニメーション
import { scrollAnim01 } from './components/scroll-anims/scroll-anim01';
scrollAnim01();
import { scrollAnim02 } from './components/scroll-anims/scroll-anim02';
scrollAnim02();
