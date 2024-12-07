import homePage from "../pages/home_page";
import loadingPage from "../pages/loading_page";

export default class App {
  static #links = { home: () => homePage(), loading: () => loadingPage() }; // need to call the function inside of a anonymous fn to prevent from getting reference error from using App class before initialization
  static #wrapper = document.querySelector(".wrapper");
  static #currentPage = "loading";

  static init() {
    this.reload();
  }

  static getLinks() {
    return this.#links;
  }

  static getCurrentPage() {
    return this.#links[this.#currentPage]();
  }

  static changePage(pageName) {
    if (this.#links[pageName]) {
      this.#currentPage = pageName;
    } else {
      throw new Error("Page doesn't exist");
    }

    this.reload();
  }

  static reload() {
    this.#wrapper.innerHTML = "";
    this.#wrapper.append(this.getCurrentPage());
  }
}
