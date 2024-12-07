export default function content(data) {
  const container = document.createElement("article");
  const h2 = document.createElement("h3");
  const preview = document.createElement("div");
  const codeButton = document.createElement("button");

  container.classList = "content";
  h2.className = "content_title";
  preview.className = "content_preview";
  codeButton.className = "content_code_button";

  h2.textContent = data.title;

  container.append(h2, preview, codeButton);
  return container;
}
