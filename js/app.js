/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let navbarList = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const fragment = document.createDocumentFragment();
sections.forEach((section) => {
  const navbarItem = document.createElement("li");
  navbarItem.innerHTML = `<a href="#${
    section.getAttributeNode("id").value
  }" class="menu__link">${section.getAttributeNode("data-nav").value}</a>`;
  fragment.appendChild(navbarItem);
});
navbarList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
let navBarItems = document.querySelectorAll("li a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        let index = entry.target
          .getAttributeNode("data-nav")
          .value.split(" ")[1];
        navBarItems[index - 1].classList.add("active");
      } else {
        entry.target.classList.remove("active");
        let index = entry.target
          .getAttributeNode("data-nav")
          .value.split(" ")[1];
        navBarItems[index - 1].classList.remove("active");
      }
    });
  },
  {
    threshold: 0.8,
  }
);
sections.forEach((section) => {
  observer.observe(section);
});
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
