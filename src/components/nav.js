import App from "../class/App";

export default function nav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  nav.className = "navigation";
  ul.className = "navigation_list";

  for (const link in App.getLinks()) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.append(a);
    li.className = "link";
    const l = link
      .split("")
      .filter((c) => {
        return c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122;
      })
      .join("")
      .replace("pagejs", "");
    a.textContent = l;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      App.changePage(l);
    });
    ul.append(li);
  }
  nav.append(ul);
  return nav;
}
