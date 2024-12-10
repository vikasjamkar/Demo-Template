// Select all navigation links
// const navLinks = document.querySelectorAll("nav a");

// // Remove the active class from all links and set the first one as active by default
// function setDefaultActive() {
//   navLinks.forEach(link => link.classList.remove("active"));
//   if (navLinks.length > 0) {
//     navLinks[0].classList.add("active"); // First link ("Who We Are")
//   }
// }

// // Call the function to ensure the default active state
// setDefaultActive();

// // Add click event listeners to update the active class
// navLinks.forEach(link => {
//   link.addEventListener("click", event => {
//     // Remove active class from all links
//     navLinks.forEach(nav => nav.classList.remove("active"));

//     // Add active class to the clicked link
//     link.classList.add("active");
//   });
// });

    document.addEventListener("DOMContentLoaded", function () {
        // Get the current page URL
        const currentPage = window.location.pathname.split("/").pop();

        // Select all anchor tags within the nav
        const navLinks = document.querySelectorAll("nav a");

        navLinks.forEach(link => {
            // Check if the href matches the current page
            if (link.getAttribute("href") === currentPage) {
                // Add the active class
                link.classList.add("active");
            }
        });
    });


// // Get all the circles and the dotted circle container
// const circles = document.querySelectorAll('.circle');
// const dottedCircleContainer = document.querySelector('.dotted-circle-container');
// const infoText = dottedCircleContainer.querySelector('.info-text');

// // Event listener to handle hover
// circles.forEach(circle => {
//     circle.addEventListener('mouseenter', () => {
//         // Get the data-info and data-description attributes
//         const info = circle.getAttribute('data-info');
//         const description = circle.getAttribute('data-description');
        
//         // Set the info and description dynamically in the dotted circle
//         infoText.innerHTML = `${info}<br>${description}`;
        
//         // Show the dotted circle content
//         dottedCircleContainer.classList.add('show');
//     });

//     // Hide the dotted circle when mouse leaves
//     circle.addEventListener('mouseleave', () => {
//         dottedCircleContainer.classList.remove('show');
//     });
// });



// Get all the circles and the dotted circle container
const circles = document.querySelectorAll('.circle');
const dottedCircleContainer = document.querySelector('.dotted-circle-container');
const infoText = dottedCircleContainer.querySelector('.info-text');

// Event listener to handle hover
circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        // Remove the circle-hover class from all circles
        circles.forEach(c => c.classList.remove('circle-hover'));
        
        // Add the circle-hover class to the hovered circle
        circle.classList.add('circle-hover');
        
        // Get the data-info and data-description attributes
        const info = circle.getAttribute('data-info');
        const description = circle.getAttribute('data-description');
        
        // Set the info and description dynamically in the dotted circle
        infoText.innerHTML = `${info}<br>${description}`;
        
        // Show the dotted circle content
        dottedCircleContainer.classList.add('show');
    });
});




document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.querySelector("nav");
  const menuIcon = navToggle.querySelector(".menu-icon");

  navToggle.addEventListener("click", () => {
    // Toggle the mobile nav visibility
    mobileNav.classList.toggle("nav");

    // Change the icon between hamburger and cross
    if (mobileNav.classList.contains("nav")) {
      menuIcon.textContent = "✕"; // Cross icon
    } else {
      menuIcon.textContent = "☰"; // Hamburger icon
    }
  });
});