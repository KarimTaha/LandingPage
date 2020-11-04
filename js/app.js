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
const navbarSections = [{
        "name": "Section One",
        "id": "section_one"
    },
    {
        "name": "Section Two",
        "id": "section_two"
    },
    {
        "name": "Section Three",
        "id": "section_three"
    }];

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
document.addEventListener('DOMContentLoaded', function () {
    const navbarList = document.querySelector('#navbar__list');
    const fragment = document.createDocumentFragment();
    let currentSectionLi;

    for (const section of navbarSections) {
        currentSectionLi = document.createElement('li');
        currentSectionLi.id = section.id;
        currentSectionLi.textContent = section.name;
        currentSectionLi.className = "menu__link";
        fragment.appendChild(currentSectionLi);
    }
    navbarList.appendChild(fragment);
});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


