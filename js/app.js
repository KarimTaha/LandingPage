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
        "id": "section_one",
        "targetId": "section1"
    },
    {
        "name": "Section Two",
        "id": "section_two",
        "targetId": "section2"
    },
    {
        "name": "Section Three",
        "id": "section_three",
        "targetId": "section3"
    }];

const navbar = document.querySelector('nav');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getClosestElement(yPosition) {
    let resultSectionId;
    let minDistance = -1;
    for (const section of navbarSections) {
        let currentSection = document.querySelector(`#${section.targetId}`);
        let distance = currentSection.getBoundingClientRect().top;
        let absDistance = Math.abs(distance);

        if (minDistance == -1 || absDistance < minDistance) {
            resultSectionId = section.targetId;
            minDistance = absDistance;
        }
    }
    return resultSectionId;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar() {
    const navbarList = document.querySelector('#navbar__list');
    const fragment = document.createDocumentFragment();
    let currentSectionLi;

    for (const section of navbarSections) {
        currentSectionLi = document.createElement('li');
        currentSectionLi.id = section.id;
        currentSectionLi.className = "menu__link";
        currentSectionLi.innerHTML = `<a href="#${section.targetId}">${section.name}</a>`;
        fragment.appendChild(currentSectionLi);
    }
    navbarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function addActiveClass(activeSectionId) {
    for (const section of navbarSections) {
        let currentSection = document.querySelector(`#${section.targetId}`);
        if (section.targetId == activeSectionId) {
            if (!currentSection.classList.contains("your-active-class")){
                currentSection.classList.add('your-active-class');
            }
        }
        else {
            if (currentSection.classList.contains("your-active-class")){
                currentSection.classList.remove('your-active-class');
            }
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(sectionId) {
    const targetElement = document.querySelector(`${sectionId}`);
    targetElement.scrollIntoView();
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
// Scroll to section on link click
navbar.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A'){
        event.preventDefault();
        scrollToSection(event.target.getAttribute("href"));
    }
})
// Set sections as active
document.addEventListener('scroll', function () {
    const yPosition = window.scrollY;
    const activeSection = getClosestElement(yPosition);
    addActiveClass(activeSection);
});

