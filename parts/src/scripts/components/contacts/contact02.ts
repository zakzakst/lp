export function contact02() {
  const contactEls = document.getElementsByClassName('js-contact-02-item');
  [...contactEls].forEach(el => {
    const contact = new Contact02(<HTMLElement>el);
    contact.init();
  });
}

class Contact02 {
  contactEl: HTMLElement;
  panelIconEl: HTMLElement;
  panelTextEl: HTMLElement;
  panelArrowEl: HTMLElement;
  constructor(contactEl: HTMLElement) {
    this.contactEl = contactEl;
    this.panelIconEl = <HTMLElement>this.contactEl.getElementsByClassName('contact-02__panel-icon-svg')[0];
    this.panelTextEl = <HTMLElement>this.contactEl.getElementsByClassName('contact-02__panel-text')[0];
    this.panelArrowEl = <HTMLElement>this.contactEl.getElementsByClassName('contact-02__panel-arrow-svg')[0];
  }
  /**
   * 初期化
   */
  init() {
    this.cloneEl(this.panelIconEl);
    this.cloneEl(this.panelArrowEl);
    this.splitText();
  }

  /**
   * 要素を複製する
   * @param el 複製する要素
   */
  cloneEl(el: HTMLElement) {
    const cloneEl = el.cloneNode(true);
    const parentEl = el.parentNode;
    parentEl.appendChild(cloneEl);
  }

  /**
   * テキストを分割してspanでくくる
   */
  splitText() {
    const text = this.panelTextEl.innerText;
    let html = '';
    text.split('').forEach(c => {
      html += `
        <span class="contact-02__panel-text-c">
          <span>${c}</span>
          <span>${c}</span>
        </span>
      `;
    });
    this.panelTextEl.innerHTML = html;
  }
}
