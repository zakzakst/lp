import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnim {
  els: HTMLCollection;
  constructor(elClass: string) {
    this.els = document.getElementsByClassName(elClass);
  }

  /**
   * 初期化
   */
  init(): void {
    if (!this.els.length) return;
    console.log('test');
    [...this.els].forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 70%",
        onEnter: self => {
          el.classList.add('is-animated');
          self.kill();
        }
      });
    });
  }
}
