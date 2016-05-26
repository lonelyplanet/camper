export default class Camper {
  constructor({ pages }) {
    this.pages = pages;
  }

  build() {
    this.pages.forEach((p) => p.compiler.compile(p));
  }
}
