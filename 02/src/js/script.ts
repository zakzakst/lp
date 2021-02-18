'use strict';

import { VoiceList } from './_module/voice-list';

// お客様の声スクリプトの実行
(() => {
  const voiceList = new VoiceList('js-voice-list');
  voiceList.init();
})();
