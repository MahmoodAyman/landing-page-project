let navbarList = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");

// build the dynamic navbar

const fragment = document.createDocumentFragment();
function createNavbar() {
  sections.forEach((section) => {
    const navbarItem = document.createElement("li");
    navbarItem.innerHTML = `<a href="#${
      section.getAttributeNode("id").value
    }" class="menu__link">${section.getAttributeNode("data-nav").value}</a>`;
    fragment.appendChild(navbarItem);
  });
  navbarList.appendChild(fragment);
}
createNavbar();

// Add class 'active' to section when near top of viewport
let navBarItems = document.querySelectorAll("li a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        //add class to navbar link that is related to the active section
        // by using data-nav attributeand split it I can get the number of the section 
        // and use it as an index in navBarItems list.
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
    threshold: 0.7,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Scroll to anchor ID using scrollTO event

navBarItems.forEach((navbarItem) => {
  navbarItem.addEventListener("click", function (event) {
    event.preventDefault();
    const index = navbarItem.getAttributeNode("href").value;
    console.log(index);
    let section = document.querySelector(index);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

//make responsive navigation bar
let navbarToggler = document.querySelector(".navbar__toggle");
let pageHeader = document.querySelector(".page__header");
navbarToggler.addEventListener("click", function navigationMenu(event) {
  pageHeader.classList.toggle("show");
  navbarToggler.classList.toggle("activeNav");
  if (!navbarToggler.contains(event.target)) {
    pageHeader.classList.remove("show");
    navbarToggler.classList.remove("activeNav");
  }
});
