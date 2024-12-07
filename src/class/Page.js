export default class Page {
  #container;
  constructor(name) {
    this.name = name;
    this.#container = document.createElement("section");
  }

  init() {
    this.#container.className = `${this.name}_page`;
    const header = document.createElement("header");
    const main = document.createElement("main");
    header.className = `${this.name}_header container`;
    main.className = `${this.name}_main container`;
    this.append(header, main);
  }

  append(...elements) {
    this.#container.append(...elements);
  }

  remove(...elements) {
    this.#container.remove(...elements);
  }

  get header() {
    const nodes = this.#container.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].className.includes(`${this.name}_header`)) {
        return nodes[i];
      }
    }
  }

  get main() {
    const nodes = this.#container.childNodes;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].className.includes(`${this.name}_main`)) {
        return nodes[i];
      }
    }
  }

  getElement() {
    return this.#container;
  }
}
