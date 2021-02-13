import { FaqList } from './_module/faq-list';

(() => {
  const faqTabEls = document.getElementsByClassName('faq-list__tab-item');
  const faqContentEls = document.getElementsByClassName('faq-list__content');
  const faqList = new FaqList(faqTabEls, faqContentEls);
  faqList.init();
})();
