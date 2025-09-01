const url = new URL(window.location.href);
const lang = url.searchParams.get('lang');

if (lang) {
    elements = document.querySelectorAll(`h1[lang=${lang}]`);
  for (let element of elements) {
    element.style.display = 'inherit';
  }
}