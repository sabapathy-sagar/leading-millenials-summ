const accordions = Array.from(document.querySelectorAll(".accordion"));

for (let accordion of accordions) {
  const accordionHeader = accordion.querySelector(".accordion__header");

  accordionHeader.addEventListener("click", event => {
    accordion.classList.toggle("is-open");
  });
}
