# Landing Page Project

first I linked Html with JS files.

- I divide the project requirements into parts:

        1. Build dynamic navigation bar for sections with Js.
- to create navbar I used a fragment.
- I used for loop to create navbar items and then append it to the fragment. 
- create element li and then by backtick I created inside it an anchor tag with href that I get by id name of the section.
- create text content inside the anchor tag by using text inside data-nav attribute.
- append the li to the fragment.
- append the fragment to the navbar.
       
        2. add class active to section when newa top of viewport.

- for this part I select all navbar items by querSelectorAll method.
- and used IntersectionObserver to observe the top of viewport.
- by threshold I set the top of viewport to 0.7 that means when 70% of the element inside the viewport class active will be added.
- I used for Each method to add class active to the element.
- and to add active class to the navbar item that is related to the current section shown in viewport.

    - I create a variable.
    - in this variable I get the data-nav attribute value of the current section shown in viewport.
    - I used split method to get the value of the number in data-nav attribute and this will be the index of the navbar item in navBarItems list that I created before that will be added class active.
- I used forEach method to observe every section in sections node list.

        3. Scroll to anchor ID using JavaScript.

- first I used forEach method to loop on each navbar item.
- I used addEventListener method to add event listener to the navbar item with event.
- I used preventDefault method to prevent the default action of the event.
- I used variable called index to get the id of section that I want to scroll to by using getAttributeNode and passing "href" cause when I declared those navbar Items earlier I give each anchor tag the id of the section that is related for.
- I used scrollIntoView method to scroll to the section that has the same id as the navbar item.

---
I make a responsive navigation bar that appears in phone screen size.
- I used a media query to make the navigation bar appear and disappear in phone screen size.
- I declared a new class called "show" to control the display of the header.
- by JS I add a class show to the header when a click event happens to the toggler I have created.