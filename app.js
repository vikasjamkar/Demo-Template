// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

// Remove the active class from all links and set the first one as active by default
function setDefaultActive() {
  navLinks.forEach(link => link.classList.remove("active"));
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active"); // First link ("Who We Are")
  }
}

// Call the function to ensure the default active state
setDefaultActive();

// Add click event listeners to update the active class
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    // Remove active class from all links
    navLinks.forEach(nav => nav.classList.remove("active"));

    // Add active class to the clicked link
    link.classList.add("active");
  });
});


// Get all the circles and the dotted circle container
const circles = document.querySelectorAll('.circle');
const dottedCircleContainer = document.querySelector('.dotted-circle-container');
const infoText = dottedCircleContainer.querySelector('.info-text');

// Event listener to handle hover
circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        // Get the data-info and data-description attributes
        const info = circle.getAttribute('data-info');
        const description = circle.getAttribute('data-description');
        
        // Set the info and description dynamically in the dotted circle
        infoText.innerHTML = `${info}<br>${description}`;
        
        // Show the dotted circle content
        dottedCircleContainer.classList.add('show');
    });

    // Hide the dotted circle when mouse leaves
    circle.addEventListener('mouseleave', () => {
        dottedCircleContainer.classList.remove('show');
    });
});

