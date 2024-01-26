let accordions = document.getElementsByClassName("accordion-btn");
let i;

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    toggleAccordion(this);
  });
}

function toggleAccordion(item) {
  toggleIcon(item);
  togglePanelVisibility(item);
}

function toggleIcon(item) {
  let icon = item.querySelector(".accordion-icon");
  icon.classList.toggle("active");
}

function togglePanelVisibility(item) {
  let panel = item.nextElementSibling;
  panel.classList.toggle("active");
}
