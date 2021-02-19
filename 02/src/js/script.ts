'use strict';

import { VoiceList } from './_module/voice-list';

// お客様の声スクリプトの実行
(() => {
  const voiceList = new VoiceList('js-voice-list');
  voiceList.init();
})();

// トップへ戻るスクリプトの実行
import { FooterGoTop } from './_module/footer-go-top';
(() => {
  const footerGoTop = new FooterGoTop('js-footer-go-top');
  footerGoTop.init();
})();
