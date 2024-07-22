const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

const navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  }

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

[...navLink].forEach((nav) => {
  nav.addEventListener("click", () => {
    if (primaryNav.getAttribute("data-visible") === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });
});

function adjustPositions() {
  const pageHeader = document.querySelector('header');
  const sectionHeader = document.querySelector('.section-header');
  const stickyTOC = document.querySelector('.sticky-table-of-contents');
  const pageHeaderHeight = pageHeader.offsetHeight;
  const sectionHeaderHeight = sectionHeader.offsetHeight;
  sectionHeader.style.top = `${pageHeaderHeight - 1}px`;
  stickyTOC.style.top = `${pageHeaderHeight + sectionHeaderHeight - 1.4}px`;
}

window.addEventListener('DOMContentLoaded', function() {
  adjustPositions();
});

window.addEventListener('resize', adjustPositions);