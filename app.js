// Define global variables
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build the navigation menu
function buildNavMenu() {
  for (const section of sections) {
    const sectionId = section.id;
    const sectionName = section.dataset.nav;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`;
    navbarList.appendChild(listItem);
  }
}

// Update the active section and menu item
function updateActiveSection() {
  for (const section of sections) {
    const sectionRect = section.getBoundingClientRect();
    if (sectionRect.top >= 0 && sectionRect.top <= window.innerHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
}

// Get the navbar
const navbar = document.querySelector('nav');

// Add an event listener to the window to update the active section and menu item on scroll
window.addEventListener('scroll', updateActiveSection);

// Add an event listener to each link in the navbar
const links = navbar.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute('href'); // Get the link target ID
    const targetElement = document.querySelector(targetId); // Get the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Animate smooth scroll to target element
    }
  });
});

// Call the buildNavMenu function to generate the navigation menu
buildNavMenu();

// Update the active section and menu item on page load
updateActiveSection();
  
// Check if jQuery is loaded before using it
if (typeof jQuery !== 'undefined') {
  $(document).ready(() => {
    // Get the current page URL
    const currentPageUrl = window.location.href;

    // Loop through each navigation link and check if it matches the current page URL
    $('a').each(function() {
      const navLinkUrl = $(this).attr('href');
      if (currentPageUrl.indexOf(navLinkUrl) !== -1) {
        $(this).addClass('active'); // Add 'active' class to the matching navigation link
      } else {
        $(this).removeClass('active'); // Remove 'active' class from non-matching navigation links
      }
    });
  });
} else {
  console.log('jQuery is not loaded');
}
