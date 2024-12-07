import Page from "../class/Page.js";
import nav from "../components/nav.js";

export default function homePage() {
  const page = new Page("home");
  const title = document.createElement("h1");

  title.textContent = "CSS Animation Snippets";

  page.init();
  page.header.append(title);
  page.main.append(nav());

  return page.getElement();
}
