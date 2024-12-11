document.addEventListener("DOMContentLoaded", function () {
  // Navigation active link setup
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.querySelector("nav");
  const menuIcon = navToggle.querySelector(".menu-icon");
  if (navToggle && mobileNav && menuIcon) {
    navToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("nav");
      menuIcon.textContent = mobileNav.classList.contains("nav") ? "✕" : "☰";
    });
  }

  // Circle hover interaction
  const circles = document.querySelectorAll('.circle');
  const dottedCircleContainer = document.querySelector('.dotted-circle-container');
  const infoText = dottedCircleContainer?.querySelector('.info-text');
  if (circles.length > 0 && dottedCircleContainer && infoText) {
    circles.forEach(circle => {
      circle.addEventListener('mouseenter', () => {
        circles.forEach(c => c.classList.remove('circle-hover'));
        circle.classList.add('circle-hover');
        const info = circle.getAttribute('data-info');
        const description = circle.getAttribute('data-description');
        infoText.innerHTML = `${info}<br>${description}`;
        dottedCircleContainer.classList.add('show');
      });
    });
  }

   // Reusable tab navigation functionality
   document.querySelectorAll('.tab-section').forEach(section => {
    const tabTitles = section.querySelectorAll('.tab-nav-title');
    const tabContents = section.querySelectorAll('.tab-nav-info');

    // Add click event listener to each tab title
    tabTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Remove active class from all titles and contents within this section
            tabTitles.forEach(tab => tab.classList.remove('tab-active'));
            tabContents.forEach(content => content.classList.remove('tab-active'));

            // Add active class to clicked title and corresponding content
            title.classList.add('tab-active');
            const infoId = title.getAttribute('data-info');
            section.querySelector(`#${infoId}`).classList.add('tab-active');
        });
    });

    // Set default active tab for each section
    if (tabTitles.length > 0 && tabContents.length > 0) {
        tabTitles[0].classList.add('tab-active');
        tabContents[0].classList.add('tab-active');
    }
});

});
