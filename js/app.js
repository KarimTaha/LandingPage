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
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function addActiveClass(activeSectionId) {
    let currentSection = document.querySelector(`#${activeSectionId}`);
    currentSection.classList.add('your-active-class');
}

function removeActiveClass(activeSectionId) {
    let currentSection = document.querySelector(`#${activeSectionId}`);
    currentSection.classList.remove('your-active-class');
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar() {
    const navbarSections = document.getElementsByTagName('section');
    const navbarList = document.querySelector('#navbar__list');

    for (const section of navbarSections) {
        navbarList.innerHTML += `
        <li>
            <a href="#${section.id}" class="menu__link">
                ${section.getAttribute('data-nav')}
            </a>
        </li>`
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', function () {
    buildNavbar();
});

// Set sections as active

// callback function
const callbackFunction = (entries) => {
    entries.forEach((entry) => {
        // only do animation if the element is fully on screen
        if (entry.isIntersecting) {
            addActiveClass(entry.target.id)
        } else {
            removeActiveClass(entry.target.id)
        }
    });
}

// options for IntersectionObserver
const options = {
    threshold: 0.75,
};
// Create the IntersectionObserver
const observer = new IntersectionObserver(callbackFunction, options);

// Observe sections in HTML
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
    observer.observe(section);
});
