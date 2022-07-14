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
          //add class to section
            entry.target.classList.add("active");
            //add class to navbar link
        let index = entry.target
          .getAttributeNode("data-nav")
          .value.split(" ")[1];
        navBarItems[index - 1].classList.add("active");
        } else {
            //remove class from the section
            entry.target.classList.remove("active");
            //remove class from the navbar link 
        let index = entry.target
          .getAttributeNode("data-nav")
          .value.split(" ")[1];
        navBarItems[index - 1].classList.remove("active");
      }
    });
  },
    {
      // when 70% of elemen inside the viewport class active added or removed 
    threshold: 0.7,
  }
);
// observe work on one element only so loop 
sections.forEach((section) => {
  observer.observe(section);
});
// Scroll to anchor ID using scrollTO event

navBarItems.forEach((navbarItem) => {
  navbarItem.addEventListener("click", function (event) {
    event.preventDefault();
    const index = navbarItem.getAttributeNode("href").value;
    let section = document.querySelector(index);
    console.log(section);
    window.scrollTo(
      section.getBoundingClientRect().x,
      section.getBoundingClientRect().y
    );
  });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
