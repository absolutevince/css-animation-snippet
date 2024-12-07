import Page from "../class/Page.js";
import nav from "../components/nav.js";

export default function loadingPage() {
  const page = new Page("loading");
  const title = document.createElement("h1");

  page.init();
  title.textContent = page.name;
  page.header.append(title);
  page.main.append(nav());

  return page.getElement();
}
